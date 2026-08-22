

function useSearch(notes, searchText) {
  
  const search = searchText.toLowerCase().trim();

  

  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(search) ||
      note.description.toLowerCase().includes(search)
    );
  });

  return filteredNotes;
}

export default useSearch;