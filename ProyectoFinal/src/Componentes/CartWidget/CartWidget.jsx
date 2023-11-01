import styles from "./cart.module.css"


export const CartWidget = () => {
  return (
    // <div>CartWidget</div>
    <>
    <div className="row text-center">
      
      <img className={styles.imagen} src="./src/Componentes/CartWidget/shopping-cart.svg" alt="carrito"/>
      <h3 className={styles.numero}>5</h3>

    </div>
    </>
  )
}
