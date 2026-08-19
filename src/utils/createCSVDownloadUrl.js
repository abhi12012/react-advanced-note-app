function createCSVDownloadUrl(blob) {
  return URL.createObjectURL(blob);
}

export default createCSVDownloadUrl;