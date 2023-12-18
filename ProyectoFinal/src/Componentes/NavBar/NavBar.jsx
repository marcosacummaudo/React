import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import { ImgLogo } from "../ImgLogo/ImgLogo"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const NavBar = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="col-2 d-flex justify-content-center">
          <Link to="/">
            <ImgLogo/>
          </Link>
        </div>
        <div className="col-8 container-fluid justify-content-center">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item">
                <p className="nav-link">Home</p>
              </li>
            </Link>
            <Link to="/category/f11">
              <li className="nav-item">
                <p className="nav-link">Futbol 11</p>
              </li>
            </Link>
            <Link to="/category/f5">
              <li className="nav-item">
                <p className="nav-link">Futbol 5</p>
              </li>
            </Link>
            <Link to="/category/futsal">
              <li className="nav-item">
                <p className="nav-link">Futsal</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-2 d-flex justify-content-center">
          {totalQuantity != 0 ? <Link to="/cart"><CartWidget/></Link> : <CartWidget/>}
        </div>
      </nav>
    </>
    
  )
}
