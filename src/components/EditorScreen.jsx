import React from 'react';
import PhotoSlide from './PhotoSlide.jsx';
import AnimationPicker from './AnimationPicker.jsx';
import QuizSlideEditor from './QuizSlideEditor.jsx';

function EditorScreen({
  posterContent,
  currentSlide,
  onAddSlide,
  onUpdateSlideData,
  onDeleteSlide,
  onNextSlide,
  onPrevSlide,
  onPublish,
}) {
  const currentSlideData = posterContent[currentSlide];

  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        <button className="toolbar-btn" onClick={() => onAddSlide('text')}>Add Text</button>
        <button className="toolbar-btn" onClick={() => onAddSlide('photo')}>Add Photo Animation</button>
        <button className="toolbar-btn" onClick={() => onAddSlide('quiz')}>Add Question</button>
        <button className="toolbar-btn disabled">Add Emoji</button>
      </div>

      <div className="canvas-container">
        {posterContent.length === 0 ? (
          <div className="canvas-placeholder">
            <h2>Canvas is Empty</h2>
            <p>Use the toolbar above to add content to your poster.</p>
          </div>
        ) : (
          <>
            {currentSlideData?.type === 'photo' && (
              <AnimationPicker
                currentAnimation={currentSlideData.animation}
                onSelectAnimation={(animationId) => onUpdateSlideData({ animation: animationId })}
              />
            )}
            <div className="canvas">
              {currentSlideData?.type === 'text' && (
                <textarea
                  className="text-editor-input"
                  value={currentSlideData.text}
                  onChange={(e) => onUpdateSlideData({ text: e.target.value })}
                  placeholder="Start typing here..."
                />
              )}
              {currentSlideData?.type === 'photo' && (
                <PhotoSlide 
                  photos={currentSlideData.photos} 
                  animation={currentSlideData.animation}
                />
              )}
              {currentSlideData?.type === 'quiz' && (
                <QuizSlideEditor 
                  slideData={currentSlideData}
                  onUpdateSlideData={onUpdateSlideData}
                />
              )}
            </div>
          </>
        )}
      </div>

      <div className="editor-navigation">
        <button className="nav-btn" onClick={onPrevSlide} disabled={currentSlide === 0}>
          Previous
        </button>
        <span>
          Slide {currentSlide + 1} of {Math.max(1, posterContent.length)}
        </span>
        <button className="nav-btn" onClick={onNextSlide} disabled={currentSlide >= posterContent.length - 1}>
          Next
        </button>
        
        {posterContent.length > 0 && (
          <button className="delete-btn" onClick={() => onDeleteSlide(currentSlide)}>
              Delete Slide
          </button>
        )}
      </div>
      
      <button className="publish-btn" onClick={onPublish} disabled={posterContent.length === 0}>
        Publish
      </button>
    </div>
  );
}

export default EditorScreen;
