const Table = (props) => {
  console.log(props.tableDatas);

  return (
    <div className="text-white pt-10 space-y-3">
      <h1 className="text-2xl font-semibold">{props.title} Coardinators</h1>
      <div className="border-1 border-gray-700 rounded-lg">
        <table className="min-w-full rounded-lg table-auto overflow-hidden  text-center ">
          <thead className="divide-y divide-gray-700">
            <tr className="bg-gray-800 text-white">
              <th className="px-6 py-4">{props.overallCoardinator ? "Coardinator Name" : "Event Name"}</th>
              <th className="px-6 py-4">{props.overallCoardinator ? "Contact Number" : "Coardinator Name"}</th>
              <th className="px-6 py-4">{props.overallCoardinator ? "Role" : "Contact Number"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {props.tableDatas.map((item) => {
              return (
                <tr>
                  <td className="px-6 py-4">{props.overallCoardinator ? item.coardinator_name : item.event_name}</td>
                  <td className="px-6 py-4">{props.overallCoardinator ? item.contact_number : item.coardinator_name}</td>
                  <td className="px-6 py-4">{props.overallCoardinator ? item.role : item.contact_number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
