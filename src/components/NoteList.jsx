import NoteItem from "./NoteItem";

function NoteList({ notes, handleEdit }) {
  return (
    <div>
      <h2>Note List</h2>
{notes.map((note) => (
  <NoteItem
    key={note.id}
    note={note}
    handleEdit={handleEdit}
  />
))}
    </div>
  );
}

export default NoteList;