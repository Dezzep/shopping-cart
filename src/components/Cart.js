import { useEffect, useState } from "react";

const Cart = (props) => {
  const [rerender, setRerender] = useState(props.rendering);
  const [apiCall, setApiCall] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [cartIdsAndQuantity, setCartIdsAndQuantity] = useState({})

  const test = [];

  const fetchFakeStoreApi = async () => {
    if (!apiCall){
      const request = await fetch(`https://fakestoreapi.com/products/`)
      const data = await request.json();
      setApiCall(true);
      setApiData(data);
    } 
    
    }
  

  useEffect(() => {
    if (props.rendering !== rerender) {
      setRerender(props.rendering)
      }
}, [props.rendering, rerender])

  useEffect(() => {
    fetchFakeStoreApi();
  });
  

const shopArray = () => {
  const array =[];
  if (apiCall) {
    const cartIdsString = localStorage.getItem('cartIds');
    const cartIds = JSON.parse(cartIdsString);
    for (const key in cartIds) {
      array.push(<div key={`${apiData[key].title}__${apiData[key].id}`}>
        {apiData[key].title}</div>)
    }
    return (array);
  }
}

   const theShop = shopArray();
// for (const i in storeData) {
//   arrayOfCards.push(<ShopCards 
//     title={storeData[i].title} 
//     key={storeData[i].title} 
//     image={storeData[i].image} 
//     idKey={storeData[i].id}
//     price={storeData[i].price.toFixed(2)} // To fixed makes sure all prices look like ex: 12.3 = 12.30
//     addToCart={addItem}
//   />)
// }
  return (
    <div>
      <div className="absolute right-0 top-28 sm:top-20 p-1  h-full">
          <ul className={`menu h-screen p-4 overflow-y-auto w-80 bg-base-300 border-black border-2 text-base-content ease-in-out duration-500 ${props.display? 'translate-x-0' : 'translate-x-full'}`}>
            <h1 className="mb-4">Shopping Cart</h1>
            { JSON.parse(localStorage.getItem('totalCartItems')) || 'Shopping Cart Is Empty!'}
            {theShop}
            <div className="sticky bottom-0 ml-auto w-2/4">
              <button className="btn btn-sm btn-primary mb-2">Checkout</button>
              <button className="btn btn-sm btn-danger bg-red-600">Empty Cart</button>
              </div>
          </ul>
          
      </div>
      
    </div>
  )
}
export default Cart;