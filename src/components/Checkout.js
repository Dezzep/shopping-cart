import { useLocation } from 'react-router-dom';

const Checkout = (props) => {
  const { state } = useLocation();
  const { email, orderId, cart } = state;
  console.log(email);
  console.log(orderId);
  console.log(cart);

  console.log(props.cartIds);
  return (
    <div>
      <h1>Welcome to the checkout fam</h1>
      <h2>Here's your order:</h2>
    </div>
  );
};

export default Checkout;
