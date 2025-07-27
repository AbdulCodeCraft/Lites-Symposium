import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx"
import AboutPage from "../pages/AboutPage.jsx"
import NotFound from "../pages/NotFound.jsx"
import Coardinators from "../pages/Coardinator.jsx"
import EventPage from "../pages/EventPage.jsx";
import EventDetailsPage from "../pages/EventDetailsPage.jsx";

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="events" element={<EventPage/>}/>
            <Route path="events/:id" element={<EventDetailsPage/>}/>
            <Route path="/coardinators" element={<Coardinators/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
