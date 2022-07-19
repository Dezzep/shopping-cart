import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import ShopCards from "./ShopCards";

const Shop = () => {
  
  const [storeData, setStoreData] = useState('');
  

  const fetchFakeStoreApi = async () => {
    if (!storeData) {
      const request = await fetch("https://fakestoreapi.com/products/")
      const data = await request.json();
      // setStoreData(data)
      setStoreData(data);
    }
  }
  
  useEffect(() => {
    fetchFakeStoreApi();
  })
  
const arrayOfCards = [];  
for (const i in storeData) {
  console.log(storeData[i])
  arrayOfCards.push(<ShopCards 
    title={storeData[i].title} 
    key={storeData[i].title} 
    image={storeData[i].image} 
    price={storeData[i].price.toFixed(2)} // To fixed makes sure all prices look like ex: 12.3 = 12.30
  />)
}

  return (
    <div className="bg-base-100">
      <Navbar />
      {/* <ShopCards title={storeData.title} image={storeData.image} description={storeData.description} /> */}
      <h1 className="text-2xl text-center mb-12">Shop</h1>
    <div className="flex flex-wrap gap-6 ml-2 mr-2 sm:ml-12 sm:mr-12 md:ml-6 md:mr-6">
      {arrayOfCards}
      
      
    </div>
    </div>
  )
}
export default Shop;