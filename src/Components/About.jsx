import Sectiontitle from "../Shared/Sectiontitle";

import animationData from '../../public/Lottiamination.json';
import Lottie from "react-lottie";
const About = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div id="about"
        className=" py-10">

            <Sectiontitle
                title='About Me'
            ></Sectiontitle>
            <div className="flex justify-between items-center flex-wrap gap-7 lg:flex-nowrap">
                <div className='lg:w-[30%] p-10 w-100'>
                    <Lottie options={defaultOptions} />
                    
                </div>

                <div className="lg:w-[70%] w-100 lg:px-0 px-5">
                    <p className="text-xl text-[#f4f5f6] ">I'm a FrontEnd developer. I have been working as a front-end developer over the last 1 years & Learning mern stack development from (January 1, 2023- To be continuing).  I am a passionate MERN Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. As a junior MERN Developer, I have a strong grasp of Stripe, JWT, Node.js, Express.js, MongoDB, and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Next.js, and Redux. By continuously expanding my skill set, I ensure I can deliver innovative solutions.. Thanks.</p>
                </div>
            </div>
        </div>
    );
};

export default About;