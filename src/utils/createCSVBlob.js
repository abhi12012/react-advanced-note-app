function createCSVBlob(csv) {
  return new Blob([csv], {
    type: "text/csv"
  });
}

export default createCSVBlob;