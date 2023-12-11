import { useEffect, useState, useContext } from "react";
import styles from "./items.module.css"
import { ItemList } from "../ItemList/ItemList";
//import { cargaProductos } from "/src/utils/cargaProductos";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { FirebaseContext } from "../../context/FirebaseContext";


export const ItemListContainer = ( { greeting }) => {

  const { getProductsDB, isLoading } = useContext(FirebaseContext);
  //const { product, productos, getProductsDB, getProductById, isLoading } = useContext(FirebaseContext);

  const { category } = useParams();
  // const [productos, setProducto] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    //cargaProductos();
    //console.log(category)
    //setIsLoading(true);
    getProductsDB(category)
    //getProductById()
    //getProducts()
      // .then((resp) => {
      // if (category) {
          
      //     const productosFiltrados = resp.filter((producto) => producto.category === category);

      //     if(productosFiltrados.length > 0) {

      //       setProducto(productosFiltrados);
      //       } else {

      //         setProducto(resp);
      //       }
      //   } else {

      //       setProducto(resp);
      //     }
      //   setIsLoading(false);
      // })
      // .catch((error) => console.log(error));
  //}, [category]);
  }, [category]);

  // return (
  //   <>
  //     <main className= {` container text-center `} >
  //       <h1 className={styles.texto}> { greeting }</h1>
  //       { { category ?  <h2>Categoria: {category}</h2> : ''} }
  //       <div className="container d-flex flex-column align-items-center">
  //         {isLoading ? <Loading /> : <ItemList productos={productos} />}
  //       </div>
  //     </main>
  //   </>
  // )

  return (
    <>
      <main className= {` container text-center `} >
        <h1 className={styles.texto}> { greeting }</h1>
        { category ?  <h2> Categoria: {category} </h2> : ''}
        <div className="container d-flex flex-column align-items-center">
          {isLoading ? <Loading /> : <ItemList/>}
        </div>
      </main>
    </>
  )
}