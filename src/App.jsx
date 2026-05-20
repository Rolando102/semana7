import {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import LaptopCard from "./components/LaptopCard";

import { laptops } from "./data/laptops";

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [busqueda, setBusqueda] =
    useState("");

  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  const inputRef = useRef();

  const enfocarInput = () => {
    inputRef.current.focus();
  };

  const laptopsFiltradas = useMemo(() => {
    return laptops.filter((laptop) =>
      laptop.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase())
    );
  }, [busqueda]);

  const limpiarBusqueda = useCallback(() => {
    setBusqueda("");
  }, []);

  return (
    <div
      className={darkMode ? "dark" : "light"}
    >
      <Navbar />

      <h1>Catálogo de Laptops</h1>

      <button onClick={toggleTheme}>
        Cambiar Tema
      </button>

      <br />
      <br />

      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) =>
          setBusqueda(e.target.value)
        }
      />

      <button onClick={enfocarInput}>
        Focus Input
      </button>

      <button onClick={limpiarBusqueda}>
        Limpiar
      </button>

      <div className="grid">
        {laptopsFiltradas.map((laptop) => (
          <LaptopCard
            key={laptop.id}
            laptop={laptop}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;