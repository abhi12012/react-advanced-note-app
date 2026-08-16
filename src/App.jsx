import { useContext } from "react";

import NotesContext from "./context/NotesContext";

import { useState } from "react";


import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";









function App() {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  
  const [editingId, setEditingId] = useState(null);

  
const {
  notes: contextNotes,
  addNote,
  deleteNote,
  updateNote
} = useContext(NotesContext);



 






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

  return;
}



    const newNote = {
    ...note,
    id: Date.now()
  };



 addNote(note);
}



function handleCancelEdit() {
  setEditingId(null);

  setNote({
    title: "",
    description: ""
  });
}




 function handleDelete(id) {
  const shouldDelete = window.confirm(
    "Are you sure you want to delete this note?"
  );

  if (!shouldDelete) {
    return;
  }

  deleteNote(id);
}




function handleEdit(noteToEdit) {
  setEditingId(noteToEdit.id);
  setNote(noteToEdit);
}




return (

  
  
  <div>

    


    <h1>Advanced Notes App</h1>


   <NoteForm
  note={note}
  handleChange={handleChange}
  handleAddNote={handleAddNote}
  editingId={editingId}
  handleCancelEdit={handleCancelEdit}

/>





   <p>Total Notes: {contextNotes.length}</p>




    

    <NoteList onEdit={handleEdit} />
    
 </div>

   


);


}

export default App;