import NoteItem from "./NoteItem";

function NoteList({ notes, handleDelete, handleEdit }) {
  return (
    <div>
      <h2>Note List</h2>

      {notes.length === 0 && <p>No notes available.</p>}
      
{notes.map((note) => (


 <NoteItem
  key={note.id}
  note={note}
  handleDelete={handleDelete}
  handleEdit={handleEdit}
/>

))}
    </div>
  );
}

export default NoteList;