import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { CartCard } from "../CartCard/CartCard";
import { FormCompra } from "../FormCompra/FormCompra";
import { Link } from "react-router-dom"
import { MensajeError } from "../MensajeError/MensajeError";

export const Cart = () => {
    
  const { cartItems, totalCartItems, clearCartItems, totalQuantity } = useContext(CartContext);

  return (
  <>
      {totalQuantity === 0 ? <MensajeError texto={"El carrito no puede estar vacio."}/> : 

          <main className= "container text-center d-flex align-items-center justify-content-center">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <FormCompra/>
            </div>

            <div className="col-md-6">
            <h4 className="d-flex justify-content-start">Carrito:</h4>
              { cartItems.map(item => <CartCard key={item.id} {...item} /> ) }
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
                {totalQuantity != 0 ? <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">Blanquear Carrito</button> : ''}
              </div>
            </div>
                {/* <!-- The Modal --> */}
                    <div className="modal fade" id="myModal">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                          {/* <!-- Modal Header --> */}
                          <div className="modal-header">
                            <h4 className="modal-title">Blanquear Carrito</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                          </div>

                          {/* <!-- Modal body --> */}
                          <div className="modal-body">
                            ¿Esta seguro que desea borrar todos los articulos del carrito?
                          </div>

                          {/* <!-- Modal footer --> */}
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <Link to="/"><button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => clearCartItems()}>Aceptar</button></Link>
                          </div>

                        </div>
                      </div>
                    </div> 
          </main>
      }
    </>
  )
}
