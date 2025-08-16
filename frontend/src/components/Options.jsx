import { RiExpandUpDownLine } from "react-icons/ri";

const Options = ({ label, options, value, name, onChange }) => {
  return (
    <div className="relative md:w-1/2 space-y-1 my-5">
      <label className="block font-semibold">{label}</label>

      <select
        required
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pr-10 rounded-md leading-tight bg-gray-800 outline-none px-3 py-3 appearance-none"
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option} className="p-30">
            {option}
          </option>
        ))}
      </select>

   
      <RiExpandUpDownLine className="absolute right-3 top-11 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default Options;
