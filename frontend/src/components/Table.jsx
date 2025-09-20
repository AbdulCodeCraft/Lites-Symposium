
const tdStyle = "text-sm px-2 py-4 md:px-6 md:py-4 md:text-md"
const Table = (props) => {
  console.log(props.tableDatas);

  return (
    <div className="text-white pt-10 space-y-3 ">
      <h1 className="text-xl md:text-2xl font-semibold">{props.title} Coordinators</h1>
      <div className="border-1 border-gray-700 rounded-lg">
        <table className="min-w-full rounded-lg table-auto overflow-hidden  text-center ">
          <thead className="divide-y divide-gray-700">
            <tr className="bg-gray-800 text-white">
              <th className={tdStyle}>{props.overallCoardinator ? "Coordinator Name" : "Event Name"}</th>
              <th className={tdStyle}>{props.overallCoardinator ? "Contact Number" : "Coordinator Name"}</th>
              <th className={tdStyle}>{props.overallCoardinator ? "Role" : "Contact Number"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {props.tableDatas.map((item) => {
              return (
                <tr>
                  <td className={tdStyle}>{props.overallCoardinator ? item.Coordinator_name : item.event_name}</td>
                  <td className={tdStyle}>{props.overallCoardinator ? item.contact_number : item.Coordinator_name}</td>
                  <td className={tdStyle}>{props.overallCoardinator ? item.event_name : item.contact_number}</td>
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
