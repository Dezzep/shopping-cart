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
  function useOutsideAlerter(ref) { 
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && 'shop-cart-icon' !== event.target.id) {
          props.toggleCartDisplayOff()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(cartRef)
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
      console.log(`${props.data[key].price} + ${props.cartIds[key]}`)
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
          <ul className={`menu h-screen p-2 overflow-y-auto w-80 bg-base-300 text-base-content ease-in-out duration-500 ${props.display? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="sticky top-0 right-0 grid grid-cols-2 mb-4 bg-secondary p-4 py-4 z-50">
              <button className="btn btn-success hover:bg-primary/40 mr-2">Checkout</button>
              <button onClick={props.toggleCartWithButton} id="close-cart" className="btn btn-danger bg-red-600">Close</button>
              <div>
              <h1 className="mt-4 p-2">Total: {totalPrice()}</h1>
              <h1 className="p-2"> Total Items: {props.data === undefined ? 0 : props.data}</h1>
              </div>
              </div>
            <h1 className="mb-4 text-xl font-bold text-center">Your Cart</h1>
              
            <h1 className="text-center text-xl text-secondary-content bg-secondary"> {props.data === undefined ? 'Your Cart is Empty!' : null}</h1>
           
            <div className="mb-24">{theShop}</div>
          </ul>
          
      </div>
      
    </div>
  )
}
export default Cart;