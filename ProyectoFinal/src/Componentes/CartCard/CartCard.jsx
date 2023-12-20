import styles from "./cartCard.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"


export const CartCard = (item) => {

    const { id, name, precio, img, quantity, subTotal } = item

    const { cartItems, removeItem } = useContext(CartContext);

    //console.log(cartItems)
   
  return (
    <>
    <div className="card mb-1 d-flex align-items-center justify-content-center">
        <div className="row g-0 col-md-12">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
                <img src={img} className={ `img-fluid rounded-start ${styles.imagen}`} alt="..."/>
            </div>
            <div className="col-md-7">
                <div className="card-body p-2">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text m-2"><small className="text-body-secondary">Precio: ${precio} | Cantidad: {quantity}</small></p>
                    <p className="card-text">SubTotal: ${subTotal}</p>
                </div>
            </div>
            <div className="col-md-1 d-flex align-items-center justify-content-center">
                { cartItems.length == 1 ? 
                <Link to="/">
                    <button type="button" className="btn btn-outline-light text-dark" onClick={() => removeItem(id)}>
                        <img style={{width: "120%"}} src="/img/trash-2.svg" alt="tacho"/>
                    </button>
                </Link> :
                <button type="button" className="btn btn-outline-light text-dark" onClick={() => removeItem(id)}>
                    <img style={{width: "120%"}} src="/img/trash-2.svg" alt="tacho"/>
                </button> }
            </div>
        </div>
    </div>
    </>
  )
}