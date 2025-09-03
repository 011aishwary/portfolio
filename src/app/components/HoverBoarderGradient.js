"use client";
import React from "react";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HoverBoarderGradient = () => {
  return (
    <div className="py-6 flex justify-center text-center">
        <Link href="https://github.com/011aishwary">
        <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
            {/* <AceternityLogo /> */}
            
            <span>Explore all projects</span>
        </HoverBorderGradient>
        </Link>
    </div>
  )
}

export default HoverBoarderGradient





// const AceternityLogo = () => {
//   return (
    
//   );
// };

