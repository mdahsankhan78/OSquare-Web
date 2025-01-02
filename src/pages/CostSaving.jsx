import React from 'react';
import Hero from '../components/Hero2';
import { pageAnimation } from './enterprise';
import { motion } from 'framer-motion';

const CostSaving = () => {
    return (
        <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={pageAnimation}
        >
            <Hero
                backgroundImage="/Banners/cost-saving.jpg"
                backgroundImageMob="/Banners/cost-saving-mob.jpg"
                style={{ backgroundSize: "contain" }}
                title={<>Cost Saving with {' '}
                    <span
                        className="text-4xl sm:text-5xl"
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
                    <span style={{ fontFamily: 'Noopla', fontWeight: '200' }}>
                        Square</span>
                </>}
                // subtitle="OBrain for OSquare"
                bgClass="bg-gradient-to-r from-purple-400 to-indigo-600"
                circleClass="bg-white"
                textClass="text-white"
                description={<>Supercharge your team’s productivity with the AI-driven solution for smarter workflows, and transform your workplace with OBrain for Work’s intelligent features and enhance performance effortlessly.</>}
            // buttonText="Try Now"
            // buttonLink="/#/individualpricing"
            />

            <div className="pb-8 py-16 px-6 sm:px-20 lg:px-40 2xl:px-60 text-center">
                <h2 className="text-center mb-8 font-bold text-[#172554] text-3xl sm:text-4xl">Pay for What You Need, Grow with What You Want</h2>
                <span className='text-xl font-bold'>With OSquare</span>, you get access to an all-in-one platform offering a wide range of essential tools, built to scale as your business grows. Our flexible solutions ensure you pay only for what you need, while benefiting from advanced features that optimize your workflow and streamline everyday tasks.
            </div>
            <div className="max-w-full mx-auto p-6 xl:px-24 2xl:px-48 pb-10">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#273066]">How{' '}
                    <span
                        className="text-4xl sm:text-5xl"
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
                    <span style={{ fontFamily: 'Noopla', fontWeight: '200' }}>
                        Square</span> {' '}
                    Helps You Save Costs</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>All-in-One Platform</li>
                    <li>Scalable Solutions</li>
                    <li>Increased Efficiency</li>
                    <li>Cloud-Based Storage and Access</li>
                    <li>Comprehensive Security at No Extra Cost</li>
                    <li>Reduced Training and Support Costs</li>
                </ul>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-2 text-[#273066]">Start Saving Today!</h2>
                <p className="mb-4">
                    Ready to lower your software expenses while improving efficiency? With OSquare’s comprehensive suite of digital products, your business can cut unnecessary costs, streamline operations, and boost productivity.
                </p>
                <p>
                    Get in touch with our team today to learn more about how OSquare can help your business save on software costs while achieving more.
                </p>
            </div>
        </motion.div>
    );
};

export default CostSaving;