import { CartWidget } from "../CartWidget/CartWidget"
import { ImgLogo } from "../ImgLogo/ImgLogo"

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* <div className="col-2 justify-content-left"> */}
        <div className="col-2 d-flex justify-content-center">
          <ImgLogo/>
        </div>
        <div className="col-8 container-fluid justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galeria</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <CartWidget/>
        </div>
      </nav>
    </>
    
  )
}
