function parseCSV(csv) {
  csv = csv.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  let insideQuotes = false;

  let currentValue = "";

  let values = [];

  let rows = [];

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];

    if (char === '"') {
      insideQuotes = !insideQuotes;
    }

    if (char === "," && !insideQuotes) {
      values.push(currentValue);
      currentValue = "";
      continue;
    }

    if (char === "\n" && !insideQuotes) {
      values.push(currentValue);
      rows.push(values);

      values = [];
      currentValue = "";

      continue;
    }

    currentValue += char;
  }

  values.push(currentValue);
  rows.push(values);

  return rows;
}

export default parseCSV;