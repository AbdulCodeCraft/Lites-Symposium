import { RiExpandUpDownLine } from "react-icons/ri";

const Options = ({ label, options, value, name, onChange }) => {
  return (
    <div className="relative md:w-1/2  space-y-1 my-5">
      <label className="block font-semibold">{label}</label>

      <select required name={name} value={value} onChange={onChange} className="w-full pr-10 rounded-md leading-tight bg-gray-800 outline-none px-3 py-3 appearance-none">
        {options.map((option, index) => {
          return (
            <option  className="p-30" key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Options;
