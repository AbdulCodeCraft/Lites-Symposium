import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AllRoutes from './routes/AllRoutes.jsx'

createRoot(document.getElementById('root')).render(

   <AllRoutes>
     <App/>
   </AllRoutes>

)
