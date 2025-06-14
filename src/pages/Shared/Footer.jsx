

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            At HomeRepairBD, we are committed to delivering top-quality home repair and maintenance services with skilled professionals and reliable solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="text-sm space-y-2">
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Appliance Repair</li>
            <li>Home Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 text-sm mb-2">
            <FaPhone /> +1 234 567 8901
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope /> support@homerepairbd.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <Link to="https://web.facebook.com/?_rdc=1&_rdr#" className="hover:text-blue-400"><FaFacebookF /></Link>
            <Link to="https://x.com/home" className="hover:text-blue-400"><FaTwitter /></Link>
            <Link to="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" className="hover:text-blue-400"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} HomeRepairBD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

