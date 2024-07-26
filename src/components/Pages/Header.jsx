import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.jpeg'
import { FaTwitter, FaFacebookF, FaPinterestP,FaSearch,FaShoppingCart, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


function Header() {
    return (
    <header className=" bg-white border-b border-gray-200 shadow-md sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link to="/" className="w-36 font-bold text-green-600"><img src={logo} alt="" /></Link>
        </div>
        <div className="flex gap-7 items-center space-x-4">
          <a href="#" className=" text-gray-500 hover:text-black "><FaTwitter /></a>
          <a href="#" className="text-gray-500 hover:text-blue-400 "><FaFacebookF /></a>
          <a href="#" className="text-gray-500 hover:text-red-600 "><FaPinterestP /></a>
          <a href="#" className="text-gray-500 hover:text-rose-500"><FaInstagram /></a>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-green-600" />
            <span><strong>+91 123456789</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-green-600" />
            <span><strong>AlTitans@gmail.com</strong></span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-green-600" />
            <span><strong>BITM Ballari, Karnataka</strong></span>
          </div>
        </div>
      </div>
      <nav className="bg-gray-100">
        <div className="container mx-auto flex justify-between items-center py-2">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-600">About</Link></li>
            <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
            <li><Link to="/projects" className="hover:text-green-600">Projects</Link></li>
            <li><Link to="/news" className="hover:text-green-600">News</Link></li>
            <li><Link to="/shop" className="hover:text-green-600">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="hover:text-green-600"><FaSearch /></button>
            <button className="relative hover:text-green-600">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header