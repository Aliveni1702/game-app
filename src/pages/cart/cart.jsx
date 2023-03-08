import React, { useContext } from "react";
import {ShopContext } from "../../context/shop-context";
import { Data } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      
      <div className="cart">
        {Data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p id="subtotal"> Subtotal: &#x20b9;{totalAmount} </p>
          <button onClick={() => navigate("/")} id="continueshopping"> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            
            Checkout
          </button>
        </div>
      ) : (
        <div className="empty"> <h1> Hey,it feels so light!</h1>
        <p>There is nothing in your bag.Let's add some items.</p>
        </div> )}
       
    </div>
  );
};
