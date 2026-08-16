import { useContext } from "react";
import NotesContext from "../context/NotesContext";


function NoteItem({
  note,
  handleEdit
}) {

  const {
  dispatch,
  handleDelete: handleDeleteFromContext,
  handleEdit: handleEditFromContext
} = useContext(NotesContext);

  return (
    <div>
      <h3>{note.title}</h3>

      <p>{note.description || "No description"}</p>

      <button onClick={() => handleEditFromContext(note.id)}>
  Edit
</button>


      <button onClick={() => handleDeleteFromContext(note.id)}>
  Delete
</button>
    </div>
  );
}

export default NoteItem;