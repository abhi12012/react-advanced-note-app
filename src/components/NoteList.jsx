import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <div>
      <h2>Note List</h2>

      {notes.map((note) => (
  <NoteItem key={note.id} note={note} />
))}
    </div>
  );
}

export default NoteList;