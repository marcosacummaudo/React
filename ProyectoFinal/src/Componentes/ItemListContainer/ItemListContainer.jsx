import styles from "./items.module.css"

export const ItemListContainer = ( { greeting }) => {
  return (
    <>
    <main className= {` container text-center `} >
      <h1 className={styles.texto}> { greeting }</h1>
    </main>
    
    
    </>
  )
}
