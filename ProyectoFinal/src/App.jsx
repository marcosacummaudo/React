import { NavBar } from "./Componentes/NavBar/NavBar"
import { ItemListContainer } from "./Componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Componentes";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import { ConfirmaCompra } from "./Componentes/ConfirmaCompra/ConfirmaCompra";


function App() {
  
  return (
    <FirebaseContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"¡Hola, bienvenidos a GOAT, tienda de botines!"} />} />
              <Route path="/category/:category" element={<ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/ConfirmaCompra" element={<ConfirmaCompra/>} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </FirebaseContextProvider>

  )
}

export default App
