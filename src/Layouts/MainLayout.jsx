import { Outlet } from "react-router-dom";
import Navbar from "../Shareds/Navbar";
import Footer from "../Shareds/Footer";
const MainLayout = () => {
    return (
        <div>
            <Navbar/>
              <Outlet></Outlet>
              <Footer/>
        </div>
    );
};

export default MainLayout;