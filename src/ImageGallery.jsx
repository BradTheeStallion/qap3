// Bradley Ayers
// QAP3
// July 22 - 26, 2024

import React from 'react';

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt="dog" className="gallery-image" />
      ))}
    </div>
  );
}

export default ImageGallery;