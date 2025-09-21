import React from "react";
import { FiMenu } from "react-icons/fi";

const AdminNavbar = ({ onMenuClick }) => {
  return (
    <div className="flex items-center justify-between bg-gray-900 p-4">
      <button className="lg:hidden text-2xl text-white" onClick={onMenuClick}>
        <FiMenu />
      </button>

     <div className="flex items-center gap-3">
        
          {/* <h1 className="text-2xl">Byte_Craze</h1> */}
          <img src="/nav-logo.png" alt="" className="h-9" />
          <h1 className="text-gray-300 font-bold text-xl">Admin Panel</h1>

      </div>

      <div className="w-6"></div>
    </div>
  );
};

export default AdminNavbar;
