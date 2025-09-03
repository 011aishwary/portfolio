"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Profilepic = () => {
    return (
        <CardContainer className="inter-var">
            <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  sm:w-[20rem]  rounded-xl p-6  border  ">
                {/* <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white">
                    Make things float in air
                </CardItem> */}
                {/* <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                    Hover over this card to unleash the power of CSS perspective
                </CardItem> */}
                <CardItem translateZ="100" className="w-full">
                    <img
                        src="/jeremy2.png"
                        height="1200"
                        width="1000"
                        className="h-[40vh] p-4 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="Profilepic" />
                </CardItem>
                {/* <div className="flex justify-between items-center">
                    <CardItem
                        translateZ={20}
                        as="a"
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                        Sign up
                    </CardItem>
                </div> */}
            </CardBody>
        </CardContainer>

    )
}

export default Profilepic

