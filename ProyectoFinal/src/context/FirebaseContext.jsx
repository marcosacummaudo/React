import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const getProductsDB = (category) => {
    setIsLoading(true);
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      if (resp.size === 0) {
        console.log("No hay productos en la base de datos");
      }
      const productList = resp.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setIsLoading(false);
    });
  };

  const getProductById = (id) => {
    setIsLoading(true);
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      if (resp.exists()) {
        const prod = {
          id: resp.id,
          ...resp.data(),
        };
        setProduct(prod);
      } else {
        setProduct(undefined);
      }
      setIsLoading(false);
    });
  };

  const getOrderById = (id) => {
    const orderRef = doc(db, "orders", id);
    getDoc(orderRef).then((resp) => {
      if (resp.exists()) {
        const ord = {
          id: resp.id,
          ...resp.data(),
        };
        setOrder(ord);
      } else {
        setOrder(undefined);
      }
    });
  };

  const agregarNuevoRegistro = async (datosCompra) => {
    try {
      const docRef = await addDoc(collection(db, "orders"), datosCompra);
      getOrderById(docRef.id);
    } catch (error) {
      console.error("Error al añadir el nuevo registro:", error);
    }
  };

  const addOrderDB = (cartProducts, userData, total) => {
    setOrder([]);
    setIsLoading(true);
    const newOrder = {
      buyer: userData,
      items: cartProducts,
      data: serverTimestamp(),
      estado: "generada",
      total,
    };
    agregarNuevoRegistro(newOrder);
    setIsLoading(false);
  };

  const objetValue = {
    products,
    product,
    isLoading,
    order,
    getProductsDB,
    getProductById,
    addOrderDB,
    getOrderById,
  };

  return (
    <FirebaseContext.Provider value={objetValue}>
      {" "}
      {children}{" "}
    </FirebaseContext.Provider>
  );
};
