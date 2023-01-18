import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCards from './CartCards';
import Modal from './Modal';

const Cart = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [rerender, setRerender] = useState(props.rendering);

  const checkOut = (email) => {
    const createOrderId = () => {
      return 'OID_' + Date.now() + '_R_' + Math.floor(Math.random() * 100);
    };
    const orderId = createOrderId();

    // copy object and loop through the keys, increment the key by 1 (because index starts at 0)
    const cartIds = { ...props.cartIds };
    let cartIdsIncremented = {};
    for (const key in cartIds) {
      const obj = { [key]: cartIds[key] };
      obj[parseInt(key) + 1] = obj[key];
      delete obj[key];
      cartIdsIncremented = { ...cartIdsIncremented, ...obj };
    }
    let x = 1;
    for (const key in cartIdsIncremented) {
      const data = {
        o_id: orderId,
        email,
        item_id: key,
        quantity: cartIdsIncremented[key],
      };
      const params = new URLSearchParams();
      for (const key in data) {
        params.append(key, data[key]);
      }
      navigate('/checkout', {
        state: {
          email,
          orderId,
          cartIds: { ...props.cartIds },
        },
      });
      // try {
      //   fetch('http://localhost:3000/api/checkout', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //     },
      //     body: params,
      //   });
      // } catch (err) {
      //   x = 0;
      //   console.log(err);
      // }
    }
    // if (x === 1) {
    //   localStorage.clear();
    //   // refresh page

    //   navigate('/order');
    //   window.location.reload(false);
    // }
  };

  useEffect(() => {
    if (props.rendering !== rerender) {
      setRerender(props.rendering);
    }
  }, [props.rendering, rerender]);

  const cartRef = useRef(null);

  // copied this part from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  function useOutsideAlerter(ref, ref2) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          ref2.current &&
          !ref2.current.contains(event.target)
        ) {
          // added a ref to shopping cart icon so when its clicked it doesn't reopen.
          props.toggleCartDisplayOff();
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, ref2]);
  }
  useOutsideAlerter(cartRef, props.shopIconRef);

  const shopArray = () => {
    if (props.data && props.cartIds) {
      const array = [];
      for (const key in props.cartIds) {
        array.push(
          <CartCards
            deleteItem={props.deleteItem}
            addItem={props.addItem}
            key={`${props.data[key].TITLE}__${props.data[key].ID}`}
            title={props.data[key].TITLE}
            image={props.data[key].IMAGE}
            price={props.data[key].PRICE.toFixed(2)}
            qty={props.cartIds[key]} // quantity
            id={props.data[key].P_ID - 1}
            inventory={props.inventory}
          ></CartCards>
        );
      }
      return array;
    }
  };
  const totalPrice = () => {
    let price = 0;
    if (props.data && props.cartIds) {
      for (const key in props.cartIds) {
        price += props.data[key].PRICE * props.cartIds[key];
      }
      return `${price.toFixed(2)}$`;
    }
  };
  useEffect(() => {
    totalPrice();
  });
  const theShop = shopArray();

  return (
    <div id="shopping_cart" ref={cartRef}>
      <div className="absolute right-0 top-28 sm:top-20 h-full">
        <ul
          className={`menu h-screen p-2 overflow-y-auto w-80 md:w-96 bg-base-300 text-base-content ease-in-out duration-500 ${
            props.display ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="sticky top-0 right-0 grid grid-cols-1 mb-4 bg-secondary/90 text-primary-focus p-4 py-4 z-50">
            {props.data === undefined ? null : <Modal setUser={setUser} />}

            {user === null ? null : (
              <button
                className="btn text-secondary-content btn-success hover:bg-primary/40 mr-2 tooltip"
                onClick={() => checkOut(user)}
              >
                Checkout
              </button>
            )}

            <button
              onClick={props.toggleCartWithButton}
              id="close-cart"
              className="btn btn-danger bg-red-600 hover:bg-red-700 action:shadow-lg action:scale-1"
            >
              Close Cart
            </button>
            {props.data === undefined ? null : (
              <div>
                <h1 className="mt-4 p-2 font-bold select-none h-16">
                  Total Price:<br></br>
                  {totalPrice()}
                </h1>
                <h1 className=" px-2 font-bold select-none">
                  {' '}
                  Total Items:{' '}
                  {props.data === undefined ? '0' : props.rendering}
                </h1>
              </div>
            )}
          </div>
          <h1 className="mb-4 text-xl font-bold text-center select-none">
            Your Cart
          </h1>

          <h1 className="text-center text-xl text-secondary-content bg-secondary">
            {' '}
            {props.rendering === undefined ? 'Your Cart is Empty' : ''}
          </h1>

          <div className="mb-24">{theShop}</div>
        </ul>
      </div>
    </div>
  );
};
export default Cart;
