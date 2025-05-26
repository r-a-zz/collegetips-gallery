import React from 'react';
import '../App.css';

const Modal = ({ image, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>&times;</button>
      <img src={image.url} alt={image.caption} />
      <p>{image.caption}</p>
    </div>
  </div>
);

export default Modal;