import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const Cartpage = () => {
  const [cart, setCart] = useState([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Update cart in local storage
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedCart);
  };

  // Remove product from cart
  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    updateCart(updatedCart);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg flex justify-between items-center">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                  disabled={product.quantity === 1}
                  className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={product.quantity}
                  className="mx-2 w-12 text-center border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                  className="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <p className="text-green-500 font-bold">${(product.price * product.quantity).toFixed(2)}</p>
              <button
                onClick={() => handleRemoveProduct(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 border-t pt-4">
          <h2 className="text-2xl font-bold text-right">Total: ${calculateTotalPrice().toFixed(2)}</h2>
          <div className="flex justify-end mt-4">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cartpage;
