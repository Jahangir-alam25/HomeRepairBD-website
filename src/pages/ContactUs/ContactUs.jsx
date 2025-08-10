import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-amber-50 dark:bg-gray-900 min-h-screen py-10 px-5 md:px-20">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Have questions or need help? Our team is here to assist you.
      </p>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center border-t-4 border-purple-500">
          <FaPhoneAlt className="text-4xl text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Phone</h2>
          <p className="text-gray-600 dark:text-gray-300">+880 1234-567890</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center border-t-4 border-purple-500">
          <FaEnvelope className="text-4xl text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Email</h2>
          <p className="text-gray-600 dark:text-gray-300">support@homerepairbd.com</p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center border-t-4 border-purple-500">
          <FaMapMarkerAlt className="text-4xl text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Address</h2>
          <p className="text-gray-600 dark:text-gray-300">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 max-w-3xl mx-auto border-t-4 border-purple-500">
        <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

