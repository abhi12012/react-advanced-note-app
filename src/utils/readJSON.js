export function readJSON(file, onSuccess) {

  const reader = new FileReader();

  reader.onload = (event) => {

    const jsonText = event.target.result;

    const data = JSON.parse(jsonText);

    onSuccess(data);

  };

  reader.readAsText(file);

}