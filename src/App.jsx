import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { FREE_GIFT, THRESHOLD } from "./constants";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      quantity > 0
        ? prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        : prev.filter((item) => item.id !== id)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Handle free gift
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const hasGift = cart.some((item) => item.id === FREE_GIFT.id);

  if (subtotal >= THRESHOLD && !hasGift) {
    setCart((prev) => [...prev, { ...FREE_GIFT, quantity: 1 }]);
  } else if (subtotal < THRESHOLD && hasGift) {
    setCart((prev) => prev.filter((item) => item.id !== FREE_GIFT.id));
  }

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
