import { useContext } from "react";
import NotesContext from "../context/NotesContext";

import NoteItem from "./NoteItem";




function NoteList({
  handleDelete,
  handleEdit
}) {


  const notes = useContext(NotesContext);

  console.log("Context notes:", notes);
  
  return (
    <div>
      <h2>Note List</h2>

      {notes.length === 0 && <p>No notes available.</p>}

      {notes.map((note) => (

        <NoteItem
          key={note.id}
          note={note}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default NoteList;