import React from "react";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <p>{item.name}</p>
      <p>
        ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
      </p>
      {item.price !== 0 && (
        <div className="cart-actions">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
          <button onClick={() => removeFromCart(item.id)}>🗑</button>
        </div>
      )}
      {item.price === 0 && <span className="free-gift">FREE GIFT</span>}
    </div>
  );
};

export default CartItem;
