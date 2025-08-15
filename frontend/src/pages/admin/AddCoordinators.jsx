import { useState } from "react";
import Input from "../../components/Input.jsx";
import Options from "../../components/Options.jsx";
import { Link } from "react-router-dom";

const events = ["Overall", "Techical Events", "Non-Technical Events"];
const AddCoordinators = () => {
  const [formData, setFormData] = useState({
    email:"",
    contactNumber:"",
    eventName: "",
    types:""
  });
  const handleChange = () => {};
  const handleSubmit = async () => {
    const API_URL = ""
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold">Add Coordinators</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          value={formData.email}
          placeholder="Enter your e-mail Address"
          label="E-mail"
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
          name="yearOfStudy"
          value={formData.types}
          onChange={handleChange}
        />
      </form>
      <div className="space-x-6 ">
        <button className="bg-blue-500 px-4 py-2 rounded-md">Submit</button>
        <Link
          to={"/admin/coordinators"}
          className="bg-gray-800 px-4 py-2 rounded-md"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default AddCoordinators;
