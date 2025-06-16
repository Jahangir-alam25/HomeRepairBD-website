

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10  ">
      <div className=" w-11/12 mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {/* About with Logo */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="https://i.ibb.co/GvH5Nmzf/mortgage.png" alt="HomeRepairBD Logo" className="w-10 h-10" />
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-[length:200%_200%]"
            >
              HomeRepairBD
            </motion.h1>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            At HomeRepairBD, we are committed to delivering top-quality home repair and maintenance services with skilled professionals and reliable solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4">Services</h2>
          <ul className="text-sm md:text-base space-y-2 text-gray-300">
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>Appliance Repair</li>
            <li>Home Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 text-sm md:text-base mb-2 text-gray-300">
            <FaPhone /> +1 234 567 8901
          </p>
          <p className="flex items-center gap-2 text-sm md:text-base text-gray-300">
            <FaEnvelope /> support@homerepairbd.com
          </p>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <Link to="https://web.facebook.com/?_rdc=1&_rdr#" className="hover:text-blue-400 transition"><FaFacebookF /></Link>
            <Link to="https://x.com/home" className="hover:text-blue-400 transition"><FaTwitter /></Link>
            <Link to="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" className="hover:text-blue-400 transition"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} HomeRepairBD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;



