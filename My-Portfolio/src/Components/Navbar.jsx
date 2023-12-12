import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlinks=<>
        <li> <NavLink to='/' className={({isActive})=>(isActive? ' text-2xl font-bold  text-[#FACBEA] mr-4' : ' text-2xl  font-bold text-[#FFE4D6]  mr-4')}>Home</NavLink> </li>
        <li> <NavLink to='/about' className={({isActive})=>(isActive? ' text-2xl font-bold  text-[#FACBEA] mr-4' : ' text-2xl  font-bold text-[#FFE4D6]  mr-4')}>About Me</NavLink> </li>
        <li> <NavLink to='/projects' className={({isActive})=>(isActive? ' text-2xl font-bold  text-[#FACBEA] mr-4' : ' text-2xl  font-bold text-[#FFE4D6]  mr-4')}>Projects</NavLink> </li>
        <li> <NavLink to='https://drive.google.com/file/d/1t4HnmHrXDG0NAL9SmH_lxkzs2kYY2cuy/view?usp=sharing' className={({isActive})=>(isActive? ' text-2xl font-bold  text-[#FACBEA] mr-4' : ' text-2xl  font-bold text-[#FFE4D6]  mr-4')}>Download CV</NavLink> </li>
        <li> <NavLink to='/contact' className={({isActive})=>(isActive? ' text-2xl font-bold  text-[#FACBEA] mr-4' : ' text-2xl  font-bold text-[#FFE4D6]  mr-4')}>Contact</NavLink> </li>
    </>
    return (
        <div className="navbar bg-[#B0578D] p-4 fixed z-10 bg-opacity-80 font">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFE4D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold text-[#FFE4D6] font">Syeda Umme Ayman</a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;