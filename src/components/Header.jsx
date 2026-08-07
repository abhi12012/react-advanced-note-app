function Header(props) {

  const title = "Advanced Notes App";
  const subtitle = "Learn React Step by Step";

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default Header;