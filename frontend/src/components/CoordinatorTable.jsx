import { Link } from "react-router-dom";

const CoordinatorTable = ({ headings, datas,onDelete }) => {
  return (
    <div className="overflow-hidden overflow-y-auto rounded-lg border border-gray-700 lg:h-110 lg:w-full">
      <table className="w-full border border-collapse">
        <thead className="sticky top-0 bg-gray-700 h-12">
          <tr>
             {headings.map((heading, index) => (
              <th 
                key={index}
                className={`lg:px-4 lg:py-2 text-sm lg:text-md text-center ${
                  heading === "Contact Number" ? "hidden lg:table-cell" : ""
                }`}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {datas.map((data) => (
            <tr key={data._id} className="border-b border-gray-700 ">
              <td className="py-5">{data.Coordinator_name}</td>
              <td className="text-center hidden lg:table-cell">{data.contact_number}</td>
              <td>{data.role || data.event_name}</td>

              <td className="lg:space-x-3">
                <Link
                 className="bg-blue-500 lg:text-md text-sm  px-1 py-0.5 lg:px-2 lg:py-1 rounded-md cursor-pointer"
                   to={`/admin/edit-coordinator/${data._id}`}
                >
                  Edit
                </Link>

                <button
                    onClick={() => onDelete(data._id)}
                   className="bg-red-500 lg:text-md text-sm  px-1 py-0.5 lg:px-2 lg:py-1 rounded-md cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoordinatorTable;
