import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar.jsx";
import AdminSideBar from "../components/AdminSideBar.jsx";

const AdminDashboard = () => {
  return (
    <div className=" min-h-screen bg-black text-white">
      <AdminNavbar />
      <div className="flex space-x-5 p-6">
        <div className=" w-1/5 min-h-screen">
        <AdminSideBar/>
        </div>
        <div className="bg-blue-500 w-4/5 min-h-screen">
        <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
