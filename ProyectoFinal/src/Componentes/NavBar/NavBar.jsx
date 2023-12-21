import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { ImgLogo } from "../ImgLogo/ImgLogo";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const NavBar = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-0">
        <div className="col-2 d-flex justify-content-center">
          <Link to="/">
            <ImgLogo />
          </Link>
        </div>
        <div className="col-8 d-flex justify-content-center">
          <ul className="navbar-nav">
            <Link to="/" className="flex-column d-flex justify-content-center">
              <li className="nav-item">
                <p className="nav-link m-0">Home</p>
              </li>
            </Link>
            <Link
              to="/category/f11"
              className="flex-column d-flex justify-content-center"
            >
              <li className="nav-item">
                <p className="nav-link m-0">Futbol 11</p>
              </li>
            </Link>
            <Link
              to="/category/f5"
              className="flex-column d-flex justify-content-center"
            >
              <li className="nav-item">
                <p className="nav-link m-0">Futbol 5</p>
              </li>
            </Link>
            <Link
              to="/category/futsal"
              className="flex-column d-flex justify-content-center"
            >
              <li className="nav-item">
                <p className="nav-link m-0">Futsal</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-2 d-flex justify-content-center">
          {totalQuantity != 0 ? (
            <Link to="/cart">
              <CartWidget />
            </Link>
          ) : (
            <CartWidget />
          )}
        </div>
      </nav>
    </>
  );
};
