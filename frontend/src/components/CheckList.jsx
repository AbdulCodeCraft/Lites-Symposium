const CheckList = ({ title, lists }) => {
  return (
    <div className="space-y-5 mb-5">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <form className="space-y-4" action="">
        {lists.map((list, index) => {
          return (
            <div key={index} className="space-x-2">
              <input className="w-5 h-5 accent-blue-500 rounded-md border-gray-600 bg-gray-800 focus:ring-1" type="checkbox" name=""  />
              <label >{list}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default CheckList;
