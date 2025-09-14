import { Link } from "react-router-dom";

const RegisteredUsers = ({ headings, users, onDelete }) => {
  const updatedHeadings = ["No.", ...headings];
 
  return (
    <div className="overflow-hidden overflow-y-auto rounded-lg border border-gray-700 w-full lg:h-110 lg:w-full">
      <table className="w-full border border-collapse">
        <thead className="sticky top-0 bg-gray-700 h-12">
          <tr>
            {updatedHeadings.map((heading, index) => (
              <th
                key={index}
                className={`lg:px-4 lg:py-2 text-sm lg:text-md text-center ${
                  heading === "E-mail" ? "hidden lg:table-cell" : ""
                }`}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {/* We now use the 'index' from the map function */}
          {users.map((user, index) => (
            <tr key={user._id} className="border-b border-gray-700 ">
              {/* This new cell displays the index number (starting from 1) */}
              <td className="py-5">{index + 1}</td> 
              <td className="py-5">{user.fullName}</td>
              <td className="text-center hidden lg:table-cell">{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>

              <td className="lg:space-x-3">
                <Link
                  className="bg-blue-500 lg:text-md text-sm px-1 py-0.5 lg:px-2 lg:py-1 rounded-md cursor-pointer"
                  to={`/admin/user/details/${user._id}`}
                >
                  View
                </Link>

                <button
                  onClick={() => onDelete(user._id)}
                  className="bg-red-500 lg:text-md text-sm px-1 py-0.5 lg:px-2 lg:py-1 rounded-md cursor-pointer"
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

export default RegisteredUsers;