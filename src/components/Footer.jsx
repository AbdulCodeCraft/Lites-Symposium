import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    // Remove fixed and z-index. Use styling to center text and add padding/margin.
    <div className='flex justify-between px-10 items-center w-full bg-gray-800 text-white py-4  '> {/* Added background, padding, margin, text-center */}
      <p>Design & Developed By Abdul Rahman</p>
      <div className="flex gap-4">
        <a className="hover:text-yellow-400 transition-all duration-300 ease-in-out" href="https://github.com/AbdulCodeCraft" target="_blank"><FaGithub size={30}/></a>
        <a className="hover:text-yellow-400 transition-all duration-300 ease-in-out" href="https://www.linkedin.com/in/ar-abdulrahman" target="_blank"><FaLinkedin size={30}/></a>
      </div>
    </div>
  )
}

export default Footer