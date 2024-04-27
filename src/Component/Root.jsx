import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
          
            <Outlet></Outlet>
           
            <div className="">
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;