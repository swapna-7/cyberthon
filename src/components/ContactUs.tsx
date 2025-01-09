import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'


function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_4i718cr', 'template_np4sx97', form.current, 'aqjsGRmyqc7DCNH-w')
        .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    
    <section className="">
       
      <div className=" my-24 flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 ">
        <h1 className='flex items-center mb-6 text-3xl font-semibold text-white font-audiowide'>CONTACT US</h1>
        <div className="w-full border-2 border-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className='space-y-4 md:space-y-6' ref={form} onSubmit={sendEmail}>
              <div>
                <label
                  className="block mb-2 text-base font-medium text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder='Enter your name'
                  name='from_name'
                  className="bg-zinc-900  border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
              </div>
              <div>
                <label
                  className="block mb-2 text-base font-medium text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder='Enter your email'
                  name="from_email"
                  className="bg-zinc-900  border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
              </div>
              <div>
                <label

                  className="block mb-2 text-base font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  placeholder='Enter your message'
                  name="message"
                  className="bg-zinc-900  border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
              </div>
              <button
                className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
   
    </section>
  )
}

export default ContactUs
