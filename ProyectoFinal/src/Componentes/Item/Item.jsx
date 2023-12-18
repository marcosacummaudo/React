import styles from "./Item.module.css"
import { Link } from "react-router-dom"

export const Item = ({ id, name, img, precio, marca }) => {
  
return (

<div className="card align-items-center" style={{width: "18rem"}}>
  <img src={img} className={ `card-img-top ${styles.imagen}`} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{marca}</p>
    <p className="card-text">${precio}</p>
    <Link to={`/item/${id}`}>
      <p className="btn btn-primary">Detalles</p>
    </Link>
  </div>
</div>
  )
}