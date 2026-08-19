import escapeCSVValue from "./escapeCSVValue";

function noteToCSVRow(note) {
  return [
    escapeCSVValue(note.id),
    escapeCSVValue(note.title),
    escapeCSVValue(note.description),
    escapeCSVValue(note.category),
    escapeCSVValue(note.priority),
    escapeCSVValue(note.isPinned),
    escapeCSVValue(note.createdAt),
    escapeCSVValue(note.updatedAt)
  ].join(",");
}

export default noteToCSVRow;