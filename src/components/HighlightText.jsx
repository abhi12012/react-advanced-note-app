function HighlightText({ text, searchText }) {

  const search = searchText.toLowerCase().trim();

  return (
    <span>{text}</span>
  );

}

export default HighlightText;