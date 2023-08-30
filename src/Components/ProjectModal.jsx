import { AiOutlineClose } from 'react-icons/ai';
import { FaCode, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectModal = ({ project, onClose }) => {
    const { liveImgLink, projectName, techknology, features, githubClient,githubSurver, liveLink } = project || {};

    return (
        <div className="relative ">
            <div className='fixed top-24 bottom-5 h-[80vh] rounded-xl lg:h-[85vh] bg-gray-600 text-[#f4f5f6] left-0 right-0 w-full lg:px-0 px-5 flex items-center justify-center shadow-2xl z-50 lg:max-w-7xl mx-auto'>
                <div className="lg:max-w-5xl w-full h-[80vh] lg:h-[80vh] rounded overflow-hidden">
                    <div className='card-image-container h-[60%] overflow-hidden'>
                        <div className='card-image-scroll '>
                            <img className="w-full h-full shadow-lg rounded-2xl object-cover" src={liveImgLink} alt="Project" />
                        </div>
                    </div>
                    <div className='h-[40%] overflow-y-auto'>
                        <div className="px-6 py-4">
                            <h3 className="font-bold text-3xl mb-2 my-2">{projectName}</h3>

                            <div className='flex justify-center items-center'>
                                <div className='flex gap-3 mt-2'>
                                    <Link
                                        to={liveLink}
                                        href={liveLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='rounded-full text-xl font-bold bg-neutral-900 py-2 px-3.5 font-com  capitalize text-white shadow shadow-black/60'
                                    >
                                        Live Link <FaLink className='inline ml-1' />
                                    </Link>
                                    <Link
                                        href={githubClient}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='rounded-full bg-neutral-900 py-2 px-3.5 font-com  capitalize text-xl font-bold text-white shadow shadow-black/60'
                                    >
                                       client Code <FaCode className='inline ml-1' />
                                    </Link>
                                   {
                                    githubSurver && <Link
                                    href={githubSurver}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='rounded-full bg-neutral-900 py-2 px-3.5 font-com  capitalize text-xl font-bold text-white shadow shadow-black/60'
                                >
                                  surver  Code <FaCode className='inline ml-1' />
                                </Link>
                                   }
                                </div>
                            </div>
                            <div className="max-h-36 overflow-y-auto">
                                {features?.map((feature, index) => (
                                    <p key={index}>{feature}</p>
                                ))}
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {techknology.map((tech, index) => (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    className=' text-3xl font-bold absolute -right-2 -top-2 bg-gray-400 text-[#ff014f] p-3 rounded-3xl'
                    onClick={onClose}
                >
                    <AiOutlineClose />
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;
