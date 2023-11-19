

export const ItemDetail = ({ name, marca, category, description, img, precio, stock }) => {

  return (
    <>
    <div className="container d-flex flex-column align-items-center">
      <div className="card mb-3 col-10">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
                <p className="card-text">Marca: {marca}</p>
                <p className="card-text">Categoria: {category}</p>
                <p className="card-text">Precio: ${precio}</p>
                <p className="card-text"><small className="text-body-secondary">{description}</small></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>

  );
};
