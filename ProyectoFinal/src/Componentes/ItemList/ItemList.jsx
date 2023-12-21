import { useContext } from "react";
import { Item } from "../Item/Item";
import { FirebaseContext } from "../../context/FirebaseContext";

export const ItemList = () => {
  const { products } = useContext(FirebaseContext);

  return (
    <>
      <div className="d-flex flex-sm-wrap justify-content-center">
        {products.map((producto) => (
          <Item key={producto.id} {...producto} />
        ))}
      </div>
    </>
  );
};
