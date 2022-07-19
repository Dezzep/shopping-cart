import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home> <Navbar></Navbar></Home>} />
        <Route path="/shop" element={<Shop><Navbar></Navbar> </Shop>} />
      </Routes>
    </BrowserRouter>
  )
};

export default RouteSwitch;