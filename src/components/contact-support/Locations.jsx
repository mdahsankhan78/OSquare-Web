import React from 'react';

const OfficeLocation = ({ country, region, tags, address, phones }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Country and Region */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-x-1">
          <img src={`/${country}.png`} alt="" className='h-8 rounded-md w-12' /> {country}
        </h3>
        {region && <span className="text-gray-500 whitespace-nowrap">- {region}</span>}
      </div>

      {/* Tags */}
      {/* <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              tag.color || 'bg-purple-100 text-[#273066]'
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div> */}

      {/* Address */}
      <div className="space-y-1 mb-4">
        {address.map((line, index) => (
          <p key={index} className="text-gray-600">{line}</p>
        ))}
      </div>

      {/* Phone Numbers */}
      {phones && (
        <div className="space-y-2">
          {phones.map((phone, index) => (
            <div key={index} className="flex items-center gap-2">
              {phone.label && (
                <span className="text-sm text-gray-500">{phone.label}</span>
              )}
              <a
                href={`tel:${phone.number.replace(/\s/g, '')}`}
                className="text-[#273066] hover:text-[#273066]/90"
              >
                {phone.number}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfficeLocation;
