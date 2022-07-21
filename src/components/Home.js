import Navbar from "./Navbar";
import { Link } from 'react-router-dom';



const Home = (props) => {
  return (
    <div>
      <Navbar cartDisplay={props.totalCartItems} cartIds={props.cartIds} data={props.storeData}/>
      <div className="hero min-h-screen" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/hero.jpg'})` }} >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Your Wardrobe is in shambles</h1>
            <p className="mb-5">It's time for a change.</p>
            <Link to='/shop'><button className="btn btn-primary">Shop Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;