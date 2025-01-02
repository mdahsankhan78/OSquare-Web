import React, { useState } from "react";
import Hero from "../components/Hero2";
import Spinner from "../components/ui/Spinner";
import { pageAnimation } from "./enterprise";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [msg, setMsg] = useState(null);
  const [loading, setloading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setMsg('Thank you for your message! We will get back to you soon.');
    }, 3000);
  }
  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/contact-us.jpg"
        backgroundImageMob="/Banners/contact-us-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title={<><span className="text-white">Contact Us</span></>}
        // subtitle="OBrain for OSquare"
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
        description={<><span className="text-white">We are here to help you! Whether you have a question, need assistance, or want to shfeedback, we’d love to hear from you.</span></>}
      // buttonText="Try Now"
      // buttonLink="/#/individualpricing"
      />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* General Inquiries */}
            <section className="p-8">
              <h2 className="text-3xl font-semibold text-[#273066] mb-6" data-aos='fade-up'>General Inquiries</h2>
              <p className="text-gray-600 mb-4">
                For general questions or inquiries about OSquare, you can reach us via email or phone:
              </p>
              <ul >
                <li className="text-[#273066]">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@osquare.live"
                    className="text-[#273066] hover:text-[#273066]/95"
                  >
                    info@osquare.live
                  </a>
                </li>
                <li className="text-[#273066]">
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+15173661928"
                    className="text-[#273066] hover:text-[#273066]/95"
                  >
                    +1 517 366 1928
                  </a>
                </li>
                <li>
                  <div>
                    <h3 className="text-xl font-semibold text-[#273066] mt-4">Support</h3>
                    <p className="text-gray-600">
                      We’re committed to providing you with the best possible support experience. Whether you’re facing an issue or just need help using OSquare, we have a variety of resources to assist you.
                    </p>
                  </div>
                </li>
                <li>
                  {/* Technical Support */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#273066] mt-4">Technical Support</h3>
                    <p className="text-gray-600 mb-2">
                      For technical assistance with OSquare products or issues, please reach out to our Support Team.
                    </p>
                    <ul className="space-y-2">
                      <li className="text-[#273066]">
                        <strong>Email:</strong> <a href="mailto:support@osquare.live" className="text-[#273066] hover:text-[#273066]/95">support@osquare.live</a>
                      </li>
                      <li className="text-[#273066]">
                        <strong>Phone:</strong> <a
                          href="tel:+15173661928"
                          className="text-[#273066] hover:text-[#273066]/95"
                        >
                          +1 517 366 1928
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  {/* Knowledge Base */}
                  <div>
                    <h3 className="text-xl font-semibold text-[#273066] mt-4">Knowledge Base</h3>
                    <p className="text-gray-600 mb-2">
                      Our comprehensive Knowledge Base offers blogs, guides, and FAQs to help you troubleshoot and make the most of your OSquare products.
                    </p>
                    <a href="/#/blogs" className="text-[#273066] hover:text-[#273066]/95 underline" >
                      Blogs
                    </a>{" "}
                    |{" "}
                    <a
                      href="/#/faqs"
                      className="text-[#273066] hover:text-[#273066]/95 underline"
                    >
                      FAQs
                    </a>
                  </div>
                </li>
              </ul>
            </section>

            {/* Immediate Inquiries */}
            <section className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-3xl font-semibold text-[#273066] mb-6" data-aos='fade-up'>Immediate Inquiries</h2>
              <p className="text-gray-600 mb-6">
                For any immediate inquiries, feel free to fill out the form below, and we’ll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#273066] font-medium mb-2">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273066]"
                  />
                </div>
                <div>
                  <label className="block text-[#273066] font-medium mb-2">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273066]"
                  />
                </div>
                <div>
                  <label className="block text-[#273066] font-medium mb-2">Message</label>
                  <textarea
                    required
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273066]"
                  ></textarea>
                </div>
                {msg && <p className="text-green-600">{msg}</p>}
                <button
                  type="submit"
                  className="w-full bg-[#273066] text-white py-2 rounded-lg font-semibold hover:bg-[#273066]/95 transition"
                >
                  {loading ? <Spinner /> : 'Submit'}
                </button>
              </form>
            </section>
          </div>
        </div>

        {/* Product Updates */}
        {/* <section className="container mx-auto px-6 bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-semibold text-[#273066] mb-6">
          Product Updates & Maintenance
        </h2>
        <p className="text-gray-600">
          Stay up to date with the latest features, product updates, and scheduled maintenance for all OSquare products.
        </p>
        <a
        href="https://www.osquare.com/updates"
        className="text-[#273066] hover:text-[#273066]/95 underline mt-4 inline-block"
        >
        Visit Product Updates
        </a>
        </section> */}
      </div>
    </motion.div>
  );
};

export default ContactUs;
