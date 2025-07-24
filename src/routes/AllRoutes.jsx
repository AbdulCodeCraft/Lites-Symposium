import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx"
import AboutPage from "../pages/AboutPage.jsx"
import NotFound from "../pages/NotFound.jsx"

const AllRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
