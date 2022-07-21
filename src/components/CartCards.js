const CartCards = (props) => {
  return(
    <div className="card card-side bg-slate-100 shadow-xl w-74 mb-4">
      <figure><img className="w-24 h-28 ml-1" src={props.image} alt={props.title}></img></figure>
      <div className="card-body">
        <h2 className="">{props.title}</h2>
        <p>Price: {props.price}$</p>
        <p>Qty: {props.qty}</p>
        <div className="card-actions justify-end">
        <button onClick={e => {props.addItem(props.id)}} className="btn bg-secondary">+</button>
        <button className="btn bg-secondary" onClick={e => {props.deleteItem(props.id)}}>-</button>
        </div>
      </div>
    </div>
  )
}

export default CartCards