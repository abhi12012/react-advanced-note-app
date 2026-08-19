import cleanCSVValue from "./cleanCSVValue";

function csvRowToNote(headers, values) {
  const note = {};

  headers.forEach((header, index) => {
   note[header] = cleanCSVValue(values[index]);
  });

  return note;
}

export default csvRowToNote;