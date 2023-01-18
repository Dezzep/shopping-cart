const ShopCards = (props) => {
  return (
    <div className="card ml-2 mr-2 sm:ml-0 sm:mr-0 w-80 md:w-96 flex-grow-0 bg-white shadow-xl hover:bg-slate-50 card-bordered card-body glass ease-in duration-300 ">
      <figure>
        <img
          className="h-72 sm:h-96 w-auto select-none"
          src={props.image}
          alt={props.title}
        ></img>
      </figure>
      <div className="card-body h-56">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>

        <div className="card-actions justify-end">
          <p>{props.price}$</p>

          {props.inventory[props.idKey] === 0 ? (
            <button
              onClick={() => {
                props.addToCart(props.idKey - 1);
              }}
              className="btn btn-grey-400 ease-in duration-250"
            >
              Out Of Stock
            </button>
          ) : (
            <button
              onClick={() => {
                props.addToCart(props.idKey - 1);
              }}
              className="btn btn-primary ease-in duration-250"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ShopCards;
