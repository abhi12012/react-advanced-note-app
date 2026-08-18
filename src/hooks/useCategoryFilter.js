function useCategoryFilter(notes, categoryFilter) {
  if (categoryFilter === "all") {
    return notes;
  }

  return notes.filter(
    (note) => note.category === categoryFilter
  );
}

export default useCategoryFilter;