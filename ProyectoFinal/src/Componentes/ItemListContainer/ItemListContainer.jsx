import { useEffect, useState } from "react";
import styles from "./items.module.css"
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "/src/Componentes/asyncMock";
import { useParams } from "react-router-dom";


export const ItemListContainer = ( { greeting }) => {

  const { category } = useParams();
  const [productos, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => {
        if (category) {
          // En caso que haya una categoría, vamos a filtrar los productos por esa categoría y guardar en en nuestro state
          const productosFiltrados = resp.filter((producto) => producto.category === category);

          // Verificamos que el array de productos filtrados tenga al menos un elemento
          if(productosFiltrados.length > 0) {
          // Guardamos los productos filtrados por categoría en nuestro state products
            setProducto(productosFiltrados);
            } else {
          // Si los productos filtrados no tienen elementos en el array cargamos todos los productos en el state products
              setProducto(resp);
            }
        } else {
          // Si no existe una categoría en el parámetro seteamos todos los productos en el state products
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
          {isLoading ? <h2> Cargando productos... </h2> : <ItemList productos={productos} />}
        </div>
      </main>
    </>
  )
}