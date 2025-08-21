import { Link } from "react-router-dom";
import CoordinatorTable from "../../components/CoordinatorTable.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import { ToastContainer, toast } from "react-toastify";

const headings = ["Name", "Contact Number", "Event ", "Actions"];
const Coordinator = () => {
  const [coordinatorDetails, setCoordinatorDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `${import.meta.env.VITE_APP_BACKEND_URL}/api/coordinators/`;

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data.success) {
          const combined = [
            ...data.overall,
            ...data.technicalEvents,
            ...data.nonTechnicalEvents,
          ];
          setCoordinatorDetails(combined);
        }
      } catch (error) {
        console.error("Error while fetching coordinators: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoordinators();
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
        setCoordinatorDetails((prevUsers) =>
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

  console.log(coordinatorDetails);

  return (
    <div className="">
      {loading && <Loader />}

      {!loading && (
        <div>
          <div className="flex justify-between items-center lg:space-y-7 space-y-4 p-2">
            <h1 className="lg:text-4xl text-2xl font-semibold">
              Coordinator Management
            </h1>
            <Link
              to={"/admin/add-coordinators"}
              className="bg-gray-900 lg:px-2 lg:py-2 py-1 px-1 lg:text-md text-sm text-center rounded-md"
            >
              Add Coordinators
            </Link>
          </div>
          <ToastContainer position="top-right" autoClose={3000} />

          <CoordinatorTable
            headings={headings}
            datas={coordinatorDetails}
            onDelete={handleDeleteUser}
          />
        </div>
      )}
    </div>
  );
};

export default Coordinator;
