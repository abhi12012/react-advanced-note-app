import { useContext } from "react";

import NotesContext from "./context/NotesContext";

import { useReducer, useState } from "react";


import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";





function notesReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);

      case "UPDATE_NOTE":
  return state.map((note) =>
    note.id === action.payload.id
      ? action.payload.updatedNote
      : note
  );

  

    default:
      return state;
  }
}

const initialNotes = [];






function App() {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  
  const [editingId, setEditingId] = useState(null);

  
const { notes: contextNotes } = useContext(NotesContext);

 const [notes, dispatch] = useReducer(
  notesReducer,
  initialNotes
);





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
  dispatch({
    type: "UPDATE_NOTE",
    payload: {
      id: editingId,
      updatedNote: {
        ...note,
        id: editingId
      }
    }
  });

  setEditingId(null);

  return;
}


    const newNote = {
    ...note,
    id: Date.now()
  };



  dispatch({
  type: "ADD_NOTE",
  payload: newNote
});



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
  const shouldDelete = window.confirm(
    "Are you sure you want to delete this note?"
  );

  if (!shouldDelete) {
    return;
  }

  dispatch({
    type: "DELETE_NOTE",
    payload: id
  });
}




function handleEdit(id) {
  

  setEditingId(id);

  const noteToEdit = notes.find((note) => note.id === id);

  

 

  

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




    

    <NotesContext.Provider
  value={{
    notes,
    handleDelete,
    handleEdit
  }}
>


<NoteList />



</NotesContext.Provider>


    
 </div>

   


);


}

export default App;