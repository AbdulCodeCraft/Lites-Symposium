import {Link} from "react-router-dom";
import NavList from "../navList/navList";

const navbar = () => {
  return (
    <div className='px-10 h-12 flex justify-between items-center bg-red-200 w-full'>
      <div>
       <Link to={"/"}><h1 className="text-2xl">Ecommerce</h1></Link>
      </div>
      <div className="flex gap-10 ">
        <NavList/>
        <input className="outline-none" type="text" placeholder='Search for products' />
      </div>
    </div>
  )
}

export default navbar
