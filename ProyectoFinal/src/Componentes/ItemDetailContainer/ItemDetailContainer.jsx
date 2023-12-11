
import { useEffect, useState, useContext } from "react"
//import { getProductById } from "/src/Componentes/asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { FirebaseContext } from "../../context/FirebaseContext";

export const ItemDetailContainer = () => {

    //const { product, productos, getProductsDB, getProductById, isLoading } = useContext(FirebaseContext);
    const { product, getProductById, isLoading } = useContext(FirebaseContext);
    const { id } = useParams();
    //const [item, setItem] = useState(null);
    //const [isLoading, setIsLoading] = useState(true);

    useEffect( () => { 
      //setIsLoading(true);
      getProductById(id)
        // .then(resp => {

        //   setItem(resp) 

        //   setIsLoading(false)

        // }
        // )
        // .catch(error => console.log(error));
        
     }, [])
  return (
    <>
    <main className= "container text-center">
      <div className="container d-flex flex-column align-items-center mt-4">
        {isLoading ? <Loading /> : <ItemDetail {...product} />}
      </div>
    </main>
    </>
  )
}
