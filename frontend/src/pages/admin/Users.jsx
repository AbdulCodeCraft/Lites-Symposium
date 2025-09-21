import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../../components/Dropdown.jsx";
import Loader from "../../components/Loader.jsx";
import UserTable from "../../components/UserTable.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registration = ["Newest First", "Oldest First"];
const headings = ["Username", "E-mail", "Registration Date", "Actions"];

const events = [
  "All Events",
  "Byte Talks (Paper Presentation)",
  "RuntimeFixer (HackerRank Coding)",
  "TechWhiz (Technical Quiz)",
  "WebWeavers (Web Design)",
  "Beat the Floor (Solo Dance)",
  "Voice of Both Sides (Plus and Minus)",
  "SnapRecall (Photographic Memory)",
  "Link-Up (Connection)",
];

const Users = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(registration[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [eventFilter, setEventFilter] = useState(events[0]);

  const API_URL = `${import.meta.env.VITE_APP_BACKEND_URL}/api/user`;

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEventFilterChange = (selectedValue) => {
    setEventFilter(selectedValue);
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

  const filteredUsers = sortedUsers.filter((user) => {
    const isNameMatch = user.fullName
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    const isEventMatch =
      eventFilter === "All Events" ||
      (user.technicalEvents && user.technicalEvents.includes(eventFilter)) ||
      (user.nonTechnicalEvents && user.nonTechnicalEvents.includes(eventFilter));

    return isNameMatch && isEventMatch;
  });

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <div className="lg:space-y-7 space-y-5 p-2">
          <h1 className="text-4xl font-semibold">Registered User</h1>
          
          {/* Display the total count of registered participants */}
          <div className="text-lg font-medium text-gray-400">
            Total Participants: <span className="text-white">{userDetails.length}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-6 space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <Dropdown
                label="Filter By Registration"
                value={filter}
                options={registration}
                onChange={(e) => handleFilterChange(e.target.value)}
              />
              <Dropdown
                label="Filter By Event"
                value={eventFilter}
                options={events}
                onChange={(e) => handleEventFilterChange(e.target.value)}
              />
            </div>
            
            <div className="w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-auto"
              />
            </div>
          </div>

          <div>
            <UserTable
              headings={headings}
              users={filteredUsers}
              onDelete={handleDeleteUser}
            />
          </div>

          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      )}
    </div>
  );
};

export default Users;