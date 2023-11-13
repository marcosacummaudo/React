import { Producto } from "../Producto/Producto"

export const ItemList = ({ productos }) => {
  return (
    <div className="d-flex flex-sm-wrap">
        { productos.map(producto => <Producto key={producto.id} {...producto} /> ) }
    </div>
  )
}


// export const ItemList = ( { characters } ) => {
//   return (
//     <div className="d-flex flex-sm-wrap">
//         { characters.map(character => <Character key={character.id} {...character} /> ) }
//     </div>
//   )
// }



