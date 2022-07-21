import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {

  const [storeData, setStoreData] = useState('')
  const [totalCartItems, setTotalCartItems] = useState( // TOTAL QUANTITY OF ITEMS IN CART
    JSON.parse(localStorage.getItem('totalCartItems')) || 0
  );
  const [cartIds, setCartIds] = useState(  //Cart Id Example 2: 5 (2 is the id of the item, 5 is the quantity)
    JSON.parse(localStorage.getItem('cartIds'))||{}
  )

  const fetchFakeStoreApi = async () => {
    if (!storeData) {
      const request = await fetch("https://fakestoreapi.com/products/")
      const data = await request.json();
      setStoreData(data);
    }
  }

  const createArrayOfIdsForShoppingCart = (id) => {
    cartIds[id] = cartIds[id] + 1 || 1;
    setCartIds(cartIds)
    localStorage.setItem('cartIds', JSON.stringify(cartIds))
  };

  const addItem = async (id) => {
    setTotalCartItems(totalCartItems + 1)
    createArrayOfIdsForShoppingCart(id)
    localStorage.setItem('totalCartItems', JSON.stringify(totalCartItems));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addItem={addItem} totalCartItems={totalCartItems} cartIds={cartIds} fakeStoreData={fetchFakeStoreApi} storeData={storeData}> <Navbar></Navbar></Home>} />
        <Route path="/shop" element={<Shop addItem={addItem} cartIds={cartIds} totalCartItems={totalCartItems} fakeStoreData={fetchFakeStoreApi} storeData={storeData}><Navbar> </Navbar> </Shop>} />
      </Routes>
    </BrowserRouter>
  )
};

export default RouteSwitch;