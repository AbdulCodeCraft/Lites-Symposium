import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input.jsx";
import Options from "../../components/Options.jsx";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const events = ["overall", "technical", "non-technical"];

const AddCoordinators = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    eventName: "",
    type: "",
  });
  const [loading, setLoading] = useState(false);

  const CREATE_API = "http://localhost:3000/api/coordinators/create";
  const EDIT_API = `http://localhost:3000/api/coordinators/${id}`;

  useEffect(() => {
    if (id) {
      const fetchCoordinator = async () => {
        try {
          const res = await axios.get(EDIT_API);
          if (res.data.success) {
            setFormData(res.data.coordinator);
          }
        } catch (err) {
          console.error("Error fetching coordinator:", err.message);
        }
      };
      fetchCoordinator();
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
        setTimeout(() => navigate("/admin/coordinators"), 1500); 
      } else {
        toast.error(response.data.error, { position: "top-center" });
      }
    } catch (error) {
      console.error("Failed:", error.response?.data);
      toast.error(error.response?.data?.error , {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <h1 className="text-4xl font-semibold">
          {id ? "Edit Coordinator" : "Add Coordinator"}
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          value={formData.name}
          placeholder="Enter your Name"
          label="Name"
          onChange={handleChange}
        />
        <Input
          name="contactNumber"
          value={formData.contactNumber}
          placeholder="Enter your Contact Number"
          label="Contact Number"
          onChange={handleChange}
        />
        <Input
          name="eventName"
          value={formData.eventName}
          placeholder="Enter Event Name"
          label="Event Name"
          onChange={handleChange}
        />

        <Options
          label="Event Types"
          options={events}
          name="type"
          value={formData.type}
          onChange={handleChange}
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
            to={"/admin/coordinators"}
            className="bg-gray-800 px-4 py-2 rounded-md"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddCoordinators;
