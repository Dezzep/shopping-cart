import { NavLink, useLocation } from 'react-router-dom';
import getUserData from '../requests/getUserData';
import { useState } from 'react';

const OrderConfirmation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const location = useLocation();
  const { state } = location;

  const usersData = async () => {
    const data = await getUserData(state.email);
    setFirstName(data[0].FIRST_NAME);
    setLastName(data[0].LAST_NAME);
    setAddress(data[0].ADDRESS);
    return data[0];
  };

  usersData();

  console.log(firstName);
  console.log(lastName);
  console.log(address);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3>
        Thank you {firstName} {lastName}
      </h3>
      <h1 className="text-4xl font-bold text-gray-800">
        Your order has been placed.
      </h1>
      <p>Your order id is: {state.orderId}</p>
      <p>it will arrive in approximately: {state.estimatedDays} days</p>
      <p>We are sending your clothes to {address}</p>
      <p>We will send you a confirmation email at {state.email}</p>
      <p className="text-2xl font-bold text-gray-800">
        <NavLink to="/">Go Back Home</NavLink>
      </p>
    </div>
  );
};

export default OrderConfirmation;
