import Layout from "../layout/Layout";
import {
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      toast.success("Admin login successful! Redirecting...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.log(`Admin logged in ${user.email}`);
      navigator("/home");
      //route set pannanum
    } catch (error) {
      console.error(`Admin Login Error : ${error.code} ${error.message}`);
      let errorMessage = "Login failed. Please check your credentials.";
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "Invalid email or password.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format.";
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = "Too many login attempts. Please try again later.";
      }

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000, // Keep error messages visible a bit longer
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
    <Layout>
      <ToastContainer />
      <div className="min-h-screen  flex justify-center items-center bg-black text-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 justify-center items-center bg-gray-800 md:h-100 p-5 md:p-0 rounded-lg md:w-1/2 "
        >
          <h2 className="text-gray-200 text-2xl md:text-3xl font-semibold">
            Admin Login
          </h2>

          <input
            className="px-3 py-3 bg-gray-600 rounded-lg md:w-1/2"
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter E-mail"
            required
          />
          <input
            className="px-3 py-3 bg-gray-600 rounded-lg md:w-1/2"
            type="text"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button
            className="bg-blue-400 px-8 rounded-lg hover:bg-blue-500 py-2"
            disabled={loading}
          >
            {loading ? "Logging in...." : "Login"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AdminLogin;
