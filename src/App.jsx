import {Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Stories from "./pages/Stories";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Cart from "./pages/cart";
import Contact from "./pages/Contact";
import Checkout from "./pages/checkout";
import WishList from "./pages/WishList";
import Navbar from "./components/Navbar";


const App = () => {
  return (
   <>
    <Navbar />
     <div className="bg-slate-900 max-h-48">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Signup" element={<Signup />} />
          <Route  path="/Shop" element={<Shop />} />
          <Route  path="/Story" element={<Stories />} />
          <Route  path="/product/:id" element={<SingleProduct />} />
          <Route  path="/Login" element={<Login/>} />
          <Route  path="/Cart" element={<Cart />} />
          <Route  path="/Contact" element={<Contact />} />
          <Route  path="/Checkout" element={<Checkout />} />
          <Route  path="/Wish" element={<WishList />} />
        </Routes>
     </div>
   </>
  );
};

export default App;
