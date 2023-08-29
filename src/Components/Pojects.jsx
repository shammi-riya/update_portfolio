
import { Link } from 'react-router-dom';
import Sectiontitle from '../Shared/Sectiontitle';
import { FaCode, FaLink } from 'react-icons/fa';

const Projects = () => {
  const projectsItem = [
    {
      id: 1,
      projectName: 'shopwish',
      pojectType: 'e-comarce',
      liveImgLink: 'https://i.ibb.co/KyWjxy7/shopwish.png',
      liveLink: 'https://e-comarce-2d571.web.app/'
    },
    {
      id: 2,
      projectName: 'Creative Hero',
      pojectType: 'Learning Platfrom',
      liveImgLink: 'https://i.ibb.co/XJShz2q/Vite-React-2.png',
      liveLink: 'https://creative-hero-53a1a.web.app/'
    },
    {
      id: 3,
      projectName: 'Bestro Boss Restaurant',
      pojectType: 'Resturent',
      liveImgLink: 'https://i.ibb.co/1q4q34f/Bestro-Boss-1.png',
      liveLink: 'https://bestro-boss.web.app'
    },
  ];

  return (

    <div className='text-center text-gray-700'>
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
              <div className='flex gap-3 mt-2'>
                <Link
                  to={project.liveLink}
                  href={project?.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'
                >
                  Live Link <FaLink className='inline ml-1' />
                </Link>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60'
                >
                  Code <FaCode className='inline ml-1' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
