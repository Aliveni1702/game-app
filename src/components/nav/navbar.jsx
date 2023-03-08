import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ShoppingBag, GameController } from "phosphor-react";
import "./nav.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <p> <GameController size={80}/></p>
     
     
      <div className="links">
        
        <Link to="/"><ShoppingBag size={32}/><br/>Shop</Link>
        {/* <Link to="/contact"> Contact </Link> */}
        <Link to="/cart">
          <ShoppingCart size={32} /><br/>Cart
        </Link>
      </div>
     
    </div>
  );
};


