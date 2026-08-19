import useNotes from "../hooks/useNotes";



function NoteItem({
  note,
  onEdit
}) {

  
const { deleteNote, togglePin } = useNotes();


function handleDelete() {
  const shouldDelete = window.confirm(
    "Are you sure you want to delete this note?"
  );

  if (!shouldDelete) {
    return;
  }

  deleteNote(note.id);
}

  return (
    <div>
      <h3>{note.title}</h3>

      <p>{note.description || "No description"}</p>
      <p>Category: {note.category || "General"}</p>

<button onClick={() => onEdit(note)}>
  Edit
</button>

    <button onClick={handleDelete}>
  Delete
</button>


<button onClick={() => togglePin(note.id)}>
  {note.isPinned ? "Unpin" : "Pin"}
</button>

    </div>
  );
}

export default NoteItem;