function cleanCSVValue(value) {
  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1);
  }

  return value.replace(/""/g, '"');
}

export default cleanCSVValue;