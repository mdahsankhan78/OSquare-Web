import React from 'react'

const FooterNav = () => {
    const footerData = {
        sections: [
        {
            title: "What's new",
            links: [
                { name: 'Surface Book 3', url: '' },
                { name: 'Surface Pro', url: '' },
                { name: 'OSquare Copilot', url: '' },
                { name: 'OSquare 365', url: '' },
                { name: 'Windows 11 apps', url: '' }
            ]
        },
        {
            title: 'Enterprise',
            links: [
                { name: 'Human Resource', url: '' },
                { name: 'Project Management', url: '' },
                { name: 'Customer Relationship Management', url: '' },
                { name: 'Forms & Workflows', url: '' },
                { name: 'Dedicated Server', url: '' },
                { name: 'Live Support', url: '' },
                { name: 'Customisation', url: '' },
            ]
        },
        {
          title: 'Business',
          links: [
            { name: 'Human Resource', url: '' },
            { name: 'Project Management', url: '' },
            { name: 'Customer Relationship Management', url: '' },
            { name: 'Forms & Workflows', url: '' },
          ]
        },
        {
            title: 'Education',
            links: [
                { name: 'Human Resource', url: '' },
                { name: 'School Management System', url: '' },
                { name: 'Fee Management', url: '' },
                { name: 'Forms', url: '' },
                { name: 'Mobile App', url: '' },
            ]
        },
        {
            title: 'Individual',
            links: [
                { name: 'Project Management', url: '' },
                { name: 'Customer Relationship Management', url: '' },
                { name: 'Forms', url: '' },
                { name: 'Calender', url: '' },
            ]
        },
        // {
        //     title: 'Company',
        //     links: [
        //         {name: 'Careers', url: '/careers'},
        //         {name: 'About OSquare', url: '/about-osquare'},
        //         {name: 'Company news', url: '/company-news'},
        //         {name: 'Privacy at OSquare', url: '/privacy-at-osquare'},
        //         {name: 'Investors', url: '/investors'},
        //         {name: 'Sustainability', url: '/sustainability'}
        //     ]
        // }
        ]
      };    
    return (
    <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerData.sections.map((section, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "col-span-2 lg:col-span-2 md:border-r md:pr-6 border-gradient-to-r from-violet-600 to-indigo-600"
                    : ""
                }`}
              >
                <h3 className="font-semibold text-gray-600 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-gray-500 hover:text-gray-700 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
    </>
  )
}

export default FooterNav