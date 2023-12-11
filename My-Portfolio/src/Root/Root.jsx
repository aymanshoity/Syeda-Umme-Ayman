import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Root = () => {
    return (
        <div className="bg-[#FFE4D6]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;