
import About from "../Components/About";
import Bannar from "../Components/Bannar";
import Contuct from "../Components/Contuct";
import Footer from "../Components/Footer";
import Skill from "../Components/Skill";
import Pojects from "../Components/pojects";
import Header from "../Page/Shared/Header";


const Main = () => {
    return (
        <div className="bg-[#c6d2da] ">
            <Header></Header>
            <div className="max-w-7xl mx-auto">

                <Bannar></Bannar>
                <About></About>
                <Skill></Skill>


                <Pojects></Pojects>
                <Contuct></Contuct>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;