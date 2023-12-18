import { useState, useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";


export const FormCompra = () => {

  const { cartItems, totalCartItems, clearCartItems, totalQuantity } = useContext(CartContext);
  const { addOrderDB } = useContext(FirebaseContext);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState(0);
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');


  const handleBlurConfirma = (e) => {
    setEmail2(e.target.value)

    console.log(nombre)
    console.log(apellido)
    console.log(telefono)
    console.log(email)
    console.log(email2)

    if (email !== email2) {
      alert('Los emails no coinciden.');
    }
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email !== email2 || email === '') {
      alert('Los emails no coinciden. Los Emails ingresados deben ser iguales');
    } else {
      addOrderDB(cartItems, {nombre, apellido, telefono, email}, totalCartItems);
    }

    clearCartItems();
    setNombre('');
    setApellido('');
    setTelefono(0);
    setEmail('');
    setEmail2('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="col-md-10 pe-5 border-end border-dark">
        <h4 className="d-flex justify-content-start">Ingrese sus datos personales:</h4>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" className="form-control" id="Nombre" onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese su nombre"/>
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" className="form-control" id="Apellido" onChange={(e) => setApellido(e.target.value)} placeholder="Ingrese su apellido"/>
        </div>
        <div className="form-group">
          <label>Teléfono</label>
          <input type="number" className="form-control" id="Tel" onChange={(e) => setTelefono(e.target.value)} placeholder="Ingrese su telefono"/>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese email"/>
        </div>
        <div className="form-group">
          <label>Confimación Email</label>
          <input type="email" className="form-control" id="exampleInputEmail2" onChange={handleBlurConfirma} placeholder="Confirme email"/>
          <small id="emailHelp" className="form-text text-muted">Asegurese de ingresar el mismo email.</small>
        </div>
          {/* <button type="submit" className="btn btn-dark">Confirmar Compra</button> */}
          {totalQuantity != 0 ? <button type="submit" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal">Comprar</button> : <button type="submit" className="btn btn-dark disabled">Confirmar Compra</button>}
      
      
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
      
      
      
      </form>
    </>
  )
}
