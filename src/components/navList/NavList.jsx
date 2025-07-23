import {Link} from "react-router-dom";

const NavList = () => {
  return (
    <ul className="flex gap-7">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>All Product</Link></li>
          <li><Link to={"/about"}>Sign Up</Link></li>
          <li><Link to={"/about"}>Abdul</Link></li>
          <li><Link to={"/about"}>Cart(0)</Link></li>
        </ul>
  )
}

export default NavList
