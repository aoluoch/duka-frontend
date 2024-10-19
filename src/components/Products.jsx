import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import Footer from './Footer';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // Fetch products from the API
//   useEffect(() => {
//     fetch('https://dukaapp-2.onrender.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   // Add to Cart Handler
//   const handleAddToCart = (product) => {
//     if (!user) {
//       navigate('/auth'); // Redirect to login if not authenticated
//       toast.info('Please log in to add products to the cart');
//       return;
//     }

//     const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//     const productExists = existingCart.find(item => item.id === product.id);

//     if (productExists) {
//       productExists.quantity += 1;
//     } else {
//       product.quantity = 1;
//       existingCart.push(product);
//     }

//     localStorage.setItem('cart', JSON.stringify(existingCart));

//     toast.success(`${product.name} added to your cart!`);
//   };

//   return (
//     <>
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map(product => (
//           <div key={product.id} className="border rounded-lg p-4 shadow-lg">
//             <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
//             <h2 className="text-xl font-bold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-2">{product.description}</p>
//             <p className="text-green-500 font-bold mb-4">${product.price.toFixed(2)}</p>
//             <button
//               onClick={() => handleAddToCart(product)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Products;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  const [error, setError] = useState(null);      // Add error state
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    fetch('https://dukaapp-2.onrender.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);  // Set loading to false after fetch
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products'); // Set error message
        setLoading(false);
      });
  }, []);

  // Add to Cart Handler
  const handleAddToCart = (product) => {
    if (!user) {
      navigate('/auth'); // Redirect to login if not authenticated
      toast.info('Please log in to add products to the cart');
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = existingCart.find(item => item.id === product.id);

    if (productExists) {
      productExists.quantity += 1;
    } else {
      product.quantity = 1;
      existingCart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));

    toast.success(`${product.name} added to your cart!`);
  };

  // Display loading or error message if applicable
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-500 font-bold mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Products;

