function usePriorityFilter(notes, priorityFilter) {

  if (priorityFilter === "all") {
    return notes;
  }

  return notes.filter(
  (note) => note.priority === priorityFilter
);

}

export default usePriorityFilter;