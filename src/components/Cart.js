import { useEffect, useState, useRef } from "react";
import CartCards from "./CartCards";

const Cart = (props) => {
  const [rerender, setRerender] = useState(props.rendering);
  useEffect(() => {
    if (props.rendering !== rerender) {
      setRerender(props.rendering)
      }
}, [props.rendering, rerender])

  const cartRef = useRef(null)

   // copied this part from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  function useOutsideAlerter(ref, ref2) { 
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && ref2.current && !ref2.current.contains(event.target)) { // added a ref to shopping cart icon so when its clicked it doesn't reopen.
          props.toggleCartDisplayOff()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, ref2]);
  }
  useOutsideAlerter(cartRef, props.shopIconRef)
// ---------------------------------------- END OF COPY

const shopArray = () => {
  if (props.data && props.cartIds) {
  const array =[];
    for (const key in props.cartIds) {
      array.push(<CartCards deleteItem={props.deleteItem} addItem={props.addItem}  key={`${props.data[key].title}__${props.data[key].id}`} title={props.data[key].title} image={props.data[key].image} price={props.data[key].price.toFixed(2)} qty={props.cartIds[key]} id={props.data[key].id - 1}>        
        </CartCards>)
    }
    return (array);
  }
}
const totalPrice = () => {
    let price = 0;
  if (props.data && props.cartIds) {
    for (const key in props.cartIds) {
      price += props.data[key].price * props.cartIds[key]
    }
    return `${price.toFixed(2)}$`;
  }

}
useEffect(() => {
  totalPrice()
})

  const theShop = shopArray();

  return (
    <div id="shopping_cart" ref={cartRef}>
      <div className="absolute right-0 top-28 sm:top-20 p-1  h-full">
          <ul className={`menu h-screen p-2 overflow-y-auto w-80 md:w-96 bg-base-300 text-base-content ease-in-out duration-500 ${props.display? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="sticky top-0 right-0 grid grid-cols-2 mb-4 bg-secondary/90 text-primary-focus p-4 py-4 z-50">
              <button className="btn text-secondary-content btn-success hover:bg-primary/40 mr-2">Checkout</button>
              <button onClick={props.toggleCartWithButton} id="close-cart" className="btn btn-danger bg-red-600">Close</button>
              <div>
              <h1 className="mt-4 p-2 font-bold select-none">Total Price: {totalPrice()}</h1>
              <h1 className=" px-2 font-bold select-none"> Total Items: {props.data === undefined ? '0' : props.rendering}</h1>
              </div>
              </div>
            <h1 className="mb-4 text-xl font-bold text-center select-none">Your Cart</h1>
              
            <h1 className="text-center text-xl text-secondary-content bg-secondary"> {props.rendering === undefined ? 'Your Cart is Empty!' : ''}</h1>
           
            <div className="mb-24">{theShop}</div>
          </ul>
          
      </div>
      
    </div>
  )
}
export default Cart;