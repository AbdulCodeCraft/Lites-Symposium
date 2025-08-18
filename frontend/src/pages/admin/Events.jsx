import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import EventTable from "../../components/EventTable";
import { ToastContainer, toast } from "react-toastify";

const headings = ["Event Name", "Description", "Types", "Actions"];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/events";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data.success) {
          const combined = [
            ...data.technicalEvents,
            ...data.nonTechnicalEvents,
          ];
          setEvents(combined);
        }
      } catch (error) {
        console.error("Error while fetching coordinators: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

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
        setEvents((prevUsers) =>
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

  if (loading) {
    return <p>Loading users...</p>;
  }
  

  return (
    <div className="space-y-7">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Event Management</h1>
        <Link
          to={"/admin/events/add-event"}
          className="bg-gray-900 px-2 py-2 rounded-md"
        >
          Add Event
        </Link>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />

      <div>
        <EventTable
          events={events}
          onDelete={handleDeleteUser}
          headings={headings}
        />
      </div>
    </div>
  );
};

export default Events;
