import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemCount = ({ stock, initial = 1}) => {
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
      <button className="btn btn-outline-dark mx-3" onClick={() => addItem( {id, name, price}, count )}>Agregar al carrito</button>
    </div>
  );
};




// import { Box, Button, Card, Typography } from "@mui/material";
// import { useCount } from "../../hooks";
// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

// export const CardItem = ({ id, name, price, description, stock }) => {

//   const { addItem } = useContext(CartContext);

//   const { increment, decrement, count } = useCount(0, stock);

//   return (
//     <Card sx={{ maxWidth: 345, margin: 1, padding: 3 }}>
//       <Typography variant="h5">{name}</Typography>
//       <Typography color="text.secondary">{description}</Typography>
//       <Typography color="text.secondary">Precio: ${price}</Typography>
//       <Typography color="text.secondary">Stock: {stock}</Typography>
//       <Box display="flex" alignContent="center">
//         <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={increment}>
//           +
//         </Button>
//         <Typography fontSize={30}> {count} </Typography>
//         <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={decrement}>
//           -
//         </Button>
//       </Box>
//       <Button size="small" color="primary" variant="contained" onClick={() => addItem( {id, name, price}, count )}>
//         Agregar al carrito
//       </Button>
//     </Card>
//   );
// };