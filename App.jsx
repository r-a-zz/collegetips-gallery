// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import images from './data/images';
import Gallery from './components/Gallery';

function App() {
  // Build category list (including "All")
  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter images by selected category
  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CollegeTips Photo Gallery</h1>
        <div className="tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-button ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Gallery renders ImageCards and handles the modal */}
      <Gallery images={filteredImages} />
    </div>
  );
}

export default App;
