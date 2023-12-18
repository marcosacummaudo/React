import { createContext, useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  
  // const recuperarCarritoStorage = (cart) => {
  //   const compraActual = JSON.parse(localStorage.getItem("carrito"))
  //   compraActual !== null && cart.push(...cart)
  // }
  
  const guardarCarritoStorage = (cart) => {
    localStorage.setItem("carrito", JSON.stringify(cart))
  }

  //const carritoRecuperado = recuperarCarritoStorage(cartItems)


  const addItem = (item, quantity) => {
    const { id, name, precio, img } = item;
    //console.log(item)
    //console.log(quantity)
    // Buscamos la posición indice del producto dentro del carrito
    const index = cartItems.findIndex((product) => product.id === id);
    //console.log(index)
    if (index !== -1) {
      // Si el resulta de index no es -1
      // Hacemos una copia del state
      const cartItemsCopy = [...cartItems];
      // Modificamos la cantidad del producto aumentando el valor con la cantidad recibida
      cartItemsCopy[index].quantity += quantity;
      // Modificamos el subtotal con la nueva cantidad
      cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].precio;
      // Reemplazamos el state original con la copia
      setCartItems(cartItemsCopy);
    } else {
      const newItem = {
        id,
        name,
        precio,
        img,
        quantity,
        subTotal: quantity * precio,
      };
      setCartItems([...cartItems, newItem])
    }
  };

  const removeItem = (id) => { 
    const arrayFilter = cartItems.filter( item => item.id !== id );
    setCartItems(arrayFilter);        

    if (cartItems.length === 0) {
      return <Redirect to="/" />;
    }
  }

  const clearCartItems = () => { 
    setCartItems([]);        
  }

  const handleTotal = () => {
    const total = cartItems.reduce( (acum, item) => acum + item.subTotal, 0 );
    setTotalCartItems(total);
  }

  const handleTotalQuantity = () => { 
    const total = cartItems.reduce( (acum, item) => acum + item.quantity, 0 );
    setTotalQuantity(total);
  }

  useEffect( () => { 
    handleTotal();
    handleTotalQuantity();
    //recuperarCarritoStorage(cartItems)
    console.log(cartItems)
    guardarCarritoStorage(cartItems)
  }, [cartItems] )

  const objetValue = {
    cartItems,
    totalCartItems,
    totalQuantity,
    addItem,
    removeItem,
    clearCartItems
  };

  return <CartContext.Provider value={objetValue}> {children} </CartContext.Provider>;

};