import Navbar from "./Navbar";
import { useState } from "react";

const Home = () => {
  const [cartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || 0
  );
  return (
    <div>
      <Navbar cartDisplay={cartItems} />
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}
export default Home;