import React, { useState } from "react";
import Hero from "../components/Hero2";
import Cards from "../components/ui/Blogs/Cards";
import { pageAnimation } from "./enterprise";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    subtitle: 'Mental Health | Technology',
    title: "The Transformative Role of AI in Hospital Management",
    excerpt: "Artificial intelligence (AI) is transforming hospital management...",
    fullContent: "Artificial intelligence (AI) is transforming hospital management, revolutionizing healthcare operations with enhanced efficiency, accuracy, and patient care. From automating administrative tasks to enabling advanced diagnostics, AI is reshaping how healthcare facilities deliver services, paving the way for smarter, more effective medical practices.",
    date: "October 8, 2024",
    author: "Iqbal Yousuf Shaikh",
    image: "/blogs/blogs01.jpg",
    dp: '/blogs/iqbal.jpg'
  },
  {
    id: 2,
    subtitle: 'Technology',
    title: "Navigating the AI Revolution: Jobs, Challenges, and Opportunities",
    excerpt: "Artificial intelligence is reshaping industries...",
    fullContent: "Artificial intelligence is reshaping industries and transforming how we work, communicate, and live. As this technological revolution unfolds, it’s redefining the job landscape, bringing both opportunities and challenges to the workforce.",
    date: "August 19, 2024",
    author: "Iqbal Yousuf Shaikh",
    image: "/blogs/blogs02.jpg",
    dp: '/blogs/iqbal.jpg'
  },
  {
    id: 3,
    subtitle: 'Mental Health',
    title: "The Ethical Implications of Using AI for Mental Health Diagnosis and Therapy",
    excerpt: "Advancements in artificial intelligence (AI) are revolutionizing healthcare...",
    fullContent: "Advancements in artificial intelligence (AI) are revolutionizing healthcare, including mental health. While AI offers transformative potential in analysis and diagnosis, its use in psychology brings forth significant ethical considerations.",
    date: "July 5, 2024",
    author: "Aemah Iqbal",
    image: "/blogs/blogs03.jpg",
    dp: '/blogs/aemah.jpg'
  },
  {
    id: 4,
    subtitle: 'Mental Health',
    title: "Can AI Become Your Therapist ?",
    excerpt: "Advancements in artificial intelligence (AI) are revolutionizing healthcare...",
    fullContent: "Advancements in artificial intelligence (AI) are revolutionizing healthcare, particularly in analytics and diagnostics. This discussion explores AI's role in psychology and examines the question: Can AI become your therapist?",
    date: "July 4, 2024",
    author: "Iqbal Yousuf Shaikh",
    image: "/blogs/blogs04.jpg",
    dp: '/blogs/iqbal.jpg'
  },
];

const BlogsArchive = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <motion.div
      className="relative"
      initial="hidden"
      animate="visible"
      variants={pageAnimation}
    >
      <Hero
        backgroundImage="/Banners/blogs.jpg"
        backgroundImageMob="/Banners/blogs-mob.jpg"
        style={{ backgroundSize: "contain" }}
        title="Blogs"
        description={'Dive into our collection of insightful blogs covering a wide range of topics, from education and technology to tips for improving productivity and efficiency. Stay updated with the latest trends, expert advice, and innovative solutions that can help you stay ahead in both personal and professional growth.'}
        bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
        circleClass="bg-white"
        textClass="text-white"
      />
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-10 xl:px-24 2xl:px-48 pt-16">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              data-aos='fade-up'
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {blog.title}{' '}
                  {blog.subtitle}
                </h2>
                <p className="text-gray-600 text-sm my-2">{blog.date} by {blog.author}</p>
                <p className="text-gray-700 mb-4">
                  {expandedBlogId === blog.id ? blog.fullContent : blog.excerpt}
                </p>
                <button
                  onClick={() => toggleReadMore(blog.id)}
                  className="text-blue-900 font-semibold hover:underline"
                >
                  {expandedBlogId === blog.id ? "Read Less ↑" : "Read More →"}
                </button>
              </div>
            </div>
          ))}
        </div> */}


        <Cards data={blogs} />
      </div>
    </motion.div>
  );
};

export default BlogsArchive;
