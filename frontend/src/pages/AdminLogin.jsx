import Layout from "../layout/Layout";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../Firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/admin", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Admin login successful! Redirecting...", {
        position: "top-center",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/admin", { replace: true });
      }, 1000);
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
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <div className="min-h-screen flex justify-center items-center bg-black text-white px-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5 bg-gray-900 w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-700"
        >
          <h2 className="text-gray-100 text-3xl font-bold text-center mb-4">
            Admin Login
          </h2>

          {/* Email Input */}
          <input
            className="px-4 py-3 bg-gray-800 rounded-lg w-full border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

       
          <div className="relative w-full">
            <input
              className="px-4 py-3 bg-gray-800 rounded-lg w-full border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

     
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AdminLogin;
