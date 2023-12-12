import AboutMe from "./Contetnts/AboutMe";
import Banner from "./Contetnts/Banner";
import Education from "./Contetnts/Education";
import Footer from "./Contetnts/Footer";
import MySkill from "./Contetnts/MySkill";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkill></MySkill>
            <Education></Education>
            <Footer></Footer>
        </div>
    );
};

export default Home;