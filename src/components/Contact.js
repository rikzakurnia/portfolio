import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <ToastContainer />
      <h2 className="text-3xl text-center font-bold pt-16 mb-5">Contact Me Using This Form</h2>
      <h2 className="text-md text-center mb-6">Make sure your email is correct so I can send you a reply</h2>
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
          <input type="text" name="user_name" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input type="email" name="user_email" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
          <textarea name="message" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <button type="submit" value="Send" className="rounded-lg self-center bg-gray-500 py-2 px-4 text-sm font-medium text-white align-end hover:opacity-80">Send</button>
      </form>
    </div>
  );
}

export default Contact;
