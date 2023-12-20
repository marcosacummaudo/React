import { useState, useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"


export const FormCompra = () => {

  const { cartItems, totalCartItems, clearCartItems } = useContext(CartContext);
  const { addOrderDB } = useContext(FirebaseContext);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState(0);
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  //const [habilita, setHabilita] = useState(false);


  const handleHabilita = () => {

    if(nombre == '') {alert('Debe completar el nombre');}

    if(apellido == '') {alert('Debe completar el apellido');}

    if(telefono == 0) {alert('Debe completar el telefono');}

    if(email == '') {alert('Debe completar el nombre');}

    if(email2 == '') {alert('Debe completar el nombre');}
    
    if (email !== email2) {alert('Los emails no coinciden. Los Emails ingresados deben ser iguales');}
  };

  const handleFormSubmit = () => {
    
    if (email !== email2 || email === '') {
      alert('Los emails no coinciden. Los Emails ingresados deben ser iguales');
    } else {
      addOrderDB(cartItems, {nombre, apellido, telefono, email}, totalCartItems);
    }

    clearCartItems();
  };

  return (
    <>
      <form className="col-md-10 pe-5 border-end border-dark">
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
          <input type="email" className="form-control" id="exampleInputEmail2" onChange={(e) => setEmail2(e.target.value)} placeholder="Confirme email"/>
          <small id="emailHelp" className="form-text text-muted">Asegurese de ingresar el mismo email.</small>
        </div>
        { (nombre !=='' && apellido !=='' && telefono !== 0 && email !== '' && email2 !== '' && email===email2) ? 
        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal1" >Comprar</button> : 
        <button type="button" className="btn btn-dark" onClick={() => handleHabilita()} >Comprar</button>
        }
            {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmación de Compra</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Esta por confirmar su compra ¿Esta seguro?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <Link to="/ConfirmaCompra"><button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleFormSubmit()} >Aceptar</button></Link>
                </div>
              </div>
            </div>
          </div>
      </form>
    </>
  )
}