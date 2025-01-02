import React from 'react';
import ProductBadge from './ProductBadge';

const Testimonial = ({ quote, author, role, image, products }) => {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full">
        <div className="grid md:grid-cols-2 gap-8 h-full">
          <div className="px-6 py-4 md:px-8 md:py-6 flex flex-col justify-between">
            <div>
              <blockquote className="text-xl font-medium text-gray-900 mb-8">
                "{quote}"
              </blockquote>
              
              <div className="mb-8">
                <cite className="text-lg font-semibold text-gray-900 not-italic">
                  —{author}
                </cite>
                <p className="text-gray-600">{role}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Products
                </h3>
                <div className="flex flex-wrap gap-2">
                  {products.map((product) => (
                    <ProductBadge key={product} name={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] md:min-h-0 md:block hidden">
            <img
              src={image}
              alt={`${author}'s story`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;