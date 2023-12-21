import { ItemCount } from "../ItemCount/ItemCount";
import { MensajeError } from "../MensajeError/MensajeError";

export const ItemDetail = (product) => {
  const { id, name, marca, category, description, img, precio } = product;

  return (
    <>
      {id === undefined ? (
        <MensajeError texto={"El producto no existe."} />
      ) : (
        <div className="container d-flex flex-column align-items-center">
          <div className="card mb-3 col-10">
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <h5 className="card-text">Marca: {marca}</h5>
                  <h6 className="card-text">Categoria: {category}</h6>
                  <h6 className="card-text">Precio: ${precio}</h6>
                  <p className="card-text">
                    <small className="text-body-secondary">{description}</small>
                  </p>
                </div>
              </div>
              <div className="row g-0 align-items-center">
                <ItemCount prod={product} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
