import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../config/firebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [idCompra, setIdCompra] = useState('');

  const getProductsDB = (category) => {
    setIsLoading(true);
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      if (resp.size === 0) {
        console.log("No hay productos en la base de datos");
      }
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
      setIsLoading(false);
    });
  };

  const getProductById = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      // Verificar si el producto existe
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

//   const discountStock = async (product) => { 
//     const productRef = doc( db, "products", product.id );
//     const newStock = product.stock - 1;
//     await updateDoc(productRef, { stock: newStock } )
    
//  }


const agregarNuevoRegistro = async (datosCompra) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), datosCompra);
    setIdCompra(docRef.id)
    console.log('Nuevo registro añadido con el ID:', idCompra);
  } catch (error) {
    console.error('Error al añadir el nuevo registro:', error);
  }
};

 const addOrderDB = (cartProducts, userData, total) => { 
  const newOrder = {
    buyer: userData,
    items: cartProducts,
    data: serverTimestamp(),
    estado: 'generada',
    total
  }
  console.log(newOrder)
  agregarNuevoRegistro(newOrder)
  // addDoc( collection(db, "orders"), newOrder );
  // const docRef = addDoc(collection(db, 'orders'), newOrder);
  // console.log('Nuevo registro añadido con el ID:', docRef.id);
}



// const agregarNuevoDocumento = async (datos) => {
//   try {
//     const docRef = await firestore.collection('tuColeccion').add(datos);
//     console.log('Nuevo documento ID:', docRef.id);
//   } catch (error) {
//     console.error('Error al agregar el documento:', error);
//   }
// };




  const objetValue = {
    products,
    product,
    isLoading,
    getProductsDB,
    getProductById,
    //discountStock,
    addOrderDB,
    idCompra
  };

  return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};