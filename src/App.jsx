
import ErrorBoundary from "./components/ErrorBoundary";

import usePinFilter from "./hooks/usePinFilter";
import usePriorityFilter from "./hooks/usePriorityFilter";
import { downloadJSON } from "./utils/downloadJSON";
import { readJSON } from "./utils/readJSON";

import downloadCSV from "./utils/downloadCSV";
import parseCSV from "./utils/parseCSV";
import csvRowToNote from "./utils/csvRowToNote";
import normalizeImportedNote from "./utils/normalizeImportedNote";

import useCategoryFilter from "./hooks/useCategoryFilter";

import Header from "./components/Header";
import useSearch from "./hooks/useSearch";
import useSort from "./hooks/useSort";

import { useCallback, useEffect, useState } from "react";



import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import useNotes from "./hooks/useNotes";




const initialNote = {
  title: "",
  description: "",
  category: "General",
  isPinned: false,
  priority: "Medium"
};


function App() {

  
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {


  document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);


  const [note, setNote] = useState(initialNote);


  const [editingId, setEditingId] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [priorityFilter, setPriorityFilter] = useState("all");

  const [pinFilter, setPinFilter] = useState("all");



  

  const [sortBy, setSortBy] = useState("newest");

 

  const [categoryFilter, setCategoryFilter] = useState("all");

  const [error, setError] = useState("");

  const { notes, addNote, updateNote } = useNotes();

  const [currentPage, setCurrentPage] = useState(1);

  const [notesPerPage, setNotesPerPage] = useState(5);

  



 const filteredNotes = useSearch(notes, searchText);

 

const categoryNotes = useCategoryFilter(
  filteredNotes,
  categoryFilter
);

const priorityNotes = usePriorityFilter(
  categoryNotes,
  priorityFilter
);

const pinNotes = usePinFilter(
  priorityNotes,
  pinFilter
);

const sortedNotes = useSort(pinNotes, sortBy);






const startIndex = (currentPage - 1) * notesPerPage;

const endIndex = startIndex + notesPerPage;

const paginatedNotes = sortedNotes.slice(
  startIndex,
  endIndex
);


const totalPages = Math.ceil(
  sortedNotes.length / notesPerPage
);

useEffect(() => {
  setCurrentPage(1);
}, [sortedNotes.length]);


 



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

    if (note.title.length > 100) {
  setError("Title must be 100 characters or less");
  return;
}

    setError("");

    if (editingId !== null) {
      updateNote(editingId, {
        ...note,
        id: editingId
      });

      setEditingId(null);

setNote(initialNote);

      return;
    }

    const newNote = {
  ...note,
  id: Date.now(),
  createdAt: Date.now(),
  updatedAt: Date.now()
};

    addNote(newNote);

    setNote(initialNote);
  }

  function handleCancelEdit() {
     
    setEditingId(null);

   setNote(initialNote);

    setError("");
  }

  const handleEdit = useCallback((noteToEdit) => {
    setEditingId(noteToEdit.id);

    setNote({
      ...noteToEdit,
      category: noteToEdit.category || "General"
    });
  }, []);


  const handleBackup = () => {
  downloadJSON(notes);
};

  return (
    <div>
      <Header
        title="Advanced Notes App"
        subtitle="Manage your notes"
      >


        <button onClick={() => downloadCSV(notes)}>
  Export CSV
</button>


<button onClick={handleBackup}>
  Backup Notes
</button>

<button onClick={() => downloadJSON(notes, "notes.json")}>
  Export JSON
</button>


<p>Import JSON:</p>

<input
  type="file"
  accept=".json"
 onChange={(event) => {
  const file = event.target.files[0];

  readJSON(file, (importedNotes) => {

    

    importedNotes.forEach((note) => {
      if (!note) return;

      const alreadyExists = notes.some(
        (existingNote) => existingNote.id === note.id
      );

      if (!alreadyExists) {
        addNote(note);
      }
    });

  });
}}
/>

<p>Restore Backup:</p>

<input
  type="file"
  accept=".json"
  onChange={(event) => {
    const file = event.target.files[0];

    const reader = new FileReader();


    reader.onload = (event) => {
  const jsonText = event.target.result;

  const importedNotes = JSON.parse(jsonText);

  

  importedNotes.forEach((note) => {
  const alreadyExists = notes.some(
    (existingNote) => existingNote.id === note.id
  );

  if (!alreadyExists) {
    addNote(note);
  }
});
};
reader.readAsText(file);
  }}

  
/>



<p>Import CSV:</p>



<input
  type="file"
  accept=".csv"
  onChange={(event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

   reader.onload = (event) => {


  const csvText = event.target.result;

if (!csvText.trim()) return;

const rows = parseCSV(csvText);


  if (rows.length === 0) return;

  const headers = rows[0];

  const requiredHeaders = [
  "ID",
  "Title",
  "Description",
  "Category",
  "Priority",
  "IsPinned",
  "CreatedAt",
  "UpdatedAt"
];

const hasAllHeaders = requiredHeaders.every((header) =>
  headers.includes(header)
);

if (!hasAllHeaders) return;


const values = rows.slice(1);



const importedNotes = values.map((row) => {
  const importedNote = csvRowToNote(headers, row);

  if (!importedNote.id) {
  return null;
}

  if (!importedNote.title || importedNote.title.trim() === "") {
  return null;
}

if (!importedNote.createdAt || !importedNote.updatedAt) {
  return null;
}

  return normalizeImportedNote(importedNote);
});


importedNotes.forEach((note) => {
  if (!note) return;


  const alreadyExists = notes.some(
    (existingNote) => existingNote.id === note.id
  );

  if (!alreadyExists) {
    addNote(note);
  }
});
};

    reader.readAsText(file);
  }}
/>



        <p>Total Notes: {notes.length}</p>
      </Header>


      

  

      <input
        type="text"
        placeholder="Search notes..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />



      <select
  value={categoryFilter}
  onChange={(event) => setCategoryFilter(event.target.value)}
>
  <option value="all">All Categories</option>
  <option value="General">General</option>
  <option value="Work">Work</option>
  <option value="Personal">Personal</option>
  <option value="Learning">Learning</option>
  <option value="Important">Important</option>
</select>



<select
  value={priorityFilter}
  onChange={(event) => setPriorityFilter(event.target.value)}
>
  <option value="all">All Priorities</option>
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>



<select
  value={pinFilter}
  onChange={(event) => setPinFilter(event.target.value)}
>
  <option value="all">All Notes</option>
  <option value="pinned">Pinned</option>
  <option value="unpinned">Unpinned</option>
</select>




      <select
  value={sortBy}
  onChange={(event) => setSortBy(event.target.value)}
>
  <option value="priority">Priority</option>

  <option value="priority-newest">
  Priority → Newest
</option>

  <option value="priority-oldest">
  Priority → Oldest
</option>

  

  <option value="newest">Newest First</option>
  <option value="oldest">Oldest First</option>
  <option value="az">A → Z</option>
  <option value="za">Z → A</option>
</select>
     


<select
  value={notesPerPage}
  onChange={(event) => {
    setNotesPerPage(Number(event.target.value));
    setCurrentPage(1);
  }}
>
  <option value={5}>5 Notes</option>
  <option value={10}>10 Notes</option>
  <option value={20}>20 Notes</option>
</select>



<button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>



      <NoteForm
        note={note}
        handleChange={handleChange}
        handleAddNote={handleAddNote}
        editingId={editingId}
        handleCancelEdit={handleCancelEdit}
        error={error}
      />

      <NoteList
  filteredNotes={paginatedNotes}
  onEdit={handleEdit}
  searchText={searchText}
/>



<button
  onClick={() => setCurrentPage(currentPage - 1)}
  disabled={currentPage === 1}
>
  Previous
</button>



<span>
  Page {currentPage} of {totalPages}
</span>



<button
  onClick={() => setCurrentPage(currentPage + 1)}
  disabled={currentPage === totalPages}
>
  Next
</button>


    </div>
  );
}

export default App;