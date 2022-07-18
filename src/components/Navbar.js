import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex mb-8 p-4">
      
      <h1>
        Good Stuff Store
      </h1>
      
      <ul className="flex ml-auto mr-6 gap-12">
       <Link to='/'>
        <li data-testid='hometag' id='home'> Home </li>
        </Link>
        <Link to='/shop'>
        <li data-testid='shoptag' id='shop'> Shop </li>
        </Link>
      </ul>
    </nav>
  )
};

export default Navbar;