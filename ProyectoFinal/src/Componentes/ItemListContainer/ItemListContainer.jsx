import { useEffect, useState, useContext } from "react";
import styles from "./items.module.css"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { FirebaseContext } from "../../context/FirebaseContext";


export const ItemListContainer = ( { greeting }) => {

  const { getProductsDB, isLoading } = useContext(FirebaseContext);

  const { category } = useParams();

    
  useEffect(() => {

    getProductsDB(category)

  }, [category]);

  return (
    <>
      <main className= {` container text-center `} >
        <h1 className={styles.texto}> { greeting }</h1>
        { category ?  <h2> Categoria: {category} </h2> : ''}
        <div className="container d-flex flex-column align-items-center">
          {isLoading ? <Loading /> : <ItemList/>}
        </div>
      </main>
    </>
  )
}