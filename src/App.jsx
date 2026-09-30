import { createBrowserRouter, RouterProvider, NavLink, Link, Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/navber";
import './App.css'
function App() {
  <>

   <div className="Nav">
     <Navbar/>
    </div> 

    <div className="mainsection">
      <Hero/>
    </div>
    
     </>
}
export default App;
