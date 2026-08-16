import useNotes from "../hooks/useNotes";



function NoteItem({
  note,
  onEdit
}) {

  
const {
  deleteNote
} = useNotes();



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