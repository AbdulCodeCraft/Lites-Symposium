import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AdminSideBar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Users");

  const menuItems = [
    { label: "Users", icon: <FaUsers />, path: "users" },
    { label: "Coordinators", icon: <PiUsersThree />, path: "coordinators" },
    { label: "Events", icon: <LuCalendarDays />, path: "events" },
    { label: "FAQs", icon: <FaRegQuestionCircle />, path: "faqs" },
    { label: "Logout", icon: <LuLogOut />, path: "logout" },
  ];

  const handleClick = (item) => {
    setActiveItem(item.label);
    navigate(item.path);
    onClose?.(); 
  };

  return (
    <>

      <div className="hidden lg:flex text-white w-56 h-screen py-6 ">
        <nav className="space-y-2 w-full">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item)}
              className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-md 
                hover:bg-gray-700 transition 
                ${activeItem === item.label ? "bg-gray-800" : ""}`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
          <div className="fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-6 z-50">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl"
            >
              <FiX />
            </button>
            <nav className="space-y-2 mt-10">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(item)}
                  className={`flex items-center gap-3 px-4 py-2 cursor-pointer rounded-md 
                    hover:bg-gray-700 transition 
                    ${activeItem === item.label ? "bg-gray-800" : ""}`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminSideBar;
