const ShopCards = (props) => {
  return (
    <div className="card ml-2 mr-2 sm:ml-0 sm:mr-0 w-80 md:w-96 bg-white shadow-xl hover:bg-slate-100 card-bordered card-body glass ease-in duration-300 ">
      <figure><img className='h-72 sm:h-96 w-auto' src={props.image} alt={props.title}></img></figure>   
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        
        <div className="card-actions justify-end">
          <p>{props.price}$</p>
          <button onClick={() => props.addToCart(props.idKey - 1)} className="btn btn-primary ease-in duration-250">Add To Cart</button>
        </div>
      </div>

    </div>
  )
}
export default ShopCards;