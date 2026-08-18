

import useSearch from "./hooks/useSearch";

import { useState } from "react";


import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import useNotes from "./hooks/useNotes";









function App() {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  
  const [editingId, setEditingId] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [sortBy, setSortBy] = useState("newest");

  
const {
  notes,
  addNote,
  updateNote
} = useNotes();
const searchedNotes = useSearch(notes, searchText);



 


const filteredNotes = useSearch(notes, searchText);
const displayNotes = [...filteredNotes];

if (sortBy === "newest") {
  displayNotes.sort((a, b) => b.id - a.id);
}

if (sortBy === "oldest") {
  displayNotes.sort((a, b) => a.id - b.id);
}

if (sortBy === "az") {
  displayNotes.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}



  function handleChange(event) {
    const { name, value } = event.target;

    setNote({
      ...note,
      [name]: value
    });
  }






 function handleAddNote() {
  if (note.title.trim() === "") {
    return;
  }




if (editingId !== null) {
  updateNote(editingId, {
    ...note,
    id: editingId
  });

  setEditingId(null);

  setNote({
  title: "",
  description: ""
});

  return;
}



    const newNote = {
    ...note,
    id: Date.now()
  };



 addNote(newNote);
}



function handleCancelEdit() {
  setEditingId(null);

  setNote({
    title: "",
    description: ""
  });
}




 


function handleEdit(noteToEdit) {
  setEditingId(noteToEdit.id);
  setNote(noteToEdit);
}




return (

  
  
  <div>

    


    <h1>Advanced Notes App</h1>


    <input
  type="text"
  placeholder="Search notes..."
  value={searchText}
  onChange={(event) => setSearchText(event.target.value)}
/>


<select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
  <option value="az">A → Z</option>
  <option value="za">Z → A</option>
</select>


   <NoteForm
  note={note}
  handleChange={handleChange}
  handleAddNote={handleAddNote}
  editingId={editingId}
  handleCancelEdit={handleCancelEdit}

/>





   <p>Total Notes: {notes.length}</p>




    
<NoteList
  filteredNotes={displayNotes}
  onEdit={handleEdit}
/>
 </div>

   


);


}

export default App;