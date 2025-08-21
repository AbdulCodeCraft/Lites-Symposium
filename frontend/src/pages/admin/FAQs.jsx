import { Link } from "react-router-dom";
import FaqList from "../../components/FaqList";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader";
const FAQs = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:3000/api/faq";

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await axios.get(API_URL);
        const data = response.data;

        if (data.success) {
          const combined = [
            ...data.registration,
            ...data.events,
            ...data.food_and_breverages,
          ];
          setFaqs(combined);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
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
        setFaqs((prevUsers) => prevUsers.filter((user) => user._id !== userId));
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
 

  return (
    <div>
      {loading && (
        <Loader/>
      )}

      {!loading && (
        <div className="">
          <ToastContainer position="top-right" autoClose={3000} />
          <div className="flex justify-between items-center space-y-7 p-2">
            <h1 className="lg:text-4xl text-2xl font-semibold">FAQ Management</h1>
            <Link
              to={"/admin/add-faq"}
              className="bg-gray-900 lg:px-2 lg:py-2 py-1 px-1 lg:text-md text-sm text-center rounded-md"
            >
              Add FAQ
            </Link>
          </div>

          <div className="lg:space-y-5 p-2">
            <h1 className="lg:text-2xl text-xl pb-5 font-semibold">Existing FAQ</h1>
            <FaqList onDelete={handleDeleteUser} faqs={faqs} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQs;
