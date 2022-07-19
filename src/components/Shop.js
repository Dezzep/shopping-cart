import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import ShopCards from "./ShopCards";

const Shop = () => {
  

  const [storeData, setStoreData] = useState('');
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || 0
  );
  

  const fetchFakeStoreApi = async () => {
    if (!storeData) {
      const request = await fetch("https://fakestoreapi.com/products/")
      const data = await request.json();
      // setStoreData(data)
      setStoreData(data);
    }
  }
  const addItem = async () => {
    setCartItems(cartItems + 1)
    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  };
  const removeItem = () => {
    if (cartItems !== 0) {
      setCartItems(cartItems - 1)
    }
  };
  
  useEffect(() => {
    fetchFakeStoreApi();
  })
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  }, [cartItems])
  
  
const arrayOfCards = [];  
for (const i in storeData) {
  arrayOfCards.push(<ShopCards 
    title={storeData[i].title} 
    key={storeData[i].title} 
    image={storeData[i].image} 
    price={storeData[i].price.toFixed(2)} // To fixed makes sure all prices look like ex: 12.3 = 12.30
    addToCart={addItem}
  />)
}

  return (
    <div className="bg-base-100">
      <Navbar cartDisplay={cartItems}/>
      {/* <ShopCards title={storeData.title} image={storeData.image} description={storeData.description} /> */}
      <h1 className="text-2xl text-center mb-12">Shop</h1>
    <div className="flex flex-wrap gap-6 sm:ml-12 sm:mr-12 md:ml-12 md:mr-12">
      {arrayOfCards}
      
      
    </div>
    </div>
  )
}
export default Shop;