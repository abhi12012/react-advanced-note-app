import { useContext } from "react";
import NotesContext from "../context/NotesContext";

function NoteForm({
  
  note,
  handleChange,
  handleAddNote,
  editingId,
  handleCancelEdit
}) {

const { addNote } = useContext(NotesContext);
console.log("NoteForm note:", note);
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

      <button onClick={() => addNote(note)}>
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