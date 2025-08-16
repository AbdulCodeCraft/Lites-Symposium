import { useState } from "react";
import Input from "../../components/Input.jsx";
import Options from "../../components/Options.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const events = ["overall", "technical", "non-technical"];
const AddCoordinators = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    eventName: "",
    type: "",
    role:""
  });
  const [loading, setLoading] = useState(false);
  const API_URL = "http://localhost:3000/api/coordinators/create";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(API_URL, formData);
      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({ name: "", contactNumber: "", eventName: "", type: "" ,role:""});
      } else {
        toast.error(response.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(
        `Registration Failed:`,
        error.response?.data || error.message
      );

      const errorMessage =
        error.response?.data?.error ||
        "An unexpected error occurred during registration.";

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <h1 className="text-4xl font-semibold">Add Coordinators</h1>
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
          <button className="bg-blue-500 px-4 py-2 rounded-md">Submit</button>
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
