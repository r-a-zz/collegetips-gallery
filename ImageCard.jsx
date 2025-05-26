import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const ImageCard = ({ image, onClick }) => (
  <motion.div
    className="image-card"
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <img src={image.url} alt={image.caption} />
    <div className="caption">{image.caption}</div>
  </motion.div>
);

export default ImageCard;