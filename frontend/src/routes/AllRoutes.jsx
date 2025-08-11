import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import Coardinators from "../pages/Coardinator.jsx";
import EventPage from "../pages/EventPage.jsx";
import EventDetailsPage from "../pages/EventDetailsPage.jsx";
import FaqPage from "../pages/FaqPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
// import AdminDashboard from "../pages/AdminDashboard.jsx";
import AdminLayout from "../layout/AdminLayout.jsx";

//below imports all belong to admin page
import Users from "../pages/admin/Users.jsx";
import Coordinator from "../pages/admin/Coordinator.jsx";
import Events from "../pages/admin/Events.jsx";
import FAQs from "../pages/admin/FAQs.jsx";
import Logout from "../pages/admin/Logout.jsx";
import ProtectRoutes from "./ProtectRoutes.jsx";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="events" element={<EventPage />} />
        <Route path="events/:id" element={<EventDetailsPage />} />
        <Route path="/coardinators" element={<Coardinators />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Page Routes */}

        <Route path="/admin" element={<ProtectRoutes />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Users />} />
            <Route path="users" element={<Users />} />
            <Route path="coordinators" element={<Coordinator />} />
            <Route path="events" element={<Events />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
