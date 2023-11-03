import { NavBar } from "./Componentes/NavBar/NavBar"
import { ItemListContainer } from "./Componentes/ItemListContainer/ItemListContainer"


function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hola, bienvenidos a la tienda de ..."}/>
    </>
  )
}

export default App
