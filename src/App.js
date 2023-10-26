import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar';
import HomeCategory from '../src/Components/Pages/HomeCategory';
import Product from '../src/Components/Pages/Product';
import Cart from '../src/Components/Pages/Cart';
import LoginSignup from '../src/Components/Pages/LoginSignup';
import Footer from "../src/Components/Footer/Footer";
import Home from '../src/Components/Pages/Home';
import menbanner from '../src/Components/Assets/menbanner.jpg';
import womenbanner from '../src/Components/Assets/womenbanner.jpg';
import kidsbanner from '../src/Components/Assets/kidsbanner.jpg';
import Login from "./Components/Login/Login";


function App(props) {
  return (
    <div >
    <BrowserRouter baseline= "/e-Commrce">
    <Navbar />
    <Routes>
      <Route path="/e-Commerce" element={<Home/>} />
      <Route path="/mens" element={<HomeCategory banner = {menbanner} category="mens"/>} />
      <Route path="/womens" element={<HomeCategory banner = {womenbanner} category="womens"/>} />
      <Route path="/kids" element={<HomeCategory banner = {kidsbanner} category="kid"/>} />
      <Route path="/product" element={<Product />}>
      <Route path=":productId" element={<Product/>} />
      </Route> 
      <Route path="/cart" element={<Cart/>} />

      <Route path="/login" element={<LoginSignup/>}/>
      <Route path="/register" element={<Login/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  
    </div>
  );
}

export default App;
