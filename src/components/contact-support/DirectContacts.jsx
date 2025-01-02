import React from 'react';
import { Mail, Users, Wrench, HelpCircle } from 'lucide-react';

const ContactOption = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-[#273066]" />
    </div>
    <div>
      <h3 className="font-medium text-[#273066]">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const DirectContacts = () => {
  const contactOptions = [
    {
      icon: Mail,
      title: "Meet an expert",
      description: "Schedule your meeting in just 2 minutes"
    },
    {
      icon: Users,
      title: "Become a partner",
      description: "Join our worldwide partner network"
    },
    {
      icon: Wrench,
      title: "Request Custom Developments",
      description: "Need to get in contact with our developers?"
    },
    {
      icon: HelpCircle,
      title: "Support Requests",
      description: "Open a ticket for assistance"
    }
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm space-y-8">
      <h2 className="text-3xl font-semibold text-[#273066]" data-aos='fade-up'>Direct Contacts</h2>
      <div className="text-gray-600">
        <p>Call or Schedule a video conference</p>
        <p className="font-medium text-[#273066]"><a href="tel:+923324666823">+92 332 466 6823</a></p>
      </div>

      <div className="space-y-6">
        {contactOptions.map((option, index) => (
          <ContactOption key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

export default DirectContacts;