


function NoteForm({
  
  note,
  handleChange,
  handleAddNote,
  editingId,
  handleCancelEdit,
  error
}) {



  return (
    <div

  onKeyDown={(event) => {
  if (event.ctrlKey && event.key === "Enter") {
  handleAddNote();
}

if (event.key === "Escape") {
  
  handleCancelEdit();
}
}}

>
      <h2>Note Form</h2>

      <label htmlFor="note-title">
  Title
</label>

      <input
        id="note-title"
        name="title"
        type="text"
        placeholder="Enter note title"
        aria-describedby="title-error"
        aria-invalid={!!error}
        value={note.title}
        onChange={handleChange}
      />

      {error && (
        
 <p id="title-error" role="alert">
  {error}
</p>

)}


      <label htmlFor="note-description">
  Description
</label>

      <textarea
        id="note-description"
        name="description"
        placeholder="Enter note description"
        value={note.description}
        onChange={handleChange}
      />


   

   <label htmlFor="note-category">
  Category
</label>

      <select
      id="note-category"
  name="category"
  value={note.category}
  onChange={handleChange}
>
  <option value="General">General</option>
  <option value="Work">Work</option>
  <option value="Personal">Personal</option>
  <option value="Learning">Learning</option>
  <option value="Important">Important</option>
</select>





<label htmlFor="note-priority">
  Priority
</label>

<select
id="note-priority"
  name="priority"
  value={note.priority}
  onChange={handleChange}
>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>




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


export default NoteForm;