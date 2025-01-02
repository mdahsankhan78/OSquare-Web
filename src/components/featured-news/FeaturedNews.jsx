import React from 'react';
import Card from './Card';

const FeaturedNews = ({ headerText, subtitle, cards }) => {
  return (
    <>
      <div className='pb-8' id='featured-news'></div>
      <section className="max-w-full mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48 py-12">
        <div className="space-y-8">
          <header data-aos='fade-up'>
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">
              {headerText}
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-semibold text-gray-900">
              {subtitle}
            </h1>
          </header>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedNews;
