import React, { useState } from 'react';

function Note({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    onEdit(note); 
    setIsEditing(false);
  };

  return (
    <div className="note">
      <p className="note-content">{note}</p>
      <div className="note-actions">
        {isEditing ? (
          <>
            <button className="save-btn" onClick={handleEdit}>Save</button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(note)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Note;
