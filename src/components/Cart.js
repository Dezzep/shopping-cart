import { useEffect, useState } from "react";

const Cart = (props) => {
  const [rerender, setRerender] = useState(props.rendering)


  useEffect(() => {
    if (props.rendering !== rerender) {
      setRerender(props.rendering)
      }
}, [props.rendering, rerender])
  return (
    <div>
      <div className="absolute right-0 top-28 p-1  h-full z-50">
          <ul className={`menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ease-in-out duration-500 ${props.display? 'translate-x-0' : 'translate-x-full'}`}>
            <h1>Shopping Cart</h1>
            { JSON.parse(localStorage.getItem('cartItems')) || 'Shopping Cart Is Empty!'}
          </ul>
      </div>
    </div>
  )
}
export default Cart;