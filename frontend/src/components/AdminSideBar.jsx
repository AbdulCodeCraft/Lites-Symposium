import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
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
  };

  return (
    <div className=" text-white w-56 min-h-screen py-6">
      <nav className="space-y-2">
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
  );
};

export default Sidebar;
