



export const Producto = ({ name, img }) => {
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2">
            <p>Nombre: {name} </p>
            <img src={img} alt="" />
            <button className="btn btn-dark mt-2" >Detalle</button>
    </div>
  )
}

