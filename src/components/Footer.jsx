import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    // Remove fixed and z-index. Use styling to center text and add padding/margin.
    <div className='flex justify-between px-10 items-center w-full bg-gray-800 text-white py-4  '> {/* Added background, padding, margin, text-center */}
      <p>Design & Developed By Abdul Rahman</p>
      <div className="flex gap-4">
        <a href=""><FaGithub size={30}/></a>
        <a href=""><FaLinkedin size={30}/></a>
      </div>
    </div>
  )
}

export default Footer