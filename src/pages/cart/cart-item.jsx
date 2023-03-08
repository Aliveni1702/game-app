import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="img"> <img src={productImage}  /></div>
     
      <div className="description">
        <div className="prodname">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: &#x20b9;{price}</p>
        </div>
        
       
        <div className="countHandler">
          <button className="negbtn" onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        
      </div>
    </div>
  );
};

