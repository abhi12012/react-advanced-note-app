import { useState } from "react";



function NoteForm({
  note,
  handleChange,
  handleAddNote,
  editingId,
  handleCancelEdit
}) {
  return (
    <div>
      <h2>Note Form</h2>
       <input
  name="title"
  type="text"
  placeholder="Enter note title"
  value={note.title}
  onChange={handleChange}
/>
      


<textarea
  name="description"
  placeholder="Enter note description"
  value={note.description}
  onChange={handleChange}
/>

<button onClick={handleAddNote}>
  {editingId !== null ? "Update Note" : "Add Note"}
</button>



{editingId !== null && (
  <button onClick={handleCancelEdit}>
    Cancel Edit
  </button>
)}


  </div>
  );
}


function App() {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  const [editingId, setEditingId] = useState(null);

  


  const [notes, setNotes] = useState([]);





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
  const updatedNotes = notes.map((item) =>
    item.id === editingId ? { ...note, id: editingId } : item
  );

  setNotes(updatedNotes);

  setEditingId(null);

  return;
}



    const newNote = {
    ...note,
    id: Date.now()
  };

  setNotes([...notes, newNote]);

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
  const shouldDelete = window.confirm("Are you sure you want to delete this note?");

  if (!shouldDelete) {
    return;
  }

  const updatedNotes = notes.filter((note) => note.id !== id);

  setNotes(updatedNotes);
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

    <p>Total Notes: {notes.length}</p>

    

    








    {notes.length === 0 && <p>No notes available.</p>}

    {notes.map((note, index) => (
      <div key={note.id}>
        <h3>{note.title}</h3>
        
        <p>{note.description || "No description"}</p>

        


   <div>
  <button onClick={() => handleEdit(note.id)}>
    Edit
  </button>

  <button onClick={() => handleDelete(note.id)}>
    Delete
  </button>
</div>

      </div>
    ))}
  </div>
);


}

export default App;