


function NoteForm({
  
  note,
  handleChange,
  handleAddNote,
  editingId,
  handleCancelEdit,
  error
}) {


console.log("editingId:", editingId);
  return (
    <div

  onKeyDown={(event) => {
  if (event.ctrlKey && event.key === "Enter") {
  handleAddNote();
}

if (event.key === "Escape") {
  console.log("Escape pressed");
  handleCancelEdit();
}
}}

>
      <h2>Note Form</h2>

      <input
        name="title"
        type="text"
        placeholder="Enter note title"
        value={note.title}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}



      <textarea
        name="description"
        placeholder="Enter note description"
        value={note.description}
        onChange={handleChange}
      />

      <select
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




<select
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