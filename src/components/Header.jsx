function Header({ title, subtitle, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>

      {children}
    </div>
  );
}

export default Header;