import React from 'react';

const Note = ({ note, onEdit, onDelete }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="card-text">{note.text}</p>
        <button className="btn btn-primary me-2" onClick={() => onEdit(note.id)}>
          Редактировать
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(note.id)}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Note;