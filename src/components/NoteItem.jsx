function NoteItem({ note }) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.description || "No description"}</p>
    </div>
  );
}

export default NoteItem;