import React from "react";
import { Data } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Xbox Games</h1>
      </div>

      <div className="products">
        {Data.map((product) => (
          
          <Product data={product} />
        
        ))}
      </div>
    </div>
  );
};

