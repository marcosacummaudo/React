import { useEffect, useState } from "react";
import styles from "./items.module.css"
import { ItemList } from "../ItemList/ItemList";


export const ItemListContainer = ( { greeting }) => {
    const [productos, setProducto] = useState([]);
    
    const getProductos = async () => {
      try {
        const resp = await fetch("/src/assets/ProductosJSON.txt");
        const data = await resp.json();
        console.log(data);
        setProducto(data);
      } 
      catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
     getProductos();
    }, []);


  return (
    <>
      <main className= {` container text-center `} >
        <h1 className={styles.texto}> { greeting }</h1>
        <div className="container d-flex flex-column align-items-center">
          <ItemList productos={productos} />
        </div>
      </main>
    </>
  )
}
