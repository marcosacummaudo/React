import { Link } from "react-router-dom";
import { DetalleItemsCompra } from "../DetalleItemsCompra/DetalleItemsCompra";

export const DetalleCompra = (order) => {
  return (
    <>
      <div>
        <div className="col-12 mt-1 mb-2">
          <h2>
            {order.buyer.nombre} {order.buyer.apellido}, ¡Muchas gracias por tu
            compra!
          </h2>
          <h4>El total de su compra es: ${order.total}</h4>
          <h3>El id de su compra es: {order.id}</h3>
          <p>
            Se le enviará un mail con el detalle a la siguiente dirección:{" "}
            {order.buyer.email}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className="col-md-9 d-flex align-items-start justify-content-start mb-1">
            Detalle de la compra:
          </p>
        </div>
        {order.items.map((item) => (
          <DetalleItemsCompra key={item.id} {...item} />
        ))}
        <div className="col-12">
          <Link to="/">
            <button type="button" className="btn btn-dark">
              Seguir comprando
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
