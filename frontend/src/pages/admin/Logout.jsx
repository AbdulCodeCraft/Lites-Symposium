import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase.js";
import { ToastContainer,toast } from "react-toastify";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      toast.success("Logged out Successful");
    } catch (error) {
      console.log(`Logout Error ${error.message}`);
      toast.error("Failed to Logout")
    }finally{
      setLoading(false)
    }
  };
  return <div>
    <ToastContainer/>
    <h1 className="text-center text-3xl">Come Back Again!!!</h1>
    <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer" onClick={handleLogout}>
      Logout
    </button>
  </div>;
};

export default Logout;
