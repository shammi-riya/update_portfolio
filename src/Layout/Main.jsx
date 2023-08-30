
import About from "../Components/About";
import Bannar from "../Components/Bannar";
import Contuct from "../Components/Contuct";
import Footer from "../Components/Footer";
import Skill from "../Components/Skill";
import Pojects from "../Components/pojects";
import Header from "../Page/Shared/Header";
import ScrollTop from "../Page/Shared/ScrollTop ";


const Main = () => {
    return (
        <div className="bg-[#212428] ">
            <Header></Header>
            <div className="max-w-7xl mx-auto">

                <Bannar></Bannar>
                <About></About>
                <Skill></Skill>


                <Pojects></Pojects>
                <Contuct></Contuct>

            </div>

            <Footer></Footer>
            <ScrollTop></ScrollTop>

        </div>
    );
};

export default Main;