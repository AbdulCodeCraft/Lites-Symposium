import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar.jsx";
import AdminSideBar from "../components/AdminSideBar.jsx";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNavbar onMenuClick={() => setIsSidebarOpen(true)} />

      <div className="flex lg:space-x-5 lg:p-6">
        <AdminSideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="w-full lg:w-4/5 min-h-screen p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
