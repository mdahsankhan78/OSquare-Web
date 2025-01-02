import React, { useState } from "react";
import Hero from "../components/Hero2";
import Form from "../components/ui/Ticket/Form";
import { pageAnimation } from "./enterprise";
import { motion } from "framer-motion";

const SubmitTicket = () => {
  const [status, setStatus] = useState(false);
  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/submit-a-ticket.jpg"
        backgroundImageMob="/Banners/submit-a-ticket-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title={
          <span className="text-white">Submit a Ticket</span>
        }
        // subtitle="OBrain for OSquare"
        // bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        // circleClass="bg-white"
        // textClass="text-white"
        description={<span className="text-white">We value your feedback and are committed to continuously improving OSquare. Whether you have a suggestion to make our platform better or have encountered an issue, we're here to help!</span>}
      // buttonText="Try Now"
      // buttonpnk="/#/individualpricing"
      />
      <section className="bg-white shadow-lg rounded-lg m-6 xl:mx-24 2xl:mx-48 my-12 p-8">
        {/* <h2 className="text-3xl font-bold text-[#273066] mb-6">Submit a Ticket</h2>
      <p className="text-gray-600 mb-6">
        We value your feedback and are committed to continuously improving OSquare. Whether you have a suggestion to make our platform better or have encountered an issue, we're here to help!
      </p> */}

        {/* Options */}
        <h3 className="text-3xl font-bold text-[#273066] mb-4">
          How Can We Assist You?
        </h3>
        <ul className="space-y-4 mb-8 text-gray-700">
          <p>
            <strong>Report an Issue: </strong> <br />
            <span>Encountering an error or experiencing unexpected behavior in any of our products? Provide us with details, and we’ll investigate it promptly.</span>
          </p>

          <p>
            <strong>Make a Suggestion: </strong> <br />
            <span>Have an idea on how we can improve OSquare or add a new feature? We’d love to hear your suggestions and feedback.</span>
          </p>

          <p>
            <strong>General Inquiry: </strong> <br />
            <span>For any other questions or concerns, please don’t hesitate to contact us.</span>
          </p>
        </ul>

        {/* Options */}
        <h3 className="text-3xl font-bold text-[#273066] mb-4">
          What to Include in Your Ticket?
        </h3>
        <p>
          To ensure the fastest resolution, please include as many details as possible:
        </p>
        <ul className="space-y-4 mb-8 text-gray-700">
          <p>
            <strong>1. Detailed Description:</strong><br /> Clearly describe the issue you're facing or the suggestion you want to make.
          </p>
          <p>
            <strong>2. Steps to Reproduce (for issues):</strong><br /> If you're reporting an error, pst the steps leading to the issue so we can recreate the problem.
          </p>
          <p>
            <strong>3. Screenshots or Files:</strong><br /> Attach any relevant screenshots, logs, or files that can help us understand your concern better.
          </p>
          <p>
            <strong>4. Product/Version:</strong><br /> Please specify which OSquare product or feature you’re referring to and include the version number (if apppcable).
          </p>
          <p>
            <strong>5. Your Contact Information:</strong><br /> Include your email or phone number so our team can reach you with updates.
          </p>
        </ul>

        <div className="mt-8 text-gray-600">
          <h3 className="text-3xl font-bold text-[#273066] mb-4">
            What Happens After You Submit a Ticket?
          </h3>
          <p>
            Once your ticket is submitted, our support team will review it and respond as quickly as possible. We may reach out to ask for additional information or to inform you that the issue has been resolved. You’ll receive email notifications regarding the status of your ticket.
          </p>
          <p>
            Thank you for helping us improve OSquare. Your feedback is invaluable in shaping the future of our products!
          </p>
        </div>
        <br />
        {status ? <Form />
          : <button onClick={() => setStatus(true)} className="bg-[#273066] text-white px-2 py-2 rounded-lg font-semibold hover:bg-[#273066]/95 transition">Submit a Ticket</button>
        }
      </section>
    </motion.div>
  );
};

export default SubmitTicket;
