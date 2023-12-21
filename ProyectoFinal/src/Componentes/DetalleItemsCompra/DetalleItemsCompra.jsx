import styles from "./detalleItemsCompra.module.css";

export const DetalleItemsCompra = (item) => {
  const { img, name, precio, quantity, subTotal } = item;

  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card mb-1 col-md-9 d-flex align-items-center justify-content-center">
          <div className="row g-0 col-md-12">
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <img
                src={img}
                className={`img-fluid rounded-start ${styles.imagen}`}
                alt="..."
              />
            </div>
            <div className="col-md-9">
              <div className="card-body p-1">
                <h5 className="card-title">{name}</h5>
                <p className="card-text m-1">
                  <small className="text-body-secondary">
                    Precio: ${precio} | Cantidad: {quantity}
                  </small>{" "}
                  | SubTotal: ${subTotal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
