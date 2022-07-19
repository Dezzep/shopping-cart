import { useEffect, useState } from "react";

const Cart = (props) => {
  const [rerender, setRerender] = useState(props.rendering);
  const [fetchStoreData, setFetchStoreData ] = useState(false);

  const fetchFakeStoreApiUniqueItems = async (id) => {
    if (!fetchStoreData) {
      const request = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await request.json();
      // setStoreData(data)
      setFetchStoreData(data);
    }
  }



  useEffect(() => {
    if (props.rendering !== rerender) {
      setRerender(props.rendering)
      }
}, [props.rendering, rerender])
  // useEffect(() => {
  //   // for (const [key, value] of localStorage.getItem('cartIds')) {
  //   //   console.log(`${key}: ${value}`)
  //   }
    
  //   })
  return (
    <div>
      <div className="absolute right-0 top-28 sm:top-20 p-1  h-full">
          <ul className={`menu h-screen p-4 overflow-y-auto w-80 bg-base-300 border-black border-2 text-base-content ease-in-out duration-500 ${props.display? 'translate-x-0' : 'translate-x-full'}`}>
            <h1 className="mb-4">Shopping Cart</h1>
            { JSON.parse(localStorage.getItem('cartItems')) || 'Shopping Cart Is Empty!'}
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