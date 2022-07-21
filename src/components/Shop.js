import Navbar from "./Navbar";
import { useEffect } from "react";
import ShopCards from "./ShopCards";

const Shop = (props) => {
    
  useEffect(() => {
    props.fakeStoreData();
  })
  useEffect(() => {
    localStorage.setItem('totalCartItems', JSON.stringify(props.totalCartItems));
  
  }, [props.totalCartItems])
  
  useEffect(() => {
    localStorage.setItem('cartIds', JSON.stringify(props.cartIds));
  
  }, [props.cartIds])
  
  
  
const arrayOfCards = [];  
for (const i in props.storeData) {
  if (props.storeData[i].category === "men's clothing" || props.storeData[i].category === "women's clothing") {
  arrayOfCards.push(<ShopCards 
    title={props.storeData[i].title} 
    key={props.storeData[i].title} 
    image={props.storeData[i].image} 
    idKey={props.storeData[i].id}
    price={props.storeData[i].price.toFixed(2)} // To fixed makes sure all prices look like ex: 12.3 = 12.30
    addToCart={props.addItem}
  />)
  }
}

  return (
    <div className="bg-base-100 mt-36">
      <Navbar cartDisplay={props.totalCartItems} cartIds={props.cartIds} data={props.storeData} />
      <h1 className="text-2xl text-center mb-12">Shop</h1>
    <div className="flex flex-wrap gap-6 sm:ml-12 sm:mr-12 md:ml-12 md:mr-12">
      {arrayOfCards}
    </div>
    </div>
  )
}
export default Shop;