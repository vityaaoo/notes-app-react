import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import EditNoteModal from './components/EditNoteModal';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [{ id: 1, text: 'первая заметка' }];
  });

  const [editingNote, setEditingNote] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = { id: Date.now(), text };
    setNotes([...notes, newNote]);
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note => note.id === id ? { ...note, text: newText } : note));
    setEditingNote(null); 
    setShowModal(false);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const startEditing = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    setEditingNote(noteToEdit);
    setShowModal(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Заметки</h1>
      <NoteForm onSubmit={addNote} />
      <NoteList notes={notes} onEdit={startEditing} onDelete={deleteNote} />

      <EditNoteModal
        show={showModal}
        onHide={() => setShowModal(false)}
        note={editingNote}
        onSave={(newText) => editNote(editingNote.id, newText)}
      />
    </div>
  );
};

export default App;