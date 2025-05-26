import React, { useState } from 'react';
import ImageCard from './ImageCard';
import Modal from './Modal';
import '../App.css';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      {images.map((img, idx) => (
        <ImageCard
          key={idx}
          image={img}
          onClick={() => setSelectedImage(img)}
        />
      ))}

      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default Gallery;