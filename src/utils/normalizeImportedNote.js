function normalizeImportedNote(note) {
  return {
    id: Number(note.ID),
    title: note.Title,
    description: note.Description,
    category: note.Category || "General",
    priority: note.Priority || "Medium",
    isPinned: note.IsPinned === "true",
    createdAt: Number(note.CreatedAt),
    updatedAt: Number(note.UpdatedAt)
  };
}

export default normalizeImportedNote;