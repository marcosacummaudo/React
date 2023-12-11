import { useContext } from "react"
import { Item } from "../Item/Item"
import { FirebaseContext } from "../../context/FirebaseContext";

export const ItemList = ( ) => {

  const { products } = useContext(FirebaseContext);
  //const { producto, productos, getProductsDB, getProductById, isLoading } = useContext(FirebaseContext);
  //console.log("No hay productos en la base de datos");

  return (
    <>
      <div className="d-flex flex-sm-wrap justify-content-center">
        { products.map(producto => <Item key={producto.id} {...producto} /> ) }
      </div>
    </>
  )
}

