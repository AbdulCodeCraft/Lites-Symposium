import { RiExpandUpDownLine } from "react-icons/ri";

const Dropdown = ({ options, value, name, onChange, label }) => {
  return (
   
    <div className="relative flex items-center space-x-2">
      <label className="mr-2 text-sm text-gray-400">{label}</label>

      <div className="relative">
        <select
          required
          name={name}
          value={value}
          onChange={onChange}
          className="bg-gray-800 text-white text-sm font-semibold rounded-md border border-gray-700 px-3 py-1 pr-8 outline-none appearance-none focus:ring-1 focus:ring-gray-500"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <RiExpandUpDownLine
          size={14}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Dropdown;