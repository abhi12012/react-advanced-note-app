import { useReducer } from "react";
import NotesContext from "./NotesContext";





function notesReducer(state, action) {
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