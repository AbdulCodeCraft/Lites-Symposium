import { Link } from "react-router-dom";
import NavList from "./NavList";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";  
import { useState } from "react";

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="px-5 md:px-10 h-12 flex justify-between bg-gray-700/40 rounded-md items-center fixed top-0 md:mt-5 mx-auto md:w-4/5 left-0 right-0 z-20 text-white">
      <div>
        <Link to={"/"}>
          <h1 className="text-2xl">Byte_Craze</h1>
          
        </Link>
      </div>


      {/* Desktop view */}
      <div className="hidden lg:flex gap-10 ">
        <NavList />
      </div>

      {/* mobile icon */}
      <div className="lg:hidden">
          <button onClick={()=>setIsOpen(!isOpen)} className="text-2xl flex items-center">
            {isOpen ?  <MdOutlineClose/> : <GiHamburgerMenu/>}
          </button>
      </div>

      {/* mobile menu */}

      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-gray-800/95 flex flex-col gap-6 lg:hidden rounded-b-lg items-center "> 
          <NavList/>
        </div>
      )}
    </div>
  );
};

export default Navbar;
