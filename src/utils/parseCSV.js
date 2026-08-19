function parseCSV(csv) {
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

    function parseCSV(csv) {
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

    if (char === "\r" && !insideQuotes) {
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

    currentValue += char;
  }

  values.push(currentValue);
rows.push(values);

return rows;
}

export default parseCSV;