import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../../components/Dropdown.jsx";
import RegisteredUsers from "../../components/RegisteredUsers.jsx";

const Role = ["coordinator", "participant"];

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:3000/api/user";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data.success) {
          setUserDetails(data.user);
        }
      } catch (error) {
        console.error("Error while fetching user: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="space-y-7">
      <h1 className="text-4xl font-semibold">Registered User</h1>

      <div className="flex space-x-6">
        <Dropdown label="Role" options={Role} />
        <Dropdown label="Role" options={Role} />
        <Dropdown label="Role" options={Role} />
      </div>

      <div>
        <RegisteredUsers users={userDetails} />
      </div>
    </div>
  );
};

export default Users;
