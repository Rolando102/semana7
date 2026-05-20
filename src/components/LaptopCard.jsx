function LaptopCard({ laptop }) {
  return (
    <div className="card">
      <img
        src={laptop.imagen}
        alt={laptop.nombre}
      />

      <h2>{laptop.nombre}</h2>

      <p>Marca: {laptop.marca}</p>

      <h3>S/ {laptop.precio}</h3>
    </div>
  );
}

export default LaptopCard;