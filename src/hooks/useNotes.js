import { useContext } from "react";
import NotesContext from "../context/NotesContext";



function useNotes() {
  const context = useContext(NotesContext);

  return context;
}



export default useNotes;