

function NoteItem({ note, handleDelete, handleEdit }) {
  return (
    <div>
      <h3>{note.title}</h3>

      <p>{note.description || "No description"}</p>

      <button onClick={() => handleEdit(note.id)}>
        Edit
      </button>

      <button onClick={() => handleDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteItem;