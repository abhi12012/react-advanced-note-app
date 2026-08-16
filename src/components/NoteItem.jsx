import { useContext } from "react";
import NotesContext from "../context/NotesContext";


function NoteItem({
  note,
  onEdit
}) {

  const {
  deleteNote
} = useContext(NotesContext);

  return (
    <div>
      <h3>{note.title}</h3>

      <p>{note.description || "No description"}</p>

<button onClick={() => onEdit(note)}>
  Edit
</button>

      <button onClick={() => deleteNote(note.id)}>
  Delete
</button>

    </div>
  );
}

export default NoteItem;