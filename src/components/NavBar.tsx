import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Medicine AI</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/product" className="text-white hover:text-gray-200">Our Product</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
          <Link to="/shop" className="text-white hover:text-gray-200">Medicine AI+</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
