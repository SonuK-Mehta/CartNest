import React from "react";
import { PRODUCTS } from "../constants";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
