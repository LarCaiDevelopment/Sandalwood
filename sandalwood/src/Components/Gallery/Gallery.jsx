import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "./Gallery.scss";

import bathroom from '../../Assets/Images/GalleryImages/bathroom1.JPG';
import bathroom2 from '../../Assets/Images/GalleryImages/bathroom2.JPG';
import bathroom3 from '../../Assets/Images/GalleryImages/bathroom3.JPG';
import bathroom4 from '../../Assets/Images/GalleryImages/bathroom4.JPG';
import bathroom5 from '../../Assets/Images/GalleryImages/bathroom5.JPG';
import bathroom6 from '../../Assets/Images/GalleryImages/bathroom6.JPG';
import bathroom7 from '../../Assets/Images/GalleryImages/bathroom7.JPG';
import bathroom8 from '../../Assets/Images/GalleryImages/bathroom8.JPG';
import bathroom9 from '../../Assets/Images/GalleryImages/bathroom9.JPG';
import door from '../../Assets/Images/GalleryImages/doorway1.JPG';
import door2 from '../../Assets/Images/GalleryImages/doorway2.JPG';
import door3 from '../../Assets/Images/GalleryImages/doorway3.JPG';
import door4 from '../../Assets/Images/GalleryImages/doorway4.JPG';
import kitchen from '../../Assets/Images/GalleryImages/kitchen1.JPG';
import kitchen9 from '../../Assets/Images/GalleryImages/kitchen9.JPG';
import kitchen2 from '../../Assets/Images/GalleryImages/kitchen2.JPG';
import kitchen3 from '../../Assets/Images/GalleryImages/kitchen3.JPG';
import kitchen4 from '../../Assets/Images/GalleryImages/kitchen4.JPG';
import kitchen5 from '../../Assets/Images/GalleryImages/kitchen5.JPG';
import kitchen6 from '../../Assets/Images/GalleryImages/kitchen6.JPG';
import kitchen7 from '../../Assets/Images/GalleryImages/kitchen7.JPG';
import kitchen8 from '../../Assets/Images/GalleryImages/kitchen8.JPG';
import living from '../../Assets/Images/GalleryImages/living1.JPG';
import living2 from '../../Assets/Images/GalleryImages/living2.JPG';
import living3 from '../../Assets/Images/GalleryImages/living3.JPG';
import living4 from '../../Assets/Images/GalleryImages/living4.JPG';
import living5 from '../../Assets/Images/GalleryImages/living5.JPG';
import living6 from '../../Assets/Images/GalleryImages/living6.JPG';
import living7 from '../../Assets/Images/GalleryImages/living7.JPG';
import living8 from '../../Assets/Images/GalleryImages/living8.JPG';
import living9 from '../../Assets/Images/GalleryImages/living9.JPG';
import living10 from '../../Assets/Images/GalleryImages/living10.JPG';
import living11 from '../../Assets/Images/GalleryImages/living11.JPG';
import living12 from '../../Assets/Images/GalleryImages/living12.JPG';
import living13 from '../../Assets/Images/GalleryImages/living13.JPG';
import living14 from '../../Assets/Images/GalleryImages/living14.JPG';
import living15 from '../../Assets/Images/GalleryImages/living15.JPG';
import living16 from '../../Assets/Images/GalleryImages/living16.JPG';
import living17 from '../../Assets/Images/GalleryImages/living17.JPG';
import fence from '../../Assets/Images/GalleryImages/fence1.JPG';
import fence2 from '../../Assets/Images/GalleryImages/fence2.JPG';
import fence3 from '../../Assets/Images/GalleryImages/fence3.JPG';
import fence4 from '../../Assets/Images/GalleryImages/fence4.JPG';
import fence5 from '../../Assets/Images/GalleryImages/fence5.JPG';
import fence6 from '../../Assets/Images/GalleryImages/fence6.JPG';
import fence7 from '../../Assets/Images/GalleryImages/fence7.JPG';
import fence8 from '../../Assets/Images/GalleryImages/fence8.JPG';
import storage from '../../Assets/Images/GalleryImages/storage1.JPG';
import storage2 from '../../Assets/Images/GalleryImages/storage2.JPG';
import storage3 from '../../Assets/Images/GalleryImages/storage3.JPG';
import storage4 from '../../Assets/Images/GalleryImages/storage4.JPG';
import storage5 from '../../Assets/Images/GalleryImages/storage5.JPG';
import storage6 from '../../Assets/Images/GalleryImages/storage6.JPG';

function Gallery() {
  const categories = [
    {
      thumbnail: bathroom2,
      images: [
        bathroom,
        bathroom3,
        bathroom4,
        bathroom5,
        bathroom6,
        bathroom7,
        bathroom8,
        bathroom9,
        bathroom4,
      ],
      title: "Bathrooms",
    },
    {
      thumbnail: kitchen9,
      images: [
        kitchen,
        kitchen2,
        kitchen3,
        kitchen4,
        kitchen5,
        kitchen6,
        kitchen7,
        kitchen8,
      ],
      title: "Kitchens",
    },
    {
      thumbnail: fence,
      images: [
        fence2,
        fence3,
        fence4,
        fence5,
        fence6,
        fence7,
        fence8,
      ],
      title: "Fences",
    },
    {
      thumbnail: storage3,
      images: [
        storage,
        storage2,
        storage4,
        storage5,
        storage6,
        living,
        living2,
        living3,
        living4,
        living5,
        living6,
        living7,
        living8,
        living9,
        living10,
        living11,
        living12,
        living13,
        living14,
        living15,
        living16,
        door,
        door2,
        door3,
        door4,
      ],
      title: "Others",
    },
  ];

  return (
    <div id = "gallery" className="gallery">
      <div className="gallery__wrapper">
        <p className="gallery__tittle">Gallery</p>
        <span className="line__style__gallery"></span>
        <div className="gallery__pics_wrapper">
          {categories.map((category, index) => (
            <PhotoProvider key={index} bannerVisible={true}>
              <div>
        
            <PhotoView src={category.thumbnail}>
              <div
                className="gallery__pics"
                style={{
                  backgroundImage: `url(${category.thumbnail})`,
                  position: "relative",
                }}
              >
                <div className="gallery__title">{category.title}</div>
              </div>
            </PhotoView>

                {category.images.map((image, idx) => (
    <PhotoView key={`${index}-${idx}`} src={image}>
    <img
      src={image}
      alt={`Category ${index + 1} Image ${idx + 1}`}
      style={{ display: "none" }}
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
