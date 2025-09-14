import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="flex flex-col items-center lg:flex-row p-5 lg:p-0 gap-7">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-gray-600/60"
                : "hover:text-yellow-400"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-gray-600/60 "
                : "hover:text-yellow-400"
            }`
          }
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/coardinators"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-gray-600/60 "
                : "hover:text-yellow-400"
            }`
          }
        >
          Coordinators
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-gray-600/60 "
                : "hover:text-yellow-400"
            }`
          }
        >
          Events
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-gray-600/60 "
                : "hover:text-yellow-400"
            }`
          }
        >
          FAQ's
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/admin/login"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition-all duration-300 ease-in-out ${
              isActive
                ? "bg-gray-600/60 "
                : "hover:text-yellow-400"
            }`
          }
        >
          Admin
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            `border-2 border-gray-400 px-3 py-1 rounded-md transition-all duration-300 ${
              isActive
                ? "bg-gray-600/60 text-yellow-400"
                : "hover:bg-gray-950 hover:text-white"
            }`
          }
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
