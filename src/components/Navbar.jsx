import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__logo">
          <span className="navbar__check">✓</span>TaskMate
        </NavLink>
        <nav className="navbar__links">
          <NavLink to="/about" className="navbar__tag">
            My Task Manager
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
