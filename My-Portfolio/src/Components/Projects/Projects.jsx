import SharedHeading from "../SharedComponent/SharedHeading";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";


const Projects = () => {
    return (
        <div className="lg:w-[1280px] mx-auto py-40">
            <SharedHeading heading={'My Projects'}></SharedHeading>
            <Project1></Project1>
            <Project2></Project2>
            <Project3></Project3>
        </div>
    );
};

export default Projects;