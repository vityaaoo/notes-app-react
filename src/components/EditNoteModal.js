import React, { useState, useEffect } from 'react';

const EditNoteModal = ({ show, onHide, note, onSave }) => {
  const [text, setText] = useState(note ? note.text : '');

  useEffect(() => {
    if (note) {
      setText(note.text);
    }
  }, [note]);

  const handleSave = () => {
    if (text.trim() === '') {
      alert('Ошибка: введите текст заметки перед сохранением!');
      return;
    }
    onSave(text);
    onHide();
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Редактировать заметку</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Введите текст заметки"/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onHide}>
              Закрыть
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Сохранить изменения
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNoteModal;