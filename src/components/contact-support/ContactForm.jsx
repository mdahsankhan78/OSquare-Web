import React, { useState } from 'react';
import Spinner from './../ui/Spinner';
import { Slider } from './../ui/slider'

const ContactForm = () => {
  const nums = ['5', '10', '20', '30', '50', '100', '500'];
  const [msg, setMsg] = useState(null);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setMsg('Thank you for your message! We will get back to you soon.');
    }, 3000);

    // const handleSliderChange = (value) => {
    //   const userValues = [5, 10, 20, 30, 50, 100, 500];
    //   setUsers(userValues[value]);
    // };
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-3xl font-semibold text-[#273066] mb-8" data-aos='fade-up'>Looking for something?</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none sm:text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              id="company"
              className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject *</label>
          <select
            id="subject"
            className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none sm:text-sm"
            required
          >
            <option value="" selected disabled>Select a subject</option>
            <option value="company">Use it in my company</option>
            <option value="partner">Become a partner</option>
            <option value="development">Custom development</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Question *</label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full py-2 border-b-2 border-gray-300 focus:outline-none sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
          <Slider defaultValue={[0]}
            max={6}
            step={1} nums={nums}/>
        </div>

        <div className="flex items-start">
          <input
            id="privacy"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 mt-1"
            required
          />
          <label htmlFor="privacy" className="ml-2 text-sm text-gray-500">
            I agree to the <span className='font-bold'><a href="/#/privacy-policy" target='_blank'>Privacy Policy</a></span> & <span className='font-bold'><a href="/#/terms-conditions" target='_blank'>Terms of Service</a></span>
          </label>
        </div>

        {msg && <p className="text-green-600">{msg}</p>}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-[#273066] text-white font-medium rounded-md hover:bg-[#273066]/95 focus:outline-none  focus:ring-[#273066]/95 min-w-40"
        >
          {loading ? <Spinner /> : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;