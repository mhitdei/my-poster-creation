import React from 'react';

function QuizSlideEditor({ slideData, onUpdateSlideData }) {

  const handleQuestionChange = (e) => {
    onUpdateSlideData({ question: e.target.value });
  };

  const handleOptionChange = (optionId, newText) => {
    const newOptions = slideData.options.map(opt => 
      opt.id === optionId ? { ...opt, text: newText } : opt
    );
    onUpdateSlideData({ options: newOptions });
  };

  const handleAddOption = () => {
    const newOptions = [...slideData.options, { id: Date.now(), text: '' }];
    onUpdateSlideData({ options: newOptions });
  };

  const handleDeleteOption = (optionId) => {
    // Prevent deleting the last option
    if (slideData.options.length <= 1) return; 
    const newOptions = slideData.options.filter(opt => opt.id !== optionId);
    onUpdateSlideData({ options: newOptions });
  };

  return (
    <div className="quiz-editor-container">
      <textarea
        className="quiz-question-input"
        placeholder="Type your question here..."
        value={slideData.question}
        onChange={handleQuestionChange}
      />
      <div className="quiz-options-list">
        {slideData.options.map((option, index) => (
          <div key={option.id} className="quiz-option-editor">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option.text}
              onChange={(e) => handleOptionChange(option.id, e.target.value)}
            />
            <button className="delete-option-btn" onClick={() => handleDeleteOption(option.id)}>
              &times;
            </button>
          </div>
        ))}
      </div>
      <button className="add-option-btn" onClick={handleAddOption}>
        + Add Option
      </button>
    </div>
  );
}

export default QuizSlideEditor;
