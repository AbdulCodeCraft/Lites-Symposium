import {Link} from "react-router-dom";

const NavList = () => {
  const listStyle = "hover:text-yellow-400  transition-all duration-300 ease-in-out";
  return (
    <ul className="flex flex-col items-center lg:flex-row p-5 lg:p-0 gap-7">
          <li className={listStyle}><Link to={"/"}>Home</Link></li>
          <li className={listStyle}><Link to={"/about"}>About Us</Link></li>
          <li className={listStyle}><Link to={"/coardinators"}>Coardinators</Link></li>
          <li className={listStyle}><Link to={"/events"}>Events</Link></li>
          <li className={listStyle}><Link to={"/faq"}>FAQ's</Link></li>
          <li className={listStyle}><Link to={"/admin"}>Admin</Link></li>
          <li className="border-2 border-gray-400 px-3 rounded-md  transition-all duration-300 hover:bg-gray-950 hover:text-white "><Link to={"/register"}>Register</Link></li>
        </ul>
  )
}

export default NavList
