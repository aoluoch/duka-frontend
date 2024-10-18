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

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Products', path: '/products' },
    { id: 3, text: 'Cart', path: '/cart' },
    { id: 4, text: 'Contact', path: '/contact' },
    { id: 5, text: user ? `${user.name}` : 'User' }, // Display logged-in user's name
  ];

  return (
    <div className='bg-black flex justify-between items-center h-20 max-w-[100%] mx-auto px-4 text-white sticky top-0 z-50'>
      <h1 className='w-full text-3xl font-bold text-[#fff]'>Duka.</h1>
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id} className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
        {user && (
          <button onClick={logout} className="p-4 hover:bg-[#fff] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
            Logout
          </button>
        )}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  );
};

export default Navbar;
