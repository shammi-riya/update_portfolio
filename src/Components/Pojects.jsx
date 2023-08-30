
import { Link } from 'react-router-dom';
import Sectiontitle from '../Shared/Sectiontitle';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
// import { FaCode, FaLink } from 'react-icons/fa';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsItem = [
    {
      id: 1,
      projectName: 'shopwish',
      pojectType: 'e-comarce',
      techknology: ['Bootstrap','Css','react js', 'matarial ui','mongodb', 'express js', 'firebase', 'axios js','transtrack-quiry'],
      features: [
        'Using MERN Stack Technology',
        'Authentication with Firebase, email verification, JWT Token.transtrack-quiry for effeciant data fatching',
        'Users can add Product to the cart, remove from the cart see added product, increase and decrease product in the cart, send messages'
      ],  
      githubClient: 'https://github.com/shammi-riya/shopwish_client',
      githubSurver: 'https://github.com/shammi-riya/shopwish-surver',
      liveImgLink: 'https://i.ibb.co/bP5fs2N/shopwish-1.png',
      liveLink: 'https://e-comarce-2d571.web.app/'

      
    },
    {
      id: 2,
      projectName: 'Creative Hero',
      pojectType: 'Learning Platfrom',
      techknology: ['tailwind', 'daisy ui', 'strie js', 'mern' ,'firebase', 'axios js','swiper js'],
      features: [
        'Streamlined Class Management: Instructors can easily add classes, and upon admin approval, students  can enroll and select their preferred classes, ensuring a smooth learning experience'
        ,
        'Tailored Dashboards: Enjoy a personalized experience with separate dashboards for users, students, instructors, and administrators. Instructors can effortlessly add classes, while the authority to approve .',
        'User Role Management: Admins can efficiently manage user roles, promoting users to admin or instructor status as needed. This ensures a well-organized and secure platform.'
        ,
        
      ],
      githubClient: 'https://github.com/shammi-riya/creative-hero-client',
      githubSurver: 'https://github.com/shammi-riya/craetive-hero-surver',
      liveImgLink: 'https://i.ibb.co/XJShz2q/Vite-React-2.png',
      liveLink: 'https://creative-hero-53a1a.web.app/'
    },
    {
      id: 3,
      projectName: 'Bestro Boss Restaurant',
      pojectType: 'Resturent',
      techknology: ['tailwind',  'strie js', 'mern', 'firebase', 'react-simple-captcha','react wassam component'],
      features: [
        'Admin can add food, update food, delete food, see booked services and update status, add admin',
        'Authentication with firebase, email verification, JWT Token',
        'users can order food after login and pement with stripe'
      ],

      githubClient: 'https://github.com/shammi-riya/besteu-boss-resturent',
      githubSurver: 'https://github.com/shammi-riya/besteu-boss-resturent',
      liveImgLink: 'https://i.ibb.co/1q4q34f/Bestro-Boss-1.png',
      liveLink: 'https://bestro-boss.web.app'

    },
    {
      id: 5,
      pojectName: 'g3 Architecture',
      techknology: ['html', 'css', 'fully Responsive', 'media query', 'css Animation'],
      features: [
        'Figma to html'
      ],
      githubClient: 'https://github.com/shammi-riya',
      liveImgLink: 'https://i.ibb.co/dkXfPKY/g3-architecture.png',
      liveLink: 'https://shammi-riya.github.io/architec-one/'
    },
    {
      id: 6,
      pojectName: 'Ligel Slution',
      techknology: ['html', 'bootstrap', 'custom animation', 'media query'],
      features: [
        'PHD to html'
      ],
      githubClient: 'https://github.com/shammi-riya',

      liveImgLink: 'https://i.ibb.co/HhvVmQj/ligel-solutation-1.png',
      liveLink: 'https://splendid-moonbeam-f4e958.netlify.app/',

    },
   
  ];

  return (

    <div id='pojects'
      className='text-center text-gray-700'>
      <Sectiontitle subtitle='Visit My Work' title='My Latest Pojects' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-0 px-5 py-10  '>
        {projectsItem.map((project) => (
          <div
            key={project.id}
            className='group relative cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'
          >
            <div className='h-[600px]'>
              <img
                className='h-full overflow-y-hidden w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
                src={project?.liveImgLink}
                alt=''
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
            <div className='absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0'>
              <h1 className='font-dmserif text-3xl font-bold text-white'>
                {project.projectName}
              </h1>
             

              <div>
                <button  onClick={() => {
                  setIsModalOpen(true)
                  setSelectedProject(project)
                }}
                className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-3 font-bold'>View Details</button>
              </div>
            </div>
          </div>

          

          
        ))}
      </div>

      <div >
      {isModalOpen && (
    <ProjectModal
      project={selectedProject} 
      onClose={() => {
        setSelectedProject(null); 
        setIsModalOpen(false);
      }}
    />
  )}
      </div>
    </div>
  );
};

export default Projects;
