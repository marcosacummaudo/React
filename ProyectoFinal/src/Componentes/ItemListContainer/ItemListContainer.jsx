import { useEffect, useState } from "react";
import styles from "./items.module.css"
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "/src/Componentes/asyncMock";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";


export const ItemListContainer = ( { greeting }) => {

  const { category } = useParams();
  const [productos, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if (category) {
          
          const productosFiltrados = resp.filter((producto) => producto.category === category);

          if(productosFiltrados.length > 0) {

            setProducto(productosFiltrados);
            } else {

              setProducto(resp);
            }
        } else {

            setProducto(resp);
          }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <>
      <main className= {` container text-center `} >
        <h1 className={styles.texto}> { greeting }</h1>
        { category ?  <h2>Categoria: {category}</h2> : ''}
        <div className="container d-flex flex-column align-items-center">
          {isLoading ? <Loading /> : <ItemList productos={productos} />}
        </div>
      </main>
    </>
  )
}