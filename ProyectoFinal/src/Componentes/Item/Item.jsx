import styles from "./Item.module.css"
import { Link } from "react-router-dom"

export const Item = ({ id, name, img, precio, marca }) => {
  
return (

<div className="card align-items-center" style={{width: "17rem"}}>
  <img src={img} className={ `card-img-top ${styles.imagen}`} alt="..."/>
  <div className="card-body p-2">
    <h4 className="card-title">{name}</h4>
    <p className="card-text mb-2">{marca}</p>
    <p className="card-text mb-2">${precio}</p>
    <Link to={`/item/${id}`}>
      <p className="btn btn-primary">Detalles</p>
    </Link>
  </div>
</div>
  )
}