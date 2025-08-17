import { Link } from "react-router-dom"
const EventTable = ({events ,headings}) => {
  return (
   <div className="overflow-hidden overflow-y-auto rounded-lg border border-gray-700 h-110 w-full">
      <table className="w-full border border-collapse">
        <thead className="sticky top-0 bg-gray-700 h-12">
          <tr>
            {headings.map((heading, index) => (
              <th key={index} className="px-4 py-2 text-center">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {events.map((event) => (
            <tr key={event.id} className="border-b border-gray-700 ">
              <td className="py-5">{event.event_name}</td>
              <td>{event.event_description}</td>
              <td>{event.type}</td>

              <td className="space-x-3">
                <Link
                  className="bg-green-500 px-2 py-1 rounded-md cursor-pointer"
                   to={`/admin/events/edit-event/${event.id}`}
                >
                  Edit
                </Link>

                <button
                    onClick={() => onDelete(event._id)}
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
  )
}

export default EventTable
