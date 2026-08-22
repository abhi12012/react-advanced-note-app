function Header({ title, subtitle, children }) {
  return (

    <header className="app-header">

      <h1>{title}</h1>
      <p>{subtitle}</p>

      {children}

    </header>
    
  );
}

export default Header;