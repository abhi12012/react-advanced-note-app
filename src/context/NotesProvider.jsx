import { useReducer } from "react";
import NotesContext from "./NotesContext";

const initialNotes = [];

function notesReducer(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DELETE_NOTE":
      return state.filter(
        (note) => note.id !== action.payload
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
    initialNotes
  );


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


  return (
    <NotesContext.Provider
      value={{
        notes,
        dispatch,
        handleDelete
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}



export default NotesProvider;