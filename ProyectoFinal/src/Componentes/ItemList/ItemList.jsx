

import { Producto } from "../Producto/Producto"

export const ItemList = ({ productos }) => {
  return (
    <>
    <div className="d-flex flex-sm-wrap justify-content-center">
      { productos.map(producto => <Producto key={producto.id} {...producto} /> ) }
    </div>
    </>
  )
}

