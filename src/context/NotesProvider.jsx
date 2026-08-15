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

  return (
    <NotesContext.Provider
      value={{
        notes,
        dispatch
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}



export default NotesProvider;