



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

  
const {
  notes,
  addNote,
  updateNote
} = useNotes();
 


const filteredNotes = notes.filter((note) => {
  const search = searchText.toLowerCase().trim();

  return (
    note.title.toLowerCase().includes(search) ||
    note.description.toLowerCase().includes(search)
  );
});



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


   <NoteForm
  note={note}
  handleChange={handleChange}
  handleAddNote={handleAddNote}
  editingId={editingId}
  handleCancelEdit={handleCancelEdit}

/>





   <p>Total Notes: {notes.length}</p>




    
<NoteList
  filteredNotes={filteredNotes}
  onEdit={handleEdit}
/>
    
 </div>

   


);


}

export default App;