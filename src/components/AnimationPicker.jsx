// src/components/AnimationPicker.jsx

import React from 'react';

const animations = [
  { id: 'fade', name: 'Fade' },
  { id: 'slide-in', name: 'Slide In' },
  { id: 'zoom-in', name: 'Zoom In' },
  { id: 'revolve', name: 'Revolve' },
];

function AnimationPicker({ currentAnimation, onSelectAnimation }) {
  return (
    <div className="animation-picker">
      <p>Animation:</p>
      <div className="animation-options">
        {animations.map(anim => (
          <button 
            key={anim.id}
            className={`anim-btn ${currentAnimation === anim.id ? 'active' : ''}`}
            onClick={() => onSelectAnimation(anim.id)}
          >
            {anim.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimationPicker;
