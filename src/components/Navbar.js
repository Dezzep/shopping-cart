import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

const Navbar = (props) => {
  const [displayCart, setDisplayCart] = useState(false);

  const off = () => {
    props.blurToggleOff();
    setDisplayCart(false);
  };
  const on = () => {
    props.blurToggleOn();
    setDisplayCart(true);
  };

  const toggleCart = () => {
    displayCart ? off() : on();
  };
  const toggleCartDisplayOff = () => {
    off();
  };
  const shopIconRef = useRef(null);

  return (
    <div>
      {props.cartDisplay ? (
        <nav className="flex flex-col sm:flex-row sm:mb-8 p-1 sm:p-4 fixed top-0 w-full bg-primary/95 text-primary-content z-50">
          <h1 className="text-center sm:text-left text-3xl">Stuff Store</h1>
          <ul className="flex mt-3 justify-around sm:mt-0 sm:ml-auto mr-6 sm:mr-12 gap-12 sm:gap-24 mb-2 sm:justify-evenly sm:mb-0">
            <Link to="/">
              <li
                id="home"
                className="text-2xl justify-center align-center ease-in duration-50 hover:text-primary-focus"
              >
                {' '}
                Home{' '}
              </li>
            </Link>
            <Link to="/shop">
              <li
                id="shop"
                className="text-2xl justify-center align-center ease-in duration-50 hover:text-primary-focus"
              >
                {' '}
                Shop{' '}
              </li>
            </Link>
            <li
              className="justify-center align-top tooltip tooltip-open tooltip-left tooltip-error ease-in duration-50 hover:tooltip-success cursor-pointer"
              id="shopping-bag"
              data-tip={props.cartDisplay}
            >
              <svg
                ref={shopIconRef}
                id="shop-cart-icon"
                onClick={() => {
                  toggleCart();
                }}
                className="shop-cart-icon fill-primary-content hover:fill-primary-focus ease-in duration-300"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
              </svg>
            </li>
          </ul>
          <Cart
            shopIconRef={shopIconRef}
            toggleCartWithButton={toggleCart}
            toggleCartDisplayOff={toggleCartDisplayOff}
            display={displayCart}
            deleteItem={props.deleteItem}
            addItem={props.addItem}
            inventory={props.inventory}
            rendering={props.cartDisplay}
            data={props.data}
            cartIds={props.cartIds}
          ></Cart>
        </nav>
      ) : (
        <nav className="flex flex-col sm:flex-row sm:mb-8 p-1 sm:p-4 fixed top-0 w-full bg-primary/95 text-primary-content z-50">
          <h1 className="text-center sm:text-left text-3xl">Stuff Store</h1>
          <ul className="flex mt-3 justify-around sm:mt-0 sm:ml-auto mr-6 sm:mr-12 gap-12 sm:gap-24 mb-2 sm:justify-evenly sm:mb-0">
            <Link to="/">
              <li
                data-testid="hometag"
                id="home"
                className="text-2xl justify-center align-center ease-in duration-50 hover:text-primary-focus"
              >
                {' '}
                Home{' '}
              </li>
            </Link>
            <Link to="/shop">
              <li
                data-testid="shoptag"
                id="shop"
                className="text-2xl justify-center align-center ease-in duration-50 hover:text-primary-focus"
              >
                {' '}
                Shop{' '}
              </li>
            </Link>
            <li className="" id="shopping-bag" data-tip={props.cartDisplay}>
              <svg
                ref={shopIconRef}
                id="shop-cart-icon"
                onClick={() => {
                  toggleCart();
                }}
                className="fill-primary-content align-center justify-center hover:fill-primary-focus ease-in duration-50"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
              </svg>
            </li>
          </ul>
          <Cart
            shopIconRef={shopIconRef}
            toggleCartWithButton={toggleCart}
            toggleCartDisplayOff={toggleCartDisplayOff}
            display={displayCart}
            cartIds={props.cartIds}
          ></Cart>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
