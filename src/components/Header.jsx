import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              GO FOOD
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="font-medium">Home</span>
              <IoChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="font-medium">Groceries</span>
              <IoChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span className="font-medium">Pages</span>
              <IoChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Connect with us button - Desktop only */}
            <button className="hidden lg:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
              <span className="font-medium">Connect with us</span>
              <span className="text-sm">→</span>
            </button>

            {/* Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FiSearch className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                <FiUser className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
                <FiShoppingCart className="w-5 h-5" />
                {/* Cart badge */}
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  9
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Groceries
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Pages
              </a>
              <div className="flex items-center justify-around pt-4 border-t border-gray-200">
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <FiSearch className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <FiUser className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative">
                  <FiShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    9
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
