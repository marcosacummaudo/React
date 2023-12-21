import { Link } from "react-router-dom";

export const MensajeError = ({ texto }) => {
  return (
    <>
      <main className="container text-center">
        <div className="col-12 m-4">
          <h3>{texto}</h3>
        </div>
        <div className="col-12">
          <Link to="/">
            <button type="button" className="btn btn-dark">
              Ir al inicio
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};
