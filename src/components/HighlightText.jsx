function HighlightText({ text, searchText }) {

  const search = searchText.toLowerCase().trim();

  if (!search) {
    return <span>{text}</span>;
  }

  const index = text.toLowerCase().indexOf(search);

  const before = text.slice(0, index);
const match = text.slice(index, index + search.length);

const after = text.slice(index + search.length);

if (index === -1) {
  return <span>{text}</span>;
}

  return (
  <span>
    {before}
    <mark>{match}</mark>
    {after}
  </span>
);
}
export default HighlightText;