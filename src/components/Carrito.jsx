import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <br />
          <h3>{prod.titulo}</h3>
          <p>Precio por und: ${prod.precio}</p>
          <p>Precio total: ${prod.precio * prod.cantidad}</p>
          <p>Cant: {prod.cantidad}</p>
        </div>
      ))}

      <hr />

      {carrito.length > 0 ? (
        <>
          <h2>Total: ${precioTotal()}</h2>
          <button onClick={handleVaciar}>Vaciar carrito</button>
        </>
      ) : (
        <h2>El carrito está vacío.</h2>
      )}
    </div>
  );
};

export default Carrito;
