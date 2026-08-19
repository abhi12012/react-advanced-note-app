import createCSV from "./createCSV";
import createCSVBlob from "./createCSVBlob";
import createCSVDownloadUrl from "./createCSVDownloadUrl";

function downloadCSV(notes) {
  const csv = createCSV(notes);

  const blob = createCSVBlob(csv);

  const url = createCSVDownloadUrl(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "notes.csv";

  link.click();

  URL.revokeObjectURL(url);
}

export default downloadCSV;