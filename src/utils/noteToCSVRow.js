function noteToCSVRow(note) {
  return [
    note.id,
    note.title,
    note.description,
    note.category,
    note.priority,
    note.isPinned,
    note.createdAt,
    note.updatedAt
  ].join(",");
}

export default noteToCSVRow;