function useSort(filteredNotes, sortBy) {
  const sortedNotes = [...filteredNotes];

  if (sortBy === "newest") {
    sortedNotes.sort((a, b) => b.id - a.id);

  }


  if (sortBy === "oldest") {
  sortedNotes.sort((a, b) => a.id - b.id);
}



if (sortBy === "az") {
  sortedNotes.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
}

if (sortBy === "za") {
  sortedNotes.sort((a, b) =>
    b.title.localeCompare(a.title)
  );
}
  return sortedNotes;
}

export default useSort;