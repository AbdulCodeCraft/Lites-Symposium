import { Link, useNavigate } from "react-router-dom";

const RegisteredUsers = ({ users }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden overflow-y-auto rounded-lg border border-gray-700 h-110 w-full">
      <table className="w-full border border-collapse">
        <thead className="sticky top-0 bg-gray-700 h-12">
          <tr>
            <th>User Name</th>
            <th>E-mail</th>
            <th>Registration Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-b border-gray-700 "
            >
              <td className="py-5">{user.fullName}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>

              <td className="space-x-3">
                <Link
                  className="bg-blue-500 px-2 py-1 rounded-md cursor-pointer"
                  to={`/admin/user/details/${user._id}`}
                >
                  View
                </Link>

                <button className="bg-red-500 px-2 rounded-md cursor-pointer">
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
