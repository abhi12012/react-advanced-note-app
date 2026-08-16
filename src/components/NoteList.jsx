import useNotes from "../hooks/useNotes";


import NoteItem from "./NoteItem";




function NoteList({ onEdit }) {

 const {
  notes
} = useNotes();



  
  
  return (
    <div>
      <h2>Note List</h2>

      {notes.length === 0 && <p>No notes available.</p>}

      {notes.map((note) => (


       <NoteItem
  key={note.id}
  note={note}
  onEdit={onEdit}
/>

      ))}
    </div>
  );
}

export default NoteList;