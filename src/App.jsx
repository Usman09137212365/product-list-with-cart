import { useState, useEffect } from "react";
import products from "./data/data.json";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ConfirmModal from "./components/ConfirmModal";
import { imagePath } from "./utils";

const STORAGE_KEY = "dessert-cart";

// Read the saved cart once, when the app first loads
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return []; // storage blocked or data corrupted: start with an empty cart
  }
}

export default function App() {
  const [cart, setCart] = useState(loadCart);
  const [showModal, setShowModal] = useState(false);

  // Save the cart every time it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // ignore: the cart still works, it just won't be remembered
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((current) => [
      ...current,
      {
        name: product.name,
        price: product.price,
        thumbnail: imagePath(product.image.thumbnail),
        quantity: 1,
      },
    ]);
  };

  const increaseQuantity = (name) => {
    setCart((current) =>
      current.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (name) => {
    setCart((current) =>
      current
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // at 0 the item leaves the cart
    );
  };

  const removeFromCart = (name) => {
    setCart((current) => current.filter((item) => item.name !== name));
  };

  const clearCart = () => setCart([]);

  const startNewOrder = () => {
    setCart([]);
    setShowModal(false);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getQuantity = (name) => {
    const found = cart.find((item) => item.name === name);
    return found ? found.quantity : 0;
  };

  return (
    <div className="page">
      <section className="products-section">
        <h1>Desserts</h1>
        <div className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              quantity={getQuantity(product.name)}
              onAdd={() => addToCart(product)}
              onIncrease={() => increaseQuantity(product.name)}
              onDecrease={() => decreaseQuantity(product.name)}
            />
          ))}
        </div>
      </section>

      <Cart
        items={cart}
        totalItems={totalItems}
        totalPrice={totalPrice}
        onRemove={removeFromCart}
        onClear={clearCart}
        onConfirm={() => setShowModal(true)}
      />

      {showModal && (
        <ConfirmModal
          items={cart}
          totalPrice={totalPrice}
          onStartNew={startNewOrder}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}