import Cart from '../components/Cart';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = (props) => {
  const [displayCart, setDisplayCart] = useState(false)
  
  const toggleCart = () => {
    displayCart ? setDisplayCart(false) : setDisplayCart(true);
  }
  return (
    <div>
      {props.cartDisplay
      ? <nav className="flex flex-col sm:flex-row sm:mb-8 p-1 sm:p-4 fixed top-0 w-full bg-primary/95 text-primary-content z-50">
        <h1 className='text-3xl mb-4'>
          Stuff Store
        </h1>
        <ul className="flex ml-auto mr-6 sm:mr-12 gap-12 sm:gap-24 mb-2 sm:mb-0">
         <Link to='/'>
          <li id='home' className='text-2xl ease-in duration-300 hover:text-primary-focus'> Home </li>
          </Link>
          <Link to='/shop'>
          <li id='shop' className='text-2xl ease-in duration-300 hover:text-primary-focus'> Shop </li>
          </Link>
          <li className='mb-4 justify-center align-top tooltip tooltip-open tooltip-left tooltip-error ease-in duration-300 hover:tooltip-success cursor-pointer' id='shopping-bag' data-tip={props.cartDisplay}>
             <svg onClick={() => {toggleCart()}} className='fill-primary-content hover:fill-primary-focus ease-in duration-300' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
          </li>
        </ul>
        <Cart display={displayCart}></Cart>

      </nav>
      : 
      <nav className="flex flex-col sm:flex-row sm:mb-8 p-1 sm:p-4 fixed top-0 w-full bg-primary/95 text-primary-content z-50">
        <h1 className='text-3xl mb-4'>
          Stuff Store
        </h1>
        <ul className="flex ml-auto mr-6 sm:mr-12 gap-12 sm:gap-24 justify-evenly mb-2 sm:mb-0">
         <Link to='/'>
          <li data-testid='hometag' id='home' className='text-2xl justify-center align-center ease-in duration-300 hover:text-primary-focus'> Home </li>
          </Link>
          <Link to='/shop'>
          <li data-testid='shoptag' id='shop' className='text-2xl justify-center align-center ease-in duration-300 hover:text-primary-focus'> Shop </li>
          </Link>
          <li className='' id='shopping-bag' data-tip={props.cartDisplay}>
             <svg onClick={() => {toggleCart()}} className='fill-primary-content align-center justify-center hover:fill-primary-focus ease-in duration-300' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
          </li>
        </ul>
        <Cart display={displayCart}></Cart>

      </nav>
        }
    </div>
  )
};

export default Navbar;