import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Cartpage from './components/Cartpage';
import Contact from './components/Contact';
import AuthForm from './components/AuthForm';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
