// src/components/PhotoSelectScreen.jsx

import React, { useState } from 'react';

function PhotoSelectScreen({ onClose, onConfirm }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 6) {
      setError('You can only select up to 6 photos.');
      return;
    }
    
    setError('');
    setSelectedFiles(files);

    // Create preview URLs for the selected images
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleConfirm = () => {
    onConfirm(selectedFiles);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Your Photos</h2>
        <p>Choose up to 6 images for your animation slide.</p>
        
        <input 
          type="file"
          multiple 
          accept="image/*"
          onChange={handleFileChange}
          className="file-input"
        />
        
        {error && <p className="error-message">{error}</p>}
        
        <div className="image-preview-grid">
          {previewUrls.map((url, index) => (
            <img key={index} src={url} alt={`Preview ${index + 1}`} className="preview-image" />
          ))}
        </div>
        
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button 
            className="btn" 
            onClick={handleConfirm} 
            disabled={selectedFiles.length === 0}
          >
            Add Photos
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoSelectScreen;
