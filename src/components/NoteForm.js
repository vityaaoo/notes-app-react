import React, { useState } from 'react';

const NoteForm = ({ onSubmit, initialText = '' }) => {
  const [text, setText] = useState(initialText);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(text.trim() == '') {
        alert('Ошибка: введите текст заметки перед сохранением!');
        return;
    }

    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Введите текст заметки"/>
      </div>
      <button type="submit" className="btn btn-success">
        Сохранить
      </button>
    </form>
  );
};

export default NoteForm;