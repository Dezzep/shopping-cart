import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import ShopCards from "./ShopCards";

const Shop = () => {
  

  const [storeData, setStoreData] = useState('');
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || 0
  );
  // id's are just intergers. These will be used to fetch an api when the cart is clicked.
  const [cartIds, setCartIds] = useState( 
    JSON.parse(localStorage.getItem('cartIds'))||{}
  )
  

  const fetchFakeStoreApi = async () => {
    if (!storeData) {
      const request = await fetch("https://fakestoreapi.com/products/")
      const data = await request.json();
      // setStoreData(data)
      setStoreData(data);
    }
  }
  const createArrayOfIdsForShoppingCart = (id) => {
    cartIds[id] = cartIds[id] + 1 || 1;
    setCartIds(cartIds)
    localStorage.setItem('cartIds', JSON.stringify(cartIds))
  };
  const addItem = async (id) => {
    setCartItems(cartItems + 1)
    createArrayOfIdsForShoppingCart(id)
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  useEffect(() => {
    fetchFakeStoreApi();
  })
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  }, [cartItems])
  
  useEffect(() => {
    localStorage.setItem('cartIds', JSON.stringify(cartIds));
  
  }, [cartIds])
  
  
  
const arrayOfCards = [];  
for (const i in storeData) {
  arrayOfCards.push(<ShopCards 
    title={storeData[i].title} 
    key={storeData[i].title} 
    image={storeData[i].image} 
    idKey={storeData[i].id}
    price={storeData[i].price.toFixed(2)} // To fixed makes sure all prices look like ex: 12.3 = 12.30
    addToCart={addItem}
  />)
}

  return (
    <div className="bg-base-100 mt-36">
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