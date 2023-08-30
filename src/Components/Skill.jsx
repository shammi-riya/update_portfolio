import Sectiontitle from "../Shared/Sectiontitle";
import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
const Skill = () => {
    return (
        <div id='skill'
        className=" py-28">
            <div>
                <Sectiontitle
                    subtitle='FEATURE'
                    title='What I Know'
                >

                </Sectiontitle>
            </div>

           <div className="flex lg:px-0 px-5 justify-between items-center flex-wrap py-10">
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><FaHtml5></FaHtml5></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><FaCss3></FaCss3></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><FaBootstrap></FaBootstrap></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><SiTailwindcss></SiTailwindcss></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><DiJavascript1></DiJavascript1></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><FaReact></FaReact></div>
                </div>
            </div>
          
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                

                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><SiFirebase></SiFirebase></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                

                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><FaNodeJs></FaNodeJs></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                

                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><SiMongodb></SiMongodb></div>
                </div>
            </div>
           <div className="h-24 w-24 relative cursor-pointer mb-5">
                

                <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
                    <div className="h-full text-3xl font-bold w-full flex justify-center items-center bg-white rounded-lg shadow-2xl"><SiExpress></SiExpress></div>
                </div>
            </div>









           




           </div>

        </div>
    );
};

export default Skill;