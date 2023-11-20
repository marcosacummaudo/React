import { useEffect, useState } from "react"
import { Loading } from "../Loading/Loading";

export const Cart = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => { 
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
      
   }, [])

  return (
    <>
      <main className= "container text-center">
        <div className="container d-flex flex-column align-items-center mt-4">
          {isLoading ? <Loading /> : <h2>Cart</h2> }
        </div>
      </main>
    </>
  )
}
