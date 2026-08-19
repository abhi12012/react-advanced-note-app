import csvHeaders from "./csvHeaders";
import noteToCSVRow from "./noteToCSVRow";

function createCSV(notes) {
  const header = csvHeaders.join(",");

  const rows = notes.map((note) =>
    noteToCSVRow(note)
  );

  return [header, ...rows].join("\n");
}

export default createCSV;