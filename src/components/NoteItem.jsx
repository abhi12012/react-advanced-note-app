function NoteItem({ note, handleEdit, handleDelete }) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description || "No description"}</p>

      <button onClick={() => handleEdit(note.id)}>
  Edit
</button>
    </div>
  );
}

export default NoteItem;