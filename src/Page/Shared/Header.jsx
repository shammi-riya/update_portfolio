import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolling?" fixed transition-all top-0 duration-200 left-0 right-0 w-100 z-50 bg-white shadow-xl text-gray-800": ''}`}>
      <style>
        {`@media only screen and (min-width: 768px) {
          .parent:hover .child {
            opacity: 1;
            height: auto;
            overflow: none;
            transform: translateY(0);
          }
          .child {
            opacity: 0;
            height: 0;
            overflow: hidden;
            transform: translateY(-10%);
            transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
          }
        }`}
      </style>
      <nav className='flex lg:px-12 py-4 px-4 shadow-lg items-center relative  z-40'>
        <div className={`${scrolling? 'text-red-600':' text-white'} font-bold  md:py-0 text-4xl`}>{'<'}Shammi{'/>'}</div>
        <ul className={`md:px-2 ${scrolling? 'text-red-600' : 'text-white '}  font-semibold lg:bg-transparent  bg-white  text-gray-800 lg:shadow-none shadow-sm text-xl ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 ${open ? 'block' : 'hidden md:block'}`}>
          <li>
            <Link href="#" className="flex md:inline-flex rounded-md p-3 px-5 items-center hover:bg-gray-50 hover:text-red-600">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex md:inline-flex rounded-md p-3 px-5  items-center hover:bg-gray-50 hover:text-red-600">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex md:inline-flex rounded-md p-3 px-5  items-center hover:bg-gray-50 hover:text-red-600">
              <span>Skill</span>
            </Link>
          </li>
        </ul>
        <div onClick={handleToggle} className="ml-auto md:hidden text-red-600 font-semibold text-3xl cursor-pointer">
          {
            open?<AiOutlineClose></AiOutlineClose>:<FiMenu></FiMenu>
            
          }
        </div>
      </nav>
    </div>
  );
};

export default Header;
