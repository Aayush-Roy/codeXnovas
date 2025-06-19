import { useState } from 'react';
import logo from "../assets/logo (1).png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-8">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo"  />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg">
            Product
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg">
            Promo
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-lg">
            Contact
          </a>
        </div>

        {/* Order Now Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mx-4 mt-2 py-4 md:hidden">
            <a href="#" className="block px-6 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">Home</a>
            <a href="#" className="block px-6 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">Product</a>
            <a href="#" className="block px-6 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">Promo</a>
            <a href="#" className="block px-6 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">About</a>
            <a href="#" className="block px-6 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">Contact</a>
            <div className="px-6 pt-2">
              <button className="w-full px-5 py-2 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
