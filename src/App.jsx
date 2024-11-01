
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          {/* DEFINIR LA NAVEGACION DE LA WEB (EL QUE SOLO LLEVA "/" ES EL DE LA PAGINA PRINCIPAL) */}
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
