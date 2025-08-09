import { RiExpandUpDownLine } from "react-icons/ri";

const Dropdown = ({ options, value, name, onChange ,label}) => {
  return (
    <div className="relative w-fit space-x-2">
        <label htmlFor="">{label}</label>
      <select
        required
        name={name}
        value={value}
        onChange={onChange}
        className="bg-gray-800 text-white text-sm font-semibold rounded-md border border-gray-700 px-3 py-1 pr-8 outline-none appearance-none focus:ring-1 focus:ring-gray-500"
      >
        <option value="" disabled>
          Role
        </option>
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
  );
};

export default Dropdown;
