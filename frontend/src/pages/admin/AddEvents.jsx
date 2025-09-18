import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input.jsx";
import Options from "../../components/Options.jsx";
import TextArea from "../../components/TextArea.jsx";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const events = ["technical", "nonTechnical"];

const AddEvents = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
    eventName: "",
    type: "",
    eventDescription: "",
    fullDescription: "",
    rules: [],
  });
  const [loading, setLoading] = useState(false);



  
  const CREATE_API =`${import.meta.env.VITE_APP_BACKEND_URL}/api/events`;
  const EDIT_API = `${import.meta.env.VITE_APP_BACKEND_URL}/api/events/${id}`;

  useEffect(() => {
    if (id) {
      const fetchEvents = async () => {
        try {
          const res = await axios.get(EDIT_API);
          if (res.data.success) {
            setFormData(res.data.event);
          }
        } catch (err) {
          console.error("Error fetching coordinator:", err.message);
        }
      };
      fetchEvents();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (id) {
        response = await axios.put(EDIT_API, formData);
      } else {
        response = await axios.post(CREATE_API, formData);
      }

      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
        });
        setTimeout(() => navigate("/admin/events"), 1500);
      } else {
        toast.error(response.data.error, { position: "top-center" });
      }
    } catch (error) {
      console.error("Failed:", error.response?.data);
      toast.error(error.response?.data?.error, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="">
        <h1 className="text-4xl font-semibold">
          {id ? "Edit Event" : "Add Event"}
        </h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Event Name"
          placeholder="Enter the Event Name"
          value={formData.eventName}
          onChange={handleChange}
          name="eventName"
        />
        <Input
          label="Image URL"
          placeholder="Enter the Image Address"
          value={formData.image}
          onChange={handleChange}
          name="image"
        />
        <Options
          label="Event type"
          options={events}
          value={formData.type}
          onChange={handleChange}
          name="type"
        />
        <TextArea
          label="Short Description"
          placeholder="Enter Short Description of the Event"
          value={formData.eventDescription}
          name="eventDescription"
          onChange={handleChange}
        />
        <TextArea
          label="Full Description"
          placeholder="Enter Full Description of the Event"
          value={formData.fullDescription}
          name="fullDescription"
          onChange={handleChange}
        />
        <TextArea
          label="Rules"
          placeholder="Enter rules separated by | Symbol"
          value={formData.rules.join(", ")}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              rules: e.target.value.split("|").map((rule) => rule.trim()),
            }))
          }
          name="rules"
        />

        <div className="space-x-6 ">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Saving..." : id ? "Update" : "Submit"}
          </button>
          <Link
            to={"/admin/events"}
            className="bg-gray-800 px-4 py-2 rounded-md"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddEvents;
