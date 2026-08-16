import { useReducer } from "react";
import NotesContext from "./NotesContext";





function notesReducer(state, action) {
  console.log("Reducer:", state, action);
  switch (action.type) {

    case "ADD_NOTE":
  return [...state, action.payload];


  case "DELETE_NOTE":
  return state.filter(
    (note) => note.id !== action.payload
  );

    default:
      return state;
  }
}



function NotesProvider({ children }) {

    const [notes, dispatch] = useReducer(
  notesReducer,
  []
);


function addNote(note) {
  console.log("Provider addNote:", note);
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

  return (
    <NotesContext.Provider
  value={{
    notes,
    dispatch,
    addNote,
    deleteNote
  }}
>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;