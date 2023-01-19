import { NavLink, useLocation } from 'react-router-dom';


const OrderConfirmation = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">
        Order Page Coming Soon
      </h1>
      <p className="text-2xl font-bold text-gray-800">
        <NavLink to="/">Go Back Home</NavLink>
      </p>
    </div>
  );
};

export default OrderConfirmation;
