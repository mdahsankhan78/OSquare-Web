import React from 'react';
import Location from './Locations';

const Offices = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-24 2xl:px-48">
      <div className="max-w-full">
        <h2 className="text-3xl font-semibold text-[#273066]" data-aos='fade-up'><span
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              style={{
                fontFamily: "Bhineka",
                background: "linear-gradient(to right, #1E4FCD, #F36F7E)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                padding: "0 5px",
              }}
            >
              O
            </span>
            <span style={{ fontFamily: 'Noopla', fontWeight: '100' }}>
              Square</span> {' '} Offices</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8" data-aos='fade-up'>US, UK & Pakistan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Location
              country="United States of America"
              region="US"
              tags={[
                { label: 'FINANCE' },
                { label: 'MARKETING' },
                { label: 'SALES' },
                { label: 'SERVICES' }
              ]}
              address={[
                '1000 John R RD, ST 602,',
                'Troy 48083'
              ]}
              phones={[
                { number: '+1 517 366 1928'},
                // { number: '+32 2 290 34 91', label: '> 250 employés' }
              ]}
            />

            <Location
              country="United Kingdom"
              region="UK"
              tags={[
                { label: 'SALES' },
                { label: 'SERVICES' }
              ]}
              address={[
                'Hoola Tower, 3 Tidal Basin Rd,',
                'Royal Victoria, E16 1UX, London'
              ]}
              phones={[
                { number: '+44 774 860 7428' },
                // { number: '+32 2 290 34 91', label: '< 250 employés' }
              ]}
            />

            <Location
              country="Pakistan"
              region="PK"
              tags={[
                { label: 'HR' },
                { label: 'MARKETING' },
                { label: 'R&D' },
                { label: 'SERVICES' }
              ]}
              address={[
                '111, Progressive Center, P.E.C.H.S Block 2',
                'Block 6 PECHS, Karachi City, Sindh 75400',
              ]}
              phones={[
                { number: '+92 332 466 6823' },
                // { number: '+32 2 616 8002', label: 'Support' }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;