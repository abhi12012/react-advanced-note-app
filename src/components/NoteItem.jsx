import useNotes from "../hooks/useNotes";

import HighlightText from "./HighlightText";



function NoteItem({
  note,
  onEdit,
  searchText
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

      <h3>
  <HighlightText
    text={note.title}
    searchText={searchText}
  />

</h3>

      <p>

  <HighlightText
    text={note.description || "No description"}
    searchText={searchText}
  />
  
</p>

      <p>Category: {note.category || "General"}</p>
      <p>Priority: {note.priority || "Medium"}</p>

     <p>
  Created At:{" "}
  {note.createdAt
    ? new Date(note.createdAt).toLocaleString()
    : "Not available"}
</p>

      <p>
  Updated At: {new Date(note.updatedAt).toLocaleString()}
</p>

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