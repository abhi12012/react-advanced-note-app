function useSort(filteredNotes, sortBy, secondarySortBy) {

  const sortedNotes = [...filteredNotes];

  function comparePriority(a, b) {

    const priorityOrder = {
      High: 1,
      Medium: 2,
      Low: 3
    };

    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }

  function compareSecondary(a, b) {

    if (secondarySortBy === "newest") {
      return b.id - a.id;
    }

    if (secondarySortBy === "oldest") {
      return a.id - b.id;
    }

    if (secondarySortBy === "az") {
      return a.title.localeCompare(b.title);
    }

    if (secondarySortBy === "za") {
      return b.title.localeCompare(a.title);
    }

    return 0;
  }

  if (sortBy === "priority") {

    sortedNotes.sort((a, b) => {

      const priorityResult = comparePriority(a, b);

      if (priorityResult !== 0) {
        return priorityResult;
      }

      return compareSecondary(a, b);

    });

    return sortedNotes;
  }

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