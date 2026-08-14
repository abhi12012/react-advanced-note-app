import { NotesProvider } from "./context/NotesContext";
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

  


  const [notes, setNotes] = useState([]);





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
  const updatedNotes = notes.map((item) =>
    item.id === editingId ? { ...note, id: editingId } : item
  );

  setNotes(updatedNotes);

  setEditingId(null);

  return;
}



    const newNote = {
    ...note,
    id: Date.now()
  };

  setNotes([...notes, newNote]);

  setNote({
    title: "",
    description: ""
  });
}



function handleCancelEdit() {
  setEditingId(null);

  setNote({
    title: "",
    description: ""
  });
}




 function handleDelete(id) {
  const shouldDelete = window.confirm("Are you sure you want to delete this note?");

  if (!shouldDelete) {
    return;
  }

  const updatedNotes = notes.filter((note) => note.id !== id);

  setNotes(updatedNotes);
}






function handleEdit(id) {
  

  setEditingId(id);

  const noteToEdit = notes.find((note) => note.id === id);

  

 

  

  setNote(noteToEdit);
}






return (

  <NotesProvider>

 <NotesContext.Provider
  value={{
    notes,
    handleEdit,
    handleDelete
  }}
>
  
  
  <div>

    


    <h1>Advanced Notes App</h1>


   <NoteForm
  note={note}
  handleChange={handleChange}
  handleAddNote={handleAddNote}
  editingId={editingId}
  handleCancelEdit={handleCancelEdit}

/>





    <p>Total Notes: {notes.length}</p>

<NoteList notes={notes} />



    
 </div>

   </NotesContext.Provider>
    
    </NotesProvider>



);


}

export default App;