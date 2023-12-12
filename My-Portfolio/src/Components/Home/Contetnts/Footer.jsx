import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#B0578D] text-[#FFE4D6]">
            <aside>
                <p className=" text-xl font-bold">
                    Syeda Umme Ayman <br />Your reliable Web Service Expert
                </p>
                <p className="text-lg">Find Me On</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.linkedin.com/in/syeda-umme-ayman-shoity-742aa5160/'><FaLinkedinIn className="w-10 h-10" /></Link>
                    <Link to='https://github.com/aymanshoity'><FaGithub className="w-10 h-10" /></Link>
                </div>
            </nav>
        </footer>

    );
};

export default Footer;