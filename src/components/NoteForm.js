import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.trim() !== '') {
      onAddNote(note);
      setNote('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note here..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
