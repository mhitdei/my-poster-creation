import React, { useState, useEffect } from 'react';
import './App.css';
import { themes } from './themes.js';
import EditorScreen from './components/EditorScreen.jsx';
import './components/EditorScreen.css';
import PhotoSelectScreen from './components/PhotoSelectScreen.jsx';
import './components/Photo.css';
import AnimationPicker from './components/AnimationPicker.jsx';
import './components/AnimationPicker.css';
import QuizSlideEditor from './components/QuizSlideEditor.jsx';
import './components/Quiz.css';
import ViewPosterScreen from './components/ViewPosterScreen.jsx';

// --- Screen Components (No changes needed in these) ---
function StartScreen({ onStart }) { /* ... */ }
function TemplateSelectionScreen({ onSelectTemplate }) { /* ... */ }
function ThemeSelectionScreen({ selectedTemplate, onSelectTheme }) { /* ... */ }
function PublishedScreen({ posterId }) { /* ... */ }


// --- Main App Component ---
function App() {
  const [appState, setAppState] = useState({
    screen: 'loading',
    template: null,
    theme: themes[0],
    content: [],
    currentSlide: 0,
    isPhotoModalOpen: false,
    posterId: null,
  });

  // Effect for routing
  useEffect(() => {
    // ... (no changes here)
  }, []);
  
  // Effect to update the background theme, fonts, and particles
  useEffect(() => {
    const tsParticles = window.tsParticles;
    if (appState.theme && tsParticles) {
      const root = document.documentElement;
      root.style.setProperty('--font-heading', appState.theme.fonts.heading);
      root.style.setProperty('--font-body', appState.theme.fonts.body);
      root.style.setProperty('--bg-gradient', appState.theme.thumbnailStyle.background);
      
      tsParticles.load("tsparticles", appState.theme.particlesConfig);
    }
  }, [appState.theme]);

  // --- All Handler Functions (No changes needed in the logic) ---
  const handleStart = () => setAppState(s => ({ ...s, screen: 'template_selection' }));
  const handleSelectTemplate = (templateType) => { /* ... */ };
  const handleSelectTheme = (themeId) => { /* ... */ };
  const addSlide = (type) => { /* ... */ };
  const handleAddPhotos = (photoFiles) => { /* ... */ };
  const updateSlideData = (updatedData) => { /* ... */ };
  const deleteSlide = (slideIndexToDelete) => { /* ... */ };
  const nextSlide = () => { /* ... */ };
  const prevSlide = () => { /* ... */ };
  const publishPoster = async () => { /* ... */ };
  
  // --- Render Logic ---
  const renderScreen = () => {
    // ... (no changes to the switch statement)
  };

  return (
    <div className="app-container">
      <div id="tsparticles"></div>
      <div className="content-wrapper">
        {appState.isPhotoModalOpen && (
          <PhotoSelectScreen 
            onClose={() => setAppState(s => ({ ...s, isPhotoModalOpen: false }))}
            onConfirm={handleAddPhotos}
          />
        )}
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;
