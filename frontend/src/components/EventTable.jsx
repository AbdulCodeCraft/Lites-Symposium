import { Link } from "react-router-dom";
const EventTable = ({ events, headings, onDelete }) => {
  return (
    <div className="overflow-hidden overflow-y-auto rounded-lg border border-gray-700 lg:h-110 lg:w-full">
      <table className="w-full border border-collapse">
        <thead className="sticky top-0 bg-gray-700 h-12">
          <tr>
            {headings.map((heading, index) => (
              <th
                key={index}
                className={`lg:px-4 lg:py-2 text-sm lg:text-md text-center ${
                  heading === "Description" ? "hidden lg:table-cell" : ""
                }`}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {events.map((event) => (
            <tr key={event.id} className="border-b border-gray-700 ">
              <td className="py-5">{event.event_name}</td>
              <td className="text-center hidden lg:table-cell">{event.event_description}</td>
              <td>{event.type}</td>

              <td className="space-x-3">
                <Link
                  className="bg-green-500 px-2 py-1 rounded-md cursor-pointer"
                  to={`/admin/events/edit-event/${event.id}`}
                >
                  Edit
                </Link>

                <button
                  onClick={() => onDelete(event.id)}
                  className="bg-red-500 px-2 rounded-md cursor-pointer"
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

export default EventTable;
