const CheckList = ({ title, lists, selectedValues, name, onChange }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    let updatedList;
    if (checked) {
      updatedList = [...selectedValues, value];
    } else {
      updatedList = selectedValues.filter((item) => item !== value);
    }

    onChange(name, updatedList); 
  };

  return (
    <div className="space-y-5 mb-5">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="space-y-4"> {/* Replaced <form> with <div> */}
        {lists.map((list, index) => (
          <div key={index} className="space-x-2">
            <input
              className="w-5 h-5 accent-blue-500 rounded-md border-gray-600 bg-gray-800 focus:ring-1"
              type="checkbox"
              name={name}
              value={list}
              checked={selectedValues.includes(list)}
              onChange={handleCheckboxChange}
              
            />
            <label>{list}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckList;
