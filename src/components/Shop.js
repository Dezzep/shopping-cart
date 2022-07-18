import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Shop = () => {
  
  const [storeData, setStoreData] = useState('');
  const fetchFakeStoreApi = async () => {
    const request = await fetch("https://fakestoreapi.com/products/", {mode: 'cors'})
    const data = await request.json();
    // setStoreData(data)
    console.log(data[1])
    return(data[1]);
  }
  useEffect(() => {
    fetchFakeStoreApi();
  })

  return (
    <div>
      <Navbar />
    <div>
      <h1>Shop</h1>
      
      
    </div>
    </div>
  )
}
export default Shop;