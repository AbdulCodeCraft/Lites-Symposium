// components/MobileNav.js
import { FaBars } from "react-icons/fa";

const MobileNav = ({ onMenuClick }) => {
  return (
    <div className="lg:hidden bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <button onClick={onMenuClick}>
        <FaBars size={24} />
      </button>
    </div>
  );
};

export default MobileNav;