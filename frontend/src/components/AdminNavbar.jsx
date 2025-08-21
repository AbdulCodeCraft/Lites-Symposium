import React from "react";
import { FiMenu } from "react-icons/fi";

const AdminNavbar = ({ onMenuClick }) => {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-4">
      <button className="lg:hidden text-2xl text-white" onClick={onMenuClick}>
        <FiMenu />
      </button>

      <h1 className="text-xl font-semibold text-white">Symposium Admin</h1>

      <div className="w-6"></div>
    </div>
  );
};

export default AdminNavbar;
