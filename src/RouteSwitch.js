import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import OrderConfirmation from './components/OrderConfirmation';

const RouteSwitch = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [blurEffect, setBlurEffect] = useState(false);
  const [storeData, setStoreData] = useState('');
  const [inventory, setInventory] = useState({});

  const [totalCartItems, setTotalCartItems] = useState(
    // TOTAL QUANTITY OF ITEMS IN CART
    JSON.parse(localStorage.getItem('totalCartItems')) || 0
  );
  const [cartIds, setCartIds] = useState(
    //Cart Id Example 2: 5 (2 is the id of the item, 5 is the quantity)
    JSON.parse(localStorage.getItem('cartIds')) || {}
  );
  localStorage.clear();

  const fetchFakeStoreApi = async () => {
    if (!storeData) {
      try {
        const request = await fetch('http://localhost:3000/api/data/');
        const data = await request.json();
        setStoreData(data);

        // create an object with the inventory of each item
        if (Object.keys(inventory).length === 0 && data.length > 0) {
          data.forEach((item) => {
            setInventory((prev) => {
              return { ...prev, [item.P_ID]: item.QTY_NET };
            });
          });
        }
      } catch (err) {
        setErrorMsg('Failed To Connect To The Store Server.');
      }
    }
  };

  const createArrayOfIdsForShoppingCart = (id) => {
    cartIds[id] = cartIds[id] + 1 || 1;
    setCartIds(cartIds);
    localStorage.setItem('cartIds', JSON.stringify(cartIds));
  };

  const removeFromArrayOfIdsForShoppingCart = (id) => {
    cartIds[id] = cartIds[id] - 1;
    if (cartIds[id] === 0) {
      delete cartIds[id];
    }
    setCartIds(cartIds);
    localStorage.setItem('cartIds', JSON.stringify(cartIds));
  };

  const addItem = (id) => {
    // check if the item is out of stock using cartIds
    if (inventory[id + 1] !== 0) {
      createArrayOfIdsForShoppingCart(id);

      setInventory((prev) => {
        return { ...prev, [id + 1]: prev[id + 1] - 1 };
      });

      setTotalCartItems(totalCartItems + 1);

      localStorage.setItem('totalCartItems', JSON.stringify(totalCartItems));
    }
  };
  const deleteItem = (id) => {
    setTotalCartItems(totalCartItems - 1);
    setInventory((prev) => {
      return { ...prev, [id + 1]: prev[id + 1] + 1 };
    });

    removeFromArrayOfIdsForShoppingCart(id);
    localStorage.setItem('totalCartItems', JSON.stringify(totalCartItems));
  };
  useEffect(() => {
    fetchFakeStoreApi();
  });

  const shopBlur = () => {
    if (blurEffect) {
      return (
        <div className="bg-red-400/60 pointer-events-none fixed z-20 top-0 right-0 bottom-0 left-0 animate-[opTransition_300ms_ease-in-out]"></div>
      );
    } else {
      return null;
    }
  };
  const blurToggleOff = () => {
    setBlurEffect(false);
  };
  const blurToggleOn = () => {
    setBlurEffect(true);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              shopBlur={shopBlur}
              blurToggleOff={blurToggleOff}
              blurToggleOn={blurToggleOn}
              deleteItem={deleteItem}
              addItem={addItem}
              totalCartItems={totalCartItems}
              cartIds={cartIds}
              fakeStoreData={fetchFakeStoreApi}
              storeData={storeData}
              inventory={inventory}
            >
              {' '}
              <Navbar></Navbar>
            </Home>
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              errorMsg={errorMsg}
              shopBlur={shopBlur}
              blurToggleOff={blurToggleOff}
              blurToggleOn={blurToggleOn}
              deleteItem={deleteItem}
              addItem={addItem}
              cartIds={cartIds}
              totalCartItems={totalCartItems}
              fakeStoreData={fetchFakeStoreApi}
              storeData={storeData}
              inventory={inventory}
            >
              <Navbar> </Navbar>{' '}
            </Shop>
          }
        />
        <Route path="/order" element={<OrderConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
