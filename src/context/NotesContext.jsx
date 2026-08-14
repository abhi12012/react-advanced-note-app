import { createContext, useState } from "react";


const NotesContext = createContext();




function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

 
  function handleDelete(id) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!shouldDelete) {
      return;
    }

    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        handleDelete
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}








export { NotesProvider };
export default NotesContext;