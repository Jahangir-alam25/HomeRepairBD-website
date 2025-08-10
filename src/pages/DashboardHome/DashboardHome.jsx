import { Helmet } from "react-helmet-async";
import { FaTools, FaClipboardList, FaUsersCog, FaMoneyBillWave, FaHistory, FaStar } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div className="p-6 bg-purple-100 dark:bg-gray-900 min-h-screen">
      <Helmet>
        <title>Dashboard - HomeRepairBD</title>
      </Helmet>
      {/* Welcome Section */}
      <h1 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-400">
        Welcome to Your Dashboard 👋
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Here’s an overview of your activities and stats.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<FaTools />} title="Total Services" value="48" />
        <StatCard icon={<FaClipboardList />} title="Active Bookings" value="25" />
        <StatCard icon={<FaUsersCog />} title="Technicians" value="12" />
        <StatCard icon={<FaMoneyBillWave />} title="Earnings" value="৳ 12,500" />
        <StatCard icon={<FaHistory />} title="Completed Jobs" value="42" />
        <StatCard icon={<FaStar />} title="Reviews Given" value="7" />
      </div>
    </div>
  );
};

// Small reusable stat card
const StatCard = ({ icon, title, value }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md p-5 rounded-xl flex items-center border-l-4 border-purple-500 hover:shadow-lg transition duration-300">
    <div className="text-3xl text-purple-600 dark:text-purple-400 mr-4">{icon}</div>
    <div>
      <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300">{title}</h2>
      <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  </div>
);

export default DashboardHome;


