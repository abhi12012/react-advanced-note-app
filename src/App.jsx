import { useState } from "react";

function App() {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });


  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote({
      ...note,
      [name]: value
    });
  }

 function handleAddNote() {
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



  return (
    <div>
      <h1>Advanced Notes App</h1>

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
        Add Note
      </button>


      {notes.map((note, index) => (
  <div key={index}>
    <h3>{note.title}</h3>
    <p>{note.description}</p>
  </div>
))}


    </div>
  );
}

export default App;