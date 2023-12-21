import { useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { Loading } from "../Loading/Loading";
import { DetalleCompra } from "../DetalleCompra/DetalleCompra";

export const ConfirmaCompra = () => {
  const { order } = useContext(FirebaseContext);

  return (
    <>
      <main className="container text-center">
        <div className="container d-flex flex-column align-items-center mt-2">
          {order.id == undefined ? <Loading /> : <DetalleCompra {...order} />}
        </div>
      </main>
    </>
  );
};
