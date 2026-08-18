


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