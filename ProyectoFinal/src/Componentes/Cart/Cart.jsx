import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartCard } from "../CartCard/CartCard";
import { FormCompra } from "../FormCompra/FormCompra";
import { Link } from "react-router-dom";
import { MensajeError } from "../MensajeError/MensajeError";

export const Cart = () => {
  const { cartItems, totalCartItems, clearCartItems, totalQuantity } =
    useContext(CartContext);

  return (
    <>
      {totalQuantity === 0 ? (
        <MensajeError texto={"El carrito no puede estar vacio."} />
      ) : (
        <main className="container text-center d-flex align-items-center justify-content-center">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <FormCompra />
          </div>

          <div className="col-md-6">
            <h4 className="d-flex justify-content-start">Carrito:</h4>
            {cartItems.map((item) => (
              <CartCard key={item.id} {...item} />
            ))}
            <div className="card mb-1 d-flex align-items-center justify-content-center">
              <div className="row g-0 col-md-12">
                <div className="col-md-4">
                  <div className="card-body">
                    <h5 className="card-title">Total Carrito:</h5>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">${totalCartItems}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-1 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Blanquear Carrito
              </button>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Blanquear Carrito
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  ¿Esta seguro que desea borrar todos los articulos del carrito?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <Link to="/">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={() => clearCartItems()}
                    >
                      Aceptar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};
