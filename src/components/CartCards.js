const CartCards = (props) => {
  return (
    <div className="card card-side px-2 md:mx-2 bg-slate-100 shadow-xl w-74 mb-4">
      <figure>
        <img
          className="w-24 h-28 ml-1 select-none"
          src={props.image}
          alt={props.title}
        ></img>
      </figure>
      <div className="card-body">
        <h2 className="font-bold select-none">{props.title}</h2>
        <p className="select-none">Price: {props.price}$</p>

        <div className=" card-actions align-center">
          <button
            onClick={(e) => {
              props.addItem(props.id);
            }}
            className="btn btn-sm md:btn-md rounded-2xl bg-secondary"
          >
            +
          </button>
          <p className="py-1 md:py-2 text-center select-none">{props.qty}</p>
          <button
            className="btn btn-sm md:btn-md rounded-2xl bg-secondary"
            onClick={(e) => {
              props.deleteItem(props.id);
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
