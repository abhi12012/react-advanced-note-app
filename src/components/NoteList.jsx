function NoteList({ notes }) {
  return (
    <div>
      <h2>Note List</h2>

      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.description || "No description"}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteList;