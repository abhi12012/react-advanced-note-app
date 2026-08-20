function usePinFilter(notes, pinFilter) {

  if (pinFilter === "all") {
    return notes;
  }

  if (pinFilter === "pinned") {
  return notes.filter((note) => note.isPinned);
}

if (pinFilter === "unpinned") {
  return notes.filter((note) => !note.isPinned);
}

}

export default usePinFilter;