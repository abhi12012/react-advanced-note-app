import { useContext } from "react";
import NotesContext from "../context/NotesContext";

import NoteItem from "./NoteItem";




function NoteList() {

 const {
  notes,
  handleDelete: handleDeleteFromContext,
  handleEdit: handleEditFromContext
} = useContext(NotesContext);


console.log("Context handleEdit:", handleEditFromContext);
  
  
  return (
    <div>
      <h2>Note List</h2>

      {notes.length === 0 && <p>No notes available.</p>}

      {notes.map((note) => (

        <NoteItem
  key={note.id}
  note={note}
  handleDelete={handleDeleteFromContext}
  handleEdit={handleEditFromContext}
/>
      ))}
    </div>
  );
}

export default NoteList;