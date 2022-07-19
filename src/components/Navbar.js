import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex mb-8 p-4 sticky top-0 bg-primary text-primary-content">
      
      <h1>
        Good Stuff Store
      </h1>
      
      <ul className="flex ml-auto mr-6 gap-12">
       <Link to='/'>
        <li data-testid='hometag' id='home' className='hover:text-primary-focus'> Home </li>
        </Link>
        <Link to='/shop'>
        <li data-testid='shoptag' id='shop' className='hover:text-primary-focus'> Shop </li>
        </Link>
      </ul>
    </nav>
  )
};

export default Navbar;