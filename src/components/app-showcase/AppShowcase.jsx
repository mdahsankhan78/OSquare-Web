import React, { useState } from 'react';
import AppCard from './AppCard';
import FeaturedCard from './FeaturedCard';
import ProductsTabs from '../ui/Products/Tabs';
import { StickyScrollRevealDemo } from '../ui/Products/ScrollEffect';

const AppsShowcase = ({ tabs, title, description, backgroundImage }) => {

  return (
    <section
      className="max-w-full mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="whats-included"
    >
      <div className="space-y-8">
        {/* Header */}
        <div data-aos='fade-up'>
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            WHAT'S INCLUDED
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl font-semibold text-gray-900">
            {title} <span
              className="text-5xl sm:text-6xl"
              style={{
                fontFamily: 'Bhineka',
                background: 'linear-gradient(to right, #1E4FCD, #F36F7E)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                padding: "0 5px",
              }}
            >
              O
            </span>
            <span style={{ fontFamily: 'Noopla', fontWeight: '200' }}>
              Square</span>
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Featured Card */}
        {/* <FeaturedCard activeTab={activeTab} tabs={tabs} /> */}

        {/* Apps Grid */}
        <div className="flex justify-center items-center">
          <div
            className={`grid gap-6 ${tabs.length === 4
              ? 'grid-cols-1 sm:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-3'
              }`}
          >
            {tabs.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}

          </div>
        </div>

        {/* tabs for apps */}
        {/* <ProductsTabs tabsData={tabs} /> */}

        {/* //sticky scroll effect */}
        {/* <StickyScrollRevealDemo tabsData={tabs}/> */}

      </div>
    </section>
  );
};

export default AppsShowcase;
