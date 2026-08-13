import NoteItem from "./NoteItem";

function NoteList({ notes, handleEdit, handleDelete }) {
  return (
    <div>
      <h2>Note List</h2>

      {notes.length === 0 && <p>No notes available.</p>}
      
{notes.map((note) => (
  <NoteItem
    key={note.id}
    note={note}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />
))}
    </div>
  );
}

export default NoteList;