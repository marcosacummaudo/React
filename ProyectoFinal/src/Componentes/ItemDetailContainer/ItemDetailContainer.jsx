import { useEffect, useContext } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { FirebaseContext } from "../../context/FirebaseContext";

export const ItemDetailContainer = () => {

    const { product, getProductById, isLoading } = useContext(FirebaseContext);
    const { id } = useParams();

    useEffect( () => { 
      getProductById(id)
        
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
