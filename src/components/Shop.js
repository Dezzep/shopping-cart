import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import ShopCards from './ShopCards';

const Shop = (props) => {
  const [errorDisplayed, setErrorDisplayed] = useState(false);
  useEffect(() => {
    props.fakeStoreData();
  });
  useEffect(() => {
    localStorage.setItem(
      'totalCartItems',
      JSON.stringify(props.totalCartItems)
    );
  }, [props.totalCartItems]);

  useEffect(() => {
    localStorage.setItem('cartIds', JSON.stringify(props.cartIds));
  }, [props.cartIds]);

  const loadingBar = () => {
    if (!props.storeData && !errorDisplayed) {
      return (
        <div className="text-center">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
            disabled=""
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <div className="flex flex-col">
              <p>Getting Store Data...</p>
            </div>
          </button>
        </div>
      );
    } else {
      return null;
    }
  };
  const errorMessage = () => {
    if (props.errorMsg && !props.storeData) {
      !errorDisplayed
        ? setErrorDisplayed(true)
        : console.log("Can't connect to server");
      return (
        <div className="p-4 mt-4 bg-error text-black font-bold text-xl text-center ">
          {props.errorMsg}
        </div>
      );
    } else {
      return null;
    }
  };

  const arrayOfCards = [];

  for (const i in props.storeData) {
    if (
      props.storeData[i].CATEGORY === 'mens clothing' ||
      props.storeData[i].CATEGORY === 'womens clothing'
    ) {
      arrayOfCards.push(
        <ShopCards
          title={props.storeData[i].TITLE}
          key={`${props.storeData[i].TITLE}_${props.storeData}`}
          image={props.storeData[i].IMAGE}
          idKey={props.storeData[i].P_ID}
          price={props.storeData[i].PRICE.toFixed(2)} // To fixed makes sure all prices look like ex: 12.3 = 12.30
          addToCart={props.addItem}
        />
      );
    }
  }

  return (
    <div className="bg-base-100 mt-36">
      <Navbar
        blurToggleOn={props.blurToggleOn}
        blurToggleOff={props.blurToggleOff}
        deleteItem={props.deleteItem}
        cartDisplay={props.totalCartItems}
        addItem={props.addItem}
        cartIds={props.cartIds}
        data={props.storeData}
      />
      {props.shopBlur()}
      <h1 className="text-2xl text-center mb-12 z-10">Shop</h1>
      {loadingBar()}
      {errorMessage()}
      <div className="flex flex-wrap justify-center gap-6 sm:ml-12 sm:mr-12 md:ml-12 md:mr-12">
        {arrayOfCards}
      </div>
    </div>
  );
};
export default Shop;
