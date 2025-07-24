    import {Link} from "react-router-dom";
    import NavList from "./NavList";


    const Navbar = () => {
      return (
        <div className='px-10 h-12 flex justify-between bg-black/50 rounded-md items-center fixed top-0 mt-5 mx-auto w-300 left-0 right-0 z-20 text-white'>
          <div>
          <Link to={"/"}><h1 className="text-2xl">Symposium</h1></Link>
          </div>
          <div className="flex gap-10 ">
            <NavList/>
            
          </div>
        </div>
      )
    }

    export default Navbar
