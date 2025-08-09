import React from 'react';

function PhotoSlide({ photos, animation }) {
  // Create preview URLs from the File objects, but only if they haven't been created before
  // This avoids revoking and re-creating URLs on every render
  const photoUrls = React.useMemo(() => 
    photos.map(file => URL.createObjectURL(file)), 
    [photos]
  );
  
  // Apply the selected animation class to the container
  const containerClass = `photo-slide-container animation-${animation}`;

  return (
    <div className={containerClass}>
      {photoUrls.map((url, index) => (
        <div key={index} className="photo-wrapper" style={{'--i': index}}>
          <img src={url} alt={`Slide content ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default PhotoSlide;
