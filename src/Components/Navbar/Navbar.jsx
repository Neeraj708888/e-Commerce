import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo1 from '../Assets/logo1.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';


const Navbar = () => {

    const [menu, setMenu] =  useState("home");
    const {getTotalCartItems} = useContext(HomeContext);

  return (
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo1} alt="" />
        <p>-Commerce</p>
    </div>
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("home")}}><Link style={{textDecoration: 'none'}} to="/">Home</Link>{menu === "home"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to="/mens">Mens</Link>{menu === "mens"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to="/womens">Womens</Link>{menu === "womens"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to="/kids">Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
