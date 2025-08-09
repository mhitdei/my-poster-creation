// src/components/ViewPosterScreen.jsx

import React, { useState, useEffect } from 'react';
import PhotoSlide from './PhotoSlide.jsx';
// Import any other components needed to display content (e.g., QuizSlide)

function ViewPosterScreen({ posterId }) {
  const [posterData, setPosterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Fetch the poster data from our back-end function
    fetch(`/.netlify/functions/getPoster?id=${posterId}`)
      .then(res => res.json())
      .then(data => {
        if (data.error || data === 'Poster not found') {
          setError('This poster could not be found.');
        } else {
          setPosterData(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load the poster.');
        setLoading(false);
      });
  }, [posterId]);

  if (loading) return <div className="loader">Loading Poster...</div>;
  if (error) return <div className="loader">{error}</div>;
  if (!posterData) return null;

  const currentSlideData = posterData.content[currentSlide];
  
  // Basic navigation for the viewer
  const next = () => setCurrentSlide(s => Math.min(s + 1, posterData.content.length - 1));
  const prev = () => setCurrentSlide(s => Math.max(s - 1, 0));

  return (
    <div className="viewer-container">
      <div className="canvas-container view-mode">
        <div className="canvas">
          {/* Render content based on type (read-only) */}
          {currentSlideData.type === 'text' && <p className="viewer-text">{currentSlideData.text}</p>}
          {currentSlideData.type === 'photo' && <PhotoSlide photos={currentSlideData.photos} animation={currentSlideData.animation} />}
          {/* Add viewer for quiz slides here later */}
        </div>
      </div>
      <div className="viewer-navigation">
          <button onClick={prev} disabled={currentSlide === 0}>Prev</button>
          <span>{currentSlide + 1} / {posterData.content.length}</span>
          <button onClick={next} disabled={currentSlide === posterData.content.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default ViewPosterScreen;
