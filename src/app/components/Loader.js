"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        document.body.style.overflow = "auto";
                        onComplete();
                    }, 800); // Wait a bit at 100% before completing
                    return 100;
                }
                // Random increment between 2 and 15
                return prev + Math.floor(Math.random() * 13) + 2;
            });
        }, 100);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = "auto";
        };
    }, [onComplete]);

    // Walking animation variants
    const walkingVariants = {
        walk: {
            x: [-100, 100],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const legLeftVariants = {
        walk: {
            rotate: [-20, 20, -20],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const legRightVariants = {
        walk: {
            rotate: [20, -20, 20],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const armLeftVariants = {
        walk: {
            rotate: [20, -20, 20],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const armRightVariants = {
        walk: {
            rotate: [-20, 20, -20],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const bodyVariants = {
        walk: {
            y: [0, -5, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060010] text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-4xl px-4">

                {/* Animation Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <div className="top">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"><div className="square"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"><div className="square"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"><div className="square"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="square">
                            <div className="square">
                                <div className="square">
                                    <div className="square">
                                        <div className="square"><div className="square"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text and Progress Container */}
                <div className="flex flex-col items-center md:items-start mt-16 md:mt-0">
                    <motion.div 
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest stardos-stencil-bold bg-clip-text text-transparent bg-gradient-to-r from-[#b19eef] to-white text-center md:text-left"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        CRAFTING EXPERIENCE
                    </motion.div>
                    <div className="flex items-center gap-4 mt-4 w-full max-w-[280px] md:max-w-md">
                        <div className="text-sm sm:text-base text-[#b19eef] font-mono tracking-widest w-12 text-right">
                            {progress}%
                        </div>
                        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#3f1b7f] via-[#b19eef] to-white"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
