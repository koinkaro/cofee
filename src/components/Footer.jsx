import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Chai Chowk</h3>
            <p className="mb-4">
              Serving the finest coffee and authentic Indian snacks in the heart of Rajkot since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-200 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-200 transition duration-300">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-200 transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-200 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-200">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt />
                <span>123 Race Course Road, Rajkot, Gujarat, India 360001</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope />
                <span>info@chaichowk.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-4 text-center">
          <p>© {new Date().getFullYear()} Chai Chowk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
