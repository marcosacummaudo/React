

import { Item } from "../Item/Item"

export const ItemList = ({ productos }) => {
  return (
    <>
    <div className="d-flex flex-sm-wrap justify-content-center">
      { productos.map(producto => <Item key={producto.id} {...producto} /> ) }
    </div>
    </>
  )
}

