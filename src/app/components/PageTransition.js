"use client"
import React from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.6 } }
}

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, belowfilter: "blur(5px)" }}
            animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                    duration: 2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }
            }}
            exit={{
                opacity: 0,
                y: -30, // Move up slightly on exit
                transition: {
                    duration: 1,
                    ease: "easeIn"
                }
            }}
            // transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    )
}
