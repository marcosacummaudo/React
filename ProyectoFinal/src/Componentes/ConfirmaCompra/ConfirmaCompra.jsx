import { useEffect, useContext } from "react"
import { FirebaseContext } from "../../context/FirebaseContext";
import { Loading } from "../Loading/Loading";
import { Link } from "react-router-dom"

export const ConfirmaCompra = () => {

    const { idCompra, isLoading, getOrderById, order } = useContext(FirebaseContext);

    //console.log(idCompra)
    
    // useEffect( () => { 
    //     getOrderById(idCompra)
    //     //console.log(order)
    // }, [])


    //console.log(order[0])
    //console.log(order[0].total)
    //console.log(order.buyer.apellido)
    //console.log(order.buyer.email)

    //const {nombre, apellido, telefono, email} = order

  return (
    <>
      <main className= "container text-center">
        <div className="container d-flex flex-column align-items-center mt-4">
            { isLoading ? <Loading /> : ( 
                <div>
                    <div className= "col-12 m-4">
                        <h1>¡Muchas gracias por su compra!</h1>
                        <h3>El id de su compra es:</h3>
                        <h3>{idCompra}</h3>
                    </div>
                    <div className = "col-12">
                        <Link to="/">
                            <button type="button" className="btn btn-dark">Seguir comprando</button>
                        </Link>
                    </div>
                </div> 
                ) }
        </div>
    </main>   
    
    </>

  )
}
