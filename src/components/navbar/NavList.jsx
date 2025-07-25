import {Link} from "react-router-dom";

const NavList = () => {
  const listStyle = "hover:text-yellow-400 transition-all duration-300 ease-in-out";
  return (
    <ul className="flex gap-7">
          <li className={listStyle}><Link to={"/"}>Home</Link></li>
          <li className={listStyle}><Link to={"/about"}>About Us</Link></li>
          <li className={listStyle}><Link to={"/coards"}>Coards</Link></li>
          <li className={listStyle}><Link to={"/faq"}>FAQ's</Link></li>
          <li className={listStyle}><Link to={"/events"}>Events</Link></li>
          <li className={listStyle}><Link to={"/admin"}>Admin</Link></li>
        </ul>
  )
}

export default NavList
