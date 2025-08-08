import { useState } from "react";
import CheckList from "../components/CheckList";
import Input from "../components/Input";
import Options from "../components/Options";
import Layout from "../layout/Layout";
import axios from "axios";

const food = ["", "Vegetarian", "Non-Vegetarian"];
const year = ["", "4th Year", "3rd Year", "2nd Year", "1st Year"];
const know = ["", "Friends", "College", "Instagram", "LinkedIn"];
const gender = ["", "Male", "Female"];
const technicalEvents = [
  "Paper Presentation",
  "Web Design",
  "Code Relay",
  "Code Debugging",
];
const nonTechnicalEvents = [
  "Paper Presentation",
  "Web Design",
  "Code Relay",
  "Code Debugging",
];

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    college: "",
    department: "",
    yearOfStudy: "",
    technicalEvents: [],
    nonTechnicalEvents: [],
    howDidYouKnow: "",
    foodPreferences: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
  const API_URL = "http://localhost:3000/api/register";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckListChange = (name, listValue) => {
    setFormData((prevData) => ({ ...prevData, [name]: listValue })); //eX: { technicalEvents: ["Code Debugging", "Web Design"] }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage({ type: "", text: "" });

    try {
      console.log(formData)
      const response = await axios.post(API_URL, formData);

      if (response.data.success) {
        setSubmitMessage({ type: "success", text: response.data.message });

        setFormData({
         
          fullName: "",
          email: "",
          mobileNumber: "",
          college: "",
          department: "",
          yearOfStudy: "",
          technicalEvents: [],
          nonTechnicalEvents: [],
          howDidYouKnow: "",
          foodPreferences: "",
          gender: "",
        });
      }
    } catch (error) {
      console.log(error)
      console.log(`Registration Failed ${error.response?.data}`);
      setSubmitMessage({ type: "error", text: "Error occured" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen text-white bg-black pt-17 px-3 md:pt-25 pb-6 md:pb-10 md:px-60">
        <div className="space-y-3 ">
          <h1 className="text-2xl md:text-5xl  font-semibold">Registration</h1>
          <p className="text-gray-400 text-sm ms:text-md">
            Register for Tech Symposium and participate in exciting technical
            and non-tecnical events.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            name="fullName"
            value={formData.fullName}
            placeholder="Enter your full name"
            label="Full Name"
            onChange={handleChange}
          />
          <Input
            name="email"
            value={formData.email}
            placeholder="Enter your e-mail Address"
            label="E-mail"
            onChange={handleChange}
          />
          <Input
            name="mobileNumber"
            value={formData.mobileNumber}
            placeholder="Enter your mobile number"
            label="Mobile Number"
            onChange={handleChange}
          />
          <Input
            name="college"
            value={formData.college}
            placeholder="Enter your college name"
            label="College"
            onChange={handleChange}
          />
          <Input
            name="department"
            value={formData.department}
            placeholder="Enter your department"
            label="Department"
            onChange={handleChange}
          />
          <Options
            label="Year of study"
            options={year}
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
          />
          <CheckList
            title="Technical Event"
            lists={technicalEvents}
            name="technicalEvents"
            onChange={handleCheckListChange}
            selectedValues={formData.technicalEvents}
          />
          <CheckList
            title="Non-Technical Event"
            lists={nonTechnicalEvents}
            name="nonTechnicalEvents"
            onChange={handleCheckListChange}
            selectedValues={formData.nonTechnicalEvents}
          />
          <Options
            label="How did you know about the event?"
            options={know}
            name="howDidYouKnow"
            value={formData.howDidYouKnow}
            onChange={handleChange}
          />
          <Options
            label="Food Preferences"
            options={food}
            name="foodPreferences"
            value={formData.foodPreferences}
            onChange={handleChange}
          />
          <Options
            label="Gender"
            options={gender}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            
          />
          <button
            type="submit"
            className="md:w-1/2 bg-blue-400 md:py-2  md:px-0 px-3  py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default RegisterPage;
