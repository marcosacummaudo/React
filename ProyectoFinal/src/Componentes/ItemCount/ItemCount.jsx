import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ prod, initial = 1}) => {

  const {id, name, precio, stock, img} = prod

  const [count, setCount] = useState(initial);
  
  const { addItem } = useContext(CartContext);
  
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className="d-flex justify-content-center align-content-center p-4">
      <div>
        <button className="btn btn btn-dark mx-3" onClick={increment}>+</button>
        <strong>{count}</strong>
        <button className="btn btn-dark mx-3" onClick={decrement}>-</button>
      </div>
      <button className="btn btn-outline-dark mx-3" onClick={() => addItem( {id, name, precio, img}, count )}>Agregar al carrito</button>
    </div>
  );
};
