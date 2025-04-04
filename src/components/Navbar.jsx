import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-amber-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <FaCoffee className="text-2xl text-amber-200" />
            <span className="font-bold text-xl">Chai Chowk</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-amber-200 transition duration-300">Home</Link>
            <Link to="/menu" className="hover:text-amber-200 transition duration-300">Menu</Link>
            <Link to="/about" className="hover:text-amber-200 transition duration-300">About</Link>
            <Link to="/contact" className="hover:text-amber-200 transition duration-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <Link to="/" onClick={toggleMenu} className="hover:text-amber-200 transition duration-300">Home</Link>
            <Link to="/menu" onClick={toggleMenu} className="hover:text-amber-200 transition duration-300">Menu</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-amber-200 transition duration-300">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-amber-200 transition duration-300">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
