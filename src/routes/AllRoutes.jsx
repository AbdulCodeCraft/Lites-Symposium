import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "../pages/home/HomePage.jsx"
import AboutPage from "../pages/about/AboutPage.jsx"
import NotFound from "../pages/notFound/NotFound.jsx"

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
