import { useContext } from "react";
import NotesContext from "../context/NotesContext";

import NoteItem from "./NoteItem";




function NoteList({
  handleEdit
}) {

  const {
  notes,
  handleDelete: handleDeleteFromContext
} = useContext(NotesContext);

  
  
  return (
    <div>
      <h2>Note List</h2>

      {notes.length === 0 && <p>No notes available.</p>}

      {notes.map((note) => (

        <NoteItem
          key={note.id}
          note={note}
         handleDelete={handleDeleteFromContext}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;