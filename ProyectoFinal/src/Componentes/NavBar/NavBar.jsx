import { CartWidget } from "../CartWidget/CartWidget"



export const NavBar = () => {
  return (
    <>


      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      {/* <nav className="navbar navbar-expand-sm"> */}
        <div className="col-2 justify-content-left">
          <h3>HOLA LOGO</h3>
        </div>
        <div className="col-8 container-fluid justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link3</a>
            </li>
          </ul>
        </div>
        <div className="col-2 justify-content-rigth">
          <CartWidget/>
        </div>
      </nav>
    
    

    </>
    
  )
}
