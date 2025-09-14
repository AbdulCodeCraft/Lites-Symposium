import { useState } from "react";
import CheckList from "../components/CheckList";
import Input from "../components/Input";
import Options from "../components/Options";
import Layout from "../layout/Layout";
import axios from "axios";

const food = ["Vegetarian", "Non-Vegetarian"];
const year = ["4th Year", "3rd Year", "2nd Year", "1st Year"];
const know = ["Friends", "College", "Instagram", "LinkedIn"];
const gender = ["Male", "Female"];
const technicalEvents = [
  "Byte Talks (Paper Presentation)",
  "RuntimeFixer (HackerRank Coding)",
  "TechWhiz (Technical Quiz)",
  "WebWeavers (Web Design)",
];
const nonTechnicalEvents = [
  "Beat the Floor (Solo Dance)",
  "Voice of Both Sides (Plus and Minus)",
  "SnapRecall (Photographic Memory)",
  "Link-Up (Connection)",
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
  const [showModal, setShowModal] = useState(false);

  const API_URL = `${import.meta.env.VITE_APP_BACKEND_URL}/api/register/`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckListChange = (name, listValue) => {
    setFormData((prevData) => ({ ...prevData, [name]: listValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(API_URL, formData);

      if (response.data.success) {
        setShowModal(true); // ✅ show modal instead of toast

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
      } else {
        alert(response.data.error || "Registration failed."); // fallback
      }
    } catch (error) {
      console.error("Registration Failed:", error.response?.data || error.message);
      alert("An unexpected error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen text-white bg-black pt-17 px-3 md:pt-25 pb-6 md:pb-10 md:px-60">
        <div className="space-y-3 ">
          <h1 className="text-2xl md:text-5xl font-semibold">Registration</h1>
          <p className="text-gray-400 text-sm ms:text-md">
            Register for Tech Symposium and participate in exciting technical
            and non-technical events.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input name="fullName" value={formData.fullName} placeholder="Enter your full name" label="Full Name" onChange={handleChange} />
          <Input name="email" value={formData.email} placeholder="Enter your e-mail Address" label="E-mail" onChange={handleChange} />
          <Input name="mobileNumber" value={formData.mobileNumber} placeholder="Enter your mobile number" label="Mobile Number" onChange={handleChange} />
          <Input name="college" value={formData.college} placeholder="Enter your college name" label="College" onChange={handleChange} />
          <Input name="department" value={formData.department} placeholder="Enter your department" label="Department" onChange={handleChange} />

          <Options label="Year of study" options={year} name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} />

          <CheckList title="Technical Event" lists={technicalEvents} name="technicalEvents" onChange={handleCheckListChange} selectedValues={formData.technicalEvents} />
          <CheckList title="Non-Technical Event" lists={nonTechnicalEvents} name="nonTechnicalEvents" onChange={handleCheckListChange} selectedValues={formData.nonTechnicalEvents} />

          <Options label="How did you know about the event?" options={know} name="howDidYouKnow" value={formData.howDidYouKnow} onChange={handleChange} />
          <Options label="Food Preferences" options={food} name="foodPreferences" value={formData.foodPreferences} onChange={handleChange} />
          <Options label="Gender" options={gender} name="gender" value={formData.gender} onChange={handleChange} />

          <button
            type="submit"
            className="md:w-1/2 bg-blue-400 md:py-2 md:px-0 px-3 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>

      {/* ✅ Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg w-96 text-center">
            <h2 className="text-2xl font-bold mb-3">🎉 Thank You!</h2>
            <p className="mb-4">
              Thank you for registering! <br />
              For further details, join our WhatsApp group.
            </p>
            {/* Later you will replace # with actual WhatsApp link */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mb-3"
            >
              Join WhatsApp Group
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default RegisterPage;
