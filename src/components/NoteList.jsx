import useNotes from "../hooks/useNotes";


import NoteItem from "./NoteItem";

import { memo } from "react";



function NoteList({ filteredNotes, onEdit, searchText }) {

 const {
  notes,
  deletedNote,
  undoDelete
} = useNotes();


  
  
  return (
    <div>
      <h2>Note List</h2>

      {deletedNote && (
  <div>
    <p>Note deleted.</p>

    <button onClick={undoDelete}>
      Undo
    </button>
  </div>
)}

     {notes.length === 0 ? (
  <div>
  <p>No notes yet</p>
  <p>Create your first note to get started.</p>
</div>

) : filteredNotes.length === 0 ? (

  <div>
  <p>No matching notes</p>
  <p>Try a different search or filter.</p>
</div>

) : (
  filteredNotes.map((note) => (
    <NoteItem
      key={note.id}
      note={note}
      onEdit={onEdit}
      searchText={searchText}
      
    />
  ))
)}
    </div>
  );
}

export default memo(NoteList);