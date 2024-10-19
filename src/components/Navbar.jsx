import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-black flex justify-between items-center h-20 max-w-[100%] mx-auto px-4 text-white sticky top-0 z-50'>
      <h1 className='text-3xl font-bold text-[#fff]'>Duka.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer'>
          <Link to="/products">Products</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer'>
          <Link to="/cart">Cart</Link>
        </li>
        {user ? (
          <>
            <li className='p-4 text-white'>
              Hello, {user.name}
            </li>
            <button onClick={logout} className="p-4 hover:bg-[#fff] rounded-xl m-2 cursor-pointer">
              Logout
            </button>
          </>
        ) : (
          <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer'>
            <Link to="/auth">Login</Link>
          </li>
        )}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
