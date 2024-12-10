import React, { useEffect } from "react";
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
import kitchen10 from '../../Assets/Images/GalleryImages/kitchen10.JPG';
import kitchen11 from '../../Assets/Images/GalleryImages/kitchen11.JPG';
import kitchen12 from '../../Assets/Images/GalleryImages/kitchen12.JPG';
import kitchen13 from '../../Assets/Images/GalleryImages/kitchen13.JPG';
import kitchen14 from '../../Assets/Images/GalleryImages/kitchen14.JPG';
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
        kitchen9,
        kitchen10,
        kitchen11,
        kitchen12,
        kitchen13,
        kitchen14,
      ],
      title: "Kitchens",
    },
    {
      thumbnail: fence6,
      images: [
        fence,
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

  useEffect(() => {
    const addArrows = () => {
      const portal = document.querySelector('.PhotoView-Portal');
      if (portal && !portal.querySelector('.PhotoView-Slider__ArrowLeft') && !portal.querySelector('.PhotoView-Slider__ArrowRight')) {
        const leftArrow = document.createElement('div');
        leftArrow.classList.add('PhotoView-Slider__ArrowLeft');
        leftArrow.innerHTML = `<svg width="44" height="44" viewBox="0 0 768 768"><path d="M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"></path></svg>`;
        leftArrow.addEventListener('click', () => {
        
          const portal = document.querySelector('.PhotoView-Portal');
          
          if (portal) {
            const carousel = portal.querySelector('.PhotoView-Slider'); 
            
            if (carousel && typeof carousel.prev === 'function') {
              carousel.prev();
            } else {
              const event = new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                key: 'ArrowLeft',
                keyCode: 37,
                code: 'ArrowLeft',
                which: 37,
              });
              document.dispatchEvent(event);
            }
          }
        });
        

        const rightArrow = document.createElement('div');
        rightArrow.classList.add('PhotoView-Slider__ArrowRight');
        rightArrow.innerHTML = `<svg width="44" height="44" viewBox="0 0 768 768"><path d="M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"></path></svg>`;
        rightArrow.addEventListener('click', () => {
          const carousel = portal.querySelector('.PhotoView-Slider'); 
          if (carousel && typeof carousel.next === 'function') {
            carousel.next();
          }
          else {
            const event = new KeyboardEvent('keydown', {
              bubbles: true,
              cancelable: true,
              key: 'ArrowRight',
              keyCode: 39,
              code: 'ArrowRight',
              which: 39,
            });
            document.dispatchEvent(event);
          }
        });
        portal.appendChild(leftArrow);
        portal.appendChild(rightArrow);
      }
    };

    addArrows();

    const photoViews = document.querySelectorAll('.gallery__pics');
    photoViews.forEach(photoView => {
      photoView.addEventListener('click', () => {
        setTimeout(addArrows, 200);
      });
    });

    return () => {
      photoViews.forEach(photoView => {
        photoView.removeEventListener('click', addArrows);
      });
    };
  }, []); 

  return (
    <div id="gallery" className="gallery">
      <div className="gallery__wrapper">
        <h2 className="gallery__tittle">Gallery</h2>
        <span className="line__style__gallery"></span>
        <div className="gallery__pics_wrapper">
          {categories.map((category, index) => (
            <PhotoProvider key={index} bannerVisible={true} arrowsVisible={true}>
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