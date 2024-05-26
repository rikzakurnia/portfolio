import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const SERVICE_ID = process.env.SERVICE_ID;
  const TEMPLATE_ID = process.env.TEMPLATE_ID;
  const PUBLIC_KEY = process.env.PUBLIC_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <h2 className="text-3xl text-center font-bold pt-16 mb-5">Contact Me Using This Form</h2>
      <h2 className="text-md text-center mb-6">Make sure your data is correct so i can send you a reply</h2>
      <form ref={form} onSubmit={sendEmail} class="w-full max-w-md mx-auto">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-medium mb-2">Name</label>
          <input type="text" name="user_name" class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required=""/>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input type="email" name="user_email" class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required="" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-medium mb-2">Message</label>
          <textarea name="message" class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" required=""/>
        </div>
        <button type="submit" value="Send" className="rounded-lg self-center bg-gray-500 py-2 px-4 text-sm font-medium text-white align-end hover:opacity-80">Send</button>
      </form>
    </div>
    
  );
};

export default Contact;