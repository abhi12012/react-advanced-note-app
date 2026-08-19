import { useReducer, useEffect } from "react";
import NotesContext from "./NotesContext";






function getInitialNotes() {
  const savedNotes = localStorage.getItem("notes");

  if (!savedNotes) {
    return [];
  }

  try {
    return JSON.parse(savedNotes);
  } catch {
    return [];
  }
}







function notesReducer(state, action) {
  
  switch (action.type) {

    case "ADD_NOTE":
  return [...state, action.payload];


  case "DELETE_NOTE":
  return state.filter(
    (note) => note.id !== action.payload
  );


  case "TOGGLE_PIN":
  return state.map((note) =>
    note.id === action.payload
      ? {
          ...note,
          isPinned: !note.isPinned
        }
      : note
  );


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



function NotesProvider({ children }) {

    const [notes, dispatch] = useReducer(
  notesReducer,
  getInitialNotes()
);



useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);



function addNote(note) {
  
  dispatch({
    type: "ADD_NOTE",
  payload: {
  ...note,
  id: Date.now()
}
  });
}







function deleteNote(id) {
  dispatch({
    type: "DELETE_NOTE",
    payload: id
  });
}



function updateNote(id, updatedNote) {
  dispatch({
    type: "UPDATE_NOTE",
    payload: {
      id,
      updatedNote: {
        ...updatedNote,
        updatedAt: Date.now()
      }
    }
  });
}

function togglePin(id) {
  dispatch({
    type: "TOGGLE_PIN",
    payload: id
  });
}


  return (
    <NotesContext.Provider
  value={{
    notes,
    
    addNote,
    deleteNote,
    togglePin,
    updateNote             
  }}
>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;