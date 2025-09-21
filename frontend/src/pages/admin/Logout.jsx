import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase.js";
import { ToastContainer, toast } from "react-toastify";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      toast.success("Logged out successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/login", { replace: true }); // Redirect to login page
    } catch (error) {
      console.log(`Logout Error ${error.message}`);
      toast.error("Failed to Logout", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <ToastContainer />
      <div className="border border-blue-500 rounded-2xl shadow-lg p-10 flex flex-col items-center space-y-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-500 text-center">
          Come Back Soon!
        </h1>
        <p className="text-gray-700 text-center">
         Click Below to Logout from the Admin Panel.
        </p>
        <button
          onClick={handleLogout}
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default Logout;
