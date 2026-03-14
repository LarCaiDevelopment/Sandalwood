import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("src/Assets/Images");
const MAX_DIMENSION = 1800;

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(fullPath);
      }
      return [fullPath];
    }),
  );

  return files.flat();
}

function isImage(filePath) {
  return IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function buildPipeline(inputPath, metadata) {
  const extension = path.extname(inputPath).toLowerCase();
  let pipeline = sharp(inputPath, { failOn: "none" });

  if (metadata.width && metadata.height) {
    pipeline = pipeline.resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  if (extension === ".jpg" || extension === ".jpeg") {
    return pipeline.jpeg({ quality: 72, mozjpeg: true });
  }

  return pipeline.png({
    compressionLevel: 9,
    effort: 10,
    palette: true,
    quality: 75,
  });
}

async function optimizeFile(inputPath) {
  const statBefore = await fs.stat(inputPath);
  const metadata = await sharp(inputPath).metadata();
  const tempPath = `${inputPath}.tmp`;

  await buildPipeline(inputPath, metadata).toFile(tempPath);

  const statAfter = await fs.stat(tempPath);

  if (statAfter.size < statBefore.size) {
    await fs.rename(tempPath, inputPath);
    return {
      optimized: true,
      before: statBefore.size,
      after: statAfter.size,
    };
  }

  await fs.unlink(tempPath);
  return {
    optimized: false,
    before: statBefore.size,
    after: statBefore.size,
  };
}

async function run() {
  const files = (await walk(ROOT)).filter(isImage);

  let optimizedCount = 0;
  let originalBytes = 0;
  let optimizedBytes = 0;

  for (const file of files) {
    const result = await optimizeFile(file);
    originalBytes += result.before;
    optimizedBytes += result.after;

    if (result.optimized) {
      optimizedCount += 1;
    }
  }

  const savedBytes = originalBytes - optimizedBytes;
  const savedPercent = originalBytes === 0 ? 0 : (savedBytes / originalBytes) * 100;

  console.log(`Scanned: ${files.length} images`);
  console.log(`Optimized: ${optimizedCount} images`);
  console.log(`Saved: ${(savedBytes / (1024 * 1024)).toFixed(2)} MB (${savedPercent.toFixed(1)}%)`);
}

run().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
