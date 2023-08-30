import {TailSpin} from  'react-loader-spinner'
import { useEffect, useState } from "react";
import About from "../Components/About";
import Bannar from "../Components/Bannar";
import Contuct from "../Components/Contuct";
import Footer from "../Components/Footer";
import Skill from "../Components/Skill";
import Pojects from "../Components/pojects";
import Header from "../Page/Shared/Header";
import ScrollTop from "../Page/Shared/ScrollTop ";


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);


        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-[#212428] ">
            <div>
                {
                    isLoading ? <div className="h-[100vh] flex justify-center items-center">
                        <TailSpin
                            height="80"
                            width="80"
                            color="#ff014f"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div> : <>
                        <Header></Header>
                        <div className="max-w-7xl mx-auto">

                            <Bannar></Bannar>
                            <About></About>
                            <Skill></Skill>


                            <Pojects></Pojects>
                            <Contuct></Contuct>

                        </div>

                        <Footer></Footer>
                        <ScrollTop></ScrollTop></>
                }
            </div>

        </div>
    );
};

export default Main;