import { useContext } from "react";
import NotesContext from "../context/NotesContext";
import useNotes from "../hooks/useNotes";

function NoteForm({
  
  note,
  handleChange,
  handleAddNote,
  editingId,
  handleCancelEdit
}) {

const { addNote } = useNotes();

  return (
    <div>
      <h2>Note Form</h2>

      <input
        name="title"
        type="text"
        placeholder="Enter note title"
        value={note.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Enter note description"
        value={note.description}
        onChange={handleChange}
      />

      <button onClick={handleAddNote}>

        {editingId !== null ? "Update Note" : "Add Note"}
      </button>

      {editingId !== null && (

        <button onClick={handleCancelEdit}>
          Cancel Edit
        </button>
      )}
    </div>
  );
}


export default NoteForm;