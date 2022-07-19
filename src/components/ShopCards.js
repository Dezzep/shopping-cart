const ShopCards = (props) => {
  return (
    <div className="card w-80 md:w-96 bg-base-300 shadow-xl card-bordered card-body">
      <figure><img className='h-72 w-64' src={props.image} alt={props.title}></img></figure>   
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        
        <div className="card-actions justify-end">
          <p>{props.price}$</p>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>

    </div>
  )
}
export default ShopCards;