import React from 'react';
import Note from './Note';

function NoteList({ notes, onDeleteNote, onEditNote }) {
  return (
    <div>
      {notes.map((note, index) => (
        <Note 
          key={index} 
          note={note} 
          onDelete={() => onDeleteNote(index)} 
          onEdit={(newNote) => onEditNote(index, newNote)}
        />
      ))}
    </div>
  );
}

export default NoteList;
