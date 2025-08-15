import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../../components/Dropdown.jsx";
import UserTable from "../../components/UserTable.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registration = ["Newest First", "Oldest First"];
const headings = ["username","e-mail","Registration Date","Actions"];

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(registration[0]);
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

  const handleFilterChange = (selectedValue) => {
    setFilter(selectedValue);
  };

  const displayMessage = (msg, type = "success") => {
    if (type === "success") {
      toast.success(msg);
    } else if (type === "error") {
      toast.error(msg);
    } else {
      toast.info(msg);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this user? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      displayMessage("Deleting user...", "info");
      const response = await axios.delete(`${API_URL}/${userId}`);
      const data = response.data;

      if (data.success) {
        setUserDetails((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        displayMessage(data.message || "User deleted successfully!");
      } else {
        displayMessage(data.error || "Failed to delete user", "error");
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
      displayMessage(
        error.response?.data?.error || error.message || "Error deleting user",
        "error"
      );
    }
  };

  const sortedUsers = [...userDetails].sort((a, b) => {
    if (filter === "Newest First") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="space-y-7">
      <h1 className="text-4xl font-semibold">Registered User</h1>

      <div className="flex space-x-6">
        <Dropdown
          label="Filter By Registration"
          value={filter}
          options={registration}
          onChange={(e) => handleFilterChange(e.target.value)}
        />
      </div>

      <div>
        <UserTable headings={headings} users={sortedUsers} onDelete={handleDeleteUser} />
      </div>

      {/* Toastify container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Users;
