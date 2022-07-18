import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import ShopCards from "./ShopCards";

const Shop = () => {
  
  const [storeData, setStoreData] = useState('');
  

  const fetchFakeStoreApi = async () => {
    if (!storeData) {
      const request = await fetch("https://fakestoreapi.com/products/", {mode: 'cors'})
      const data = await request.json();
      // setStoreData(data)
      console.log(data[0])
      setStoreData(data[2]);
      return(data[0]);
    }
  }
  
  useEffect(() => {
    fetchFakeStoreApi();
  })
  
  

  return (
    <div>
      <Navbar />
      <ShopCards title={storeData.title} image={storeData.image} description={storeData.description} />
    
    <div>
      <h1>Shop</h1>
      
      
    </div>
    </div>
  )
}
export default Shop;