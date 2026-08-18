
import Header from "./components/Header";
import useSearch from "./hooks/useSearch";
import useSort from "./hooks/useSort";

import { useCallback, useState } from "react";


import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import useNotes from "./hooks/useNotes";









function App() {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  
  const [editingId, setEditingId] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [sortBy, setSortBy] = useState("newest");

  const [error, setError] = useState("");

  
const {
  notes,
  addNote,
  updateNote
} = useNotes();




 


const filteredNotes = useSearch(notes, searchText);
const sortedNotes = useSort(filteredNotes, sortBy);




  function handleChange(event) {
    const { name, value } = event.target;

    setNote({
      ...note,
      [name]: value
    });
    setError("");
  }






 function handleAddNote() {
  if (note.title.trim() === "") {
    setError("Title is required");
    return;
  }

  setError("");

  if (editingId !== null) {




  updateNote(editingId, {
    ...note,
    id: editingId
  });

  setEditingId(null);

  setNote({
  title: "",
  description: ""
});

  return;
}



    const newNote = {
    ...note,
    id: Date.now()
  };



 addNote(newNote);
}



function handleCancelEdit() {
  setEditingId(null);

  setNote({
    title: "",
    description: ""
  });

  setError("");
}




 


const handleEdit = useCallback((noteToEdit) => {
  setEditingId(noteToEdit.id);
  setNote(noteToEdit);
}, []);




return (

  
  
  <div>

    

<Header
  title="Advanced Notes App"
  subtitle="Manage your notes"
>
  <p>Total Notes: {notes.length}</p>
</Header>



    <input
  type="text"
  placeholder="Search notes..."
  value={searchText}
  onChange={(event) => setSearchText(event.target.value)}
/>


<select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
  <option value="az">A → Z</option>
  <option value="za">Z → A</option>
</select>




{error && <p>{error}</p>}
   <NoteForm
  note={note}
  handleChange={handleChange}
  handleAddNote={handleAddNote}
  editingId={editingId}
  handleCancelEdit={handleCancelEdit}

/>





   




    
<NoteList
  filteredNotes={sortedNotes}
  onEdit={handleEdit}
/>
 </div>

   


);


}

export default App;