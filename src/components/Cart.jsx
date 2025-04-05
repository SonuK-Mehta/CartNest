import React from "react";
import CartItem from "./CartItem";
import ProgressBar from "./ProgressBar";
import { FREE_GIFT, THRESHOLD } from "../constants";

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart Summary</h2>
      <p>Subtotal: ₹{subtotal}</p>
      <ProgressBar subtotal={subtotal} />
      {subtotal >= THRESHOLD && <p>🎉 You got a free Wireless Mouse!</p>}

      <div className="cart-items">
        <h2>Cart Items</h2>

        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <h3 className="empty-cart">Your cart is empty</h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
