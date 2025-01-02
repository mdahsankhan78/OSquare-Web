import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    category: 'OSquare',
    title: 'Can AI Become Your Therapist?',
    description: 'In recent years, advancements in artificial intelligence (AI) have begun to revolutionize various fields, including general healthcare and mental healthcare. And this is transforming the healthcare world, especially the analytic and diagnostic avenues. The focus of this discussion is on role of AI in psychology and question is whether AI can become your therapist!',
    image: '/blogs/blogs01.jpg',
    buttonText: 'Read more',
    buttonVariant: 'dark',
    bgColor: 'bg-purple-100'
  },
  {
    category: 'OSquare',
    title: 'The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy',
    description: 'Introduction In recent years, artificial intelligence (AI) advancements have begun to revolutionize various fields, including general healthcare and mental healthcare. While AI can potentially transform healthcare’s analytic and diagnostic avenues, its application in psychology raises critical ethical questions.',
    image: '/blogs/blogs02.jpg',
    buttonText: 'Read more',
    buttonVariant: 'dark',
    bgColor: 'bg-blue-50'
  },
  {
    category: 'OSquare',
    title: 'Navigating the AI Revolution: Jobs, Challenges, and Opportunities',
    description: 'Artificial intelligence has transformed industries, revolutionizing how we work, communicate, and live. As we embrace this technological leap, here’s how it affects the job landscape',
    image: '/blogs/blogs03.jpg',
    buttonText: 'Read more',
    buttonVariant: 'dark',
    bgColor: 'bg-orange-100'
  }
];

const FeatureCards = () => {
  return (
    <section className="max-w-full mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48 py-12">
      <div className="mb-12" data-aos='fade-up'>
        <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
          Blogs
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-gray-900">
          Learn more from our latest news
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
