import React, { useState } from 'react';

const ComicPanelForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
  };

  return (
    <form className="comic-panel-form" onSubmit={handleSubmit}>
      <textarea
        className="comic-panel-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for the comic panel"
      />
      <button className="comic-panel-submit" type="submit">Generate Comic</button>
    </form>
  );
};

export default ComicPanelForm;
