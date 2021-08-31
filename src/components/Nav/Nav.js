import React from 'react';
import "./Nav.css";


function Nav() {
 

   return (
        <header>
        <div className="overlay">
        </div>
        <nav >
            <h2 className="">SKI Callcutaion</h2>
            <ul>
                <li ><a href="#"  >Home</a></li>
                <li ><a href="#" >Product</a></li>
                <li ><a href="#">Offer</a></li>
                <li ><a href="#">LogIn</a></li>
                <li className="Cart" ><a href="#">LogIn</a></li>
            </ul>
        </nav>
  </header>
    );
}



export default Nav;