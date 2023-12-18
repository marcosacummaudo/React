import styles from "./cart.module.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <>
    <div className="row text-center">
      
      <img className={styles.imagen} src="/img/shopping-cart.svg" alt="carrito"/>
      <h3 className={styles.numero}>{totalQuantity}</h3>

    </div>
    </>
  )
}
