"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({ content, contentClassName }) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
            const distance = Math.abs(latest - breakpoint);
            if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                return index;
            }
            return acc;
        }, 0);
        setActiveCard(closestBreakpointIndex);
    });
    
    const [backgroundicon, setBackgroundicon] = useState(content?.icon || "");

    useEffect(() => {
        setBackgroundicon(content[activeCard]?.icon || "");
    }, [activeCard, content]);

    return (
        <motion.div
            className="h-[25rem] overflow-y-auto grid grid-cols-2 relative space-x-10 rounded-md"
            ref={ref}>
            <div className="relative flex items-start">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.name + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-black">
                                {item.name}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-gray-700 max-w-sm mt-10">
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                className={cn(
                    "hidden lg:block h-60 rounded-md bg-white sticky top-10 overflow-hidden",
                    contentClassName
                )}>
                <div className="h-full w-full flex items-center justify-center flex-col font-semibold">
                    <img
                        src={backgroundicon}
                        className="h-28 -w-[400px] object-contain"
                        alt="linear board demo"
                    />
                    <h2>{content[activeCard].name}</h2>
                </div>
            </div>
        </motion.div>
    );
};
