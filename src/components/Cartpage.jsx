import React, { useState, useEffect, useRef } from 'react';
import Footer from './Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cartpage = () => {
  const [cart, setCart] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

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

  // Handle checkout button click
  const handleCheckout = () => {
    setShowForm(true);
  };

  // Submit form to Web3forms
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    formData.append("access_key", "bdef880e-2da8-4e53-bf48-c7b8987045ba");

    cart.forEach((product, index) => {
      formData.append(`Product ${index + 1}`, `${product.name} (Quantity: ${product.quantity}) - $${(product.price * product.quantity).toFixed(2)}`);
    });

    formData.append("Total Price", `$${calculateTotalPrice().toFixed(2)}`);
    formData.append("Phone Number", formRef.current.phone.value); // append phone number to form data

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    setIsSubmitting(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setIsSubmitting(false);

    if (res.success) {
      toast.success("Order submitted successfully!");
      formRef.current.reset();
      setShowForm(false); // hide form after successful submission
      updateCart([]); // clear the cart
      localStorage.removeItem('cart'); // clear the cart from local storage
    } else {
      toast.error("Failed to submit the order. Please try again.");
    }
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
            <button 
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Show form after checkout button is clicked */}
      {showForm && (
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="mt-6 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
          {cart.map((product, index) => (
            <div key={product.id}>
              <p>Product {index + 1}: {product.name} (Quantity: {product.quantity}) - ${product.price.toFixed(2)}</p>
            </div>
          ))}
          <p className="text-right font-bold">Total: ${calculateTotalPrice().toFixed(2)}</p>

          {/* Phone number field */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Order"}
          </button>
        </form>
      )}

      <Footer />
    </div>
  );
};

export default Cartpage;
