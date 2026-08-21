function useSort(filteredNotes, sortBy) {

  const sortedNotes = [...filteredNotes];
if (sortBy === "priority") {

  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3
  };

  sortedNotes.sort((a, b) => {

    const priorityDifference =
      priorityOrder[a.priority] -
      priorityOrder[b.priority];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return a.id - b.id;
  });
}


if (sortBy === "priority-newest") {

  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3
  };

  sortedNotes.sort((a, b) => {

    const priorityDifference =
      priorityOrder[a.priority] -
      priorityOrder[b.priority];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return b.id - a.id;
  });
}



if (sortBy === "priority-oldest") {

  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3
  };

  sortedNotes.sort((a, b) => {

    const priorityDifference =
      priorityOrder[a.priority] -
      priorityOrder[b.priority];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return a.id - b.id;
  });
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