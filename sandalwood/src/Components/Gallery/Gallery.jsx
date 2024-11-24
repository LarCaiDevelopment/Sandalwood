import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./Gallery.scss";

function Gallery() {
  const categories = [
    {
      thumbnail: "https://via.placeholder.com/600x400?text=Category+1",
      images: [
        "https://via.placeholder.com/600x400?text=Category1-Image1",
        "https://via.placeholder.com/600x400?text=Category1-Image2",
        "https://via.placeholder.com/600x400?text=Category1-Image3",
      ],
    },
    {
      thumbnail: "https://via.placeholder.com/600x400?text=Category+2",
      images: [
        "https://via.placeholder.com/600x400?text=Category2-Image1",
        "https://via.placeholder.com/600x400?text=Category2-Image2",
        "https://via.placeholder.com/600x400?text=Category2-Image3",
      ],
    },
    {
      thumbnail: "https://via.placeholder.com/600x400?text=Category+3",
      images: [
        "https://via.placeholder.com/600x400?text=Category3-Image1",
        "https://via.placeholder.com/600x400?text=Category3-Image2",
        "https://via.placeholder.com/600x400?text=Category3-Image3",
      ],
    },
    {
      thumbnail: "https://via.placeholder.com/600x400?text=Category+4",
      images: [
        "https://via.placeholder.com/600x400?text=Category4-Image1",
        "https://via.placeholder.com/600x400?text=Category4-Image2",
        "https://via.placeholder.com/600x400?text=Category4-Image3",
      ],
    },
  ];

  return (
    <div className="gallery">
      <div className="gallery__wrapper">
        <p className="gallery__tittle">Gallery</p>
        <span className="line__style__gallery"></span>
        <div className="gallery__pics_wrapper">
          {categories.map((category, index) => (
            <PhotoProvider key={index}>
              <div>
                {/* Thumbnail for the category */}
                <PhotoView src={category.thumbnail}>
                  <div
                    className="gallery__pics"
                    style={{
                      backgroundImage: `url(${category.thumbnail})`,
                    }}
                  ></div>
                </PhotoView>

                {category.images.map((image, idx) => (
                  <PhotoView key={`${index}-${idx}`} src={image}>
                    <img
                      src={image}
                      alt={`Category ${index + 1} Image ${idx + 1}`}
                      style={{ display: "none" }} // Hidden images
                    />
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
