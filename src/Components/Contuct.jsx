
import Sectiontitle from '../Shared/Sectiontitle';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contuct = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dsbpty8', 'template_s8fx0u9', form.current, 'YFL0_5lycFlgu4zY2')
      .then((result) => {
        console.log(result.text);
        if (result.text) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message send succesfully',
            showConfirmButton: false,
            timer: 1500
          })
          form.current.reset();

        }
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contuct'
      className='py-20 lg:px-0 px-5'>
      <Sectiontitle
      subtitle='contuct'
        title='Contact With Me'
      >

      </Sectiontitle>
      <section className=" bg-transparent py-12 text-[#f4f5f6]">
        <div className="grid  grid-cols-1  mx-auto  md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 px-2">
            <h1 className="text-5xl font-bold">Get in <span className='text-[#ff014f]'>touch</span></h1>
            <p className="pt-2 pb-4">Contact me directly through the provided form or reach out via the provided contact details to discuss potential collaborations, project inquiries, or any other questions you may have.</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>Dhaka Bangladesh</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801840284709</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>shammiriya455@gmail.com</span>
              </p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
            <label className="block">
              <span className="mb-1 text-lg font-semibold">Your Full name</span>
              <input type="text" name='user_phone' placeholder="Name" className="block text-white w-full rounded-md p-2 shadow-sm focus:ring focus:ri focus:ri bg-gray-600" />
            </label>
            <label className="block">
              <span className="mb-1 text-lg font-semibold">Email address *</span>
              <input required type="email" name='user_email' placeholder="Your Email" className="block w-full p-2 text-white rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-600" />
            </label>
            <label className="block">
              <span className="mb-1  text-lg font-semibold">Message *</span>
              <textarea required rows="5" name='message' placeholder='Message'
                className="block w-full rounded-md p-2 text-white focus:ring focus:ri focus:ri bg-gray-600"></textarea>
            </label>
            <button type="submit" value='send' className="self-center w-full bg-gray-600 px-8 py-2 text-white text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
          </form>
        </div>
      </section>

    </div>

  );
};

export default Contuct;