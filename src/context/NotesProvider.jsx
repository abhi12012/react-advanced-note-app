import { useReducer } from "react";
import NotesContext from "./NotesContext";





function notesReducer(state, action) {
  console.log("Reducer:", state, action);
  switch (action.type) {

    case "ADD_NOTE":
  return [...state, action.payload];

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
    payload: note
  });
}


  return (
    <NotesContext.Provider
  value={{
    notes,
    dispatch,
    addNote
  }}
>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;