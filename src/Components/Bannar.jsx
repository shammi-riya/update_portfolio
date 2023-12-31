import resumi from '../assets/Resumi of sahmmi.pdf'

import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Bannar = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = resumi;
    downloadLink.download = 'my_resume.pdf';
    downloadLink.click();
  };


  return (
    <div className="-z-30 mt-10 flex justify-center items-center h-[89vh] py-4">
      <div className='lg:flex  text-center gap-10 justify-center items-center md:px-10 px-5 lg:px-20'>
        <div className="text-[#f4f5f6] space-y-2  w-100">
          <h2 className="text-xl font-bold">Welcome To My Word</h2>
          <h4 className="lg:text-7xl font-bold md:text-4xl">Hi,<span className='text-[#ff014f]'> I am  Shammi Akter</span></h4>
          {
            <TypeAnimation
              sequence={[

                'I am Frontend Developer',
                1000,
                'I am Junior Fullstack Developer',
                1000,
                'I am Junior MERN Developer',
                1000,

              ]}
              speed={50}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />

          }
          <p className='text-justify'></p>
          <div className='flex justify-center items-center'>
            <div>
              <div className='flex gap-2 py-3'>
                <button className="py-3 hover:bg-[#f4f5f6] duration-200 hover:text-[#ff014f] font-semibold text-xl rounded-3xl px-8 border-2 border-white bg-transparent">Hire me</button>
                <button onClick={handleDownload}
                className="py-3 hover:bg-[#f4f5f6] duration-200 hover:text-[#ff014f] font-semibold text-xl rounded-3xl px-8 border-2 border-white bg-transparent">Dowenload Resumi</button>
              </div>
              <div className='flex justify-center items-center'>
                <div>
                  <h4 className='text-xl py-3'>Find With Me</h4>

                  <div className='flex gap-5 m-2 '>

                    <button className='p-4 text-xl duration-200 font-bold bg-[#212428ce] rounded-md shadow-2xl hover:bg-slate-300 hover:scale-110 transform hover:rotate-3'>
                      <Link to='https://www.facebook.com/profile.php?id=100069790200597'> <FiFacebook /></Link>
                    </button>
                    <button className='p-4 text-xl duration-200 font-bold bg-[#212428] rounded-md shadow-2xl hover:bg-slate-300 hover:scale-105 transform hover:rotate-3'>
                      <Link to='https://www.linkedin.com/in/shammi-riya-b40525242/'> <FiLinkedin /></Link>
                    </button>
                    <button className='p-4 text-xl duration-200 font-bold bg-[#212428] rounded-md shadow-2xl hover:bg-slate-300 hover:scale-100 hover:rotate-6'>
                      <Link to='https://github.com/shammi-riya'> <FiGithub /></Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Bannar;
