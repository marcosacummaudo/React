import { NavBar } from "./Componentes/NavBar/NavBar"
import { ItemListContainer } from "./Componentes/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Componentes";


function App() {
  
  return (

    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"¡Hola, bienvenidos a GOAT, tienda de botines!"} />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
