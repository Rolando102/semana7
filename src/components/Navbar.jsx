import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>💻 LaptopStore</h2>

      <ul className="nav-links">
        <li>Inicio</li>
        <li>Catálogo</li>
        <li>Ofertas</li>
        <li>Contacto</li>
      </ul>

      <button onClick={toggleTheme}>
        {darkMode
          ? "Modo Claro"
          : "Modo Oscuro"}
      </button>
    </nav>
  );
}

export default Navbar;