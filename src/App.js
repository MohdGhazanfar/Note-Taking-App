import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index, updatedNote) => {
    const updatedNotes = notes.map((note, i) => {
      if (i === index) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1 className="main-heading">Take Notes</h1> {/* Main Heading */}
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote} />
    </div>
  );
}

export default App;
