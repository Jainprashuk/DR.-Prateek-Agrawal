import React from "react";
import CountUp from "react-countup";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const Stats = () => {
    return (
        <div className="px-4 py-16  w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gradient-to-b from-zinc-900 via-neutral-800 to-slate-900 ">
            <div className="grid grid-cols-2 row-gap-12 md:grid-cols-4">
                <div className="text-center md:border-r mx-2">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl ">
                        <CountUp start={0} end={75} duration={15} separator="," /> +
                    </h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-gray-200 uppercase lg:text-base mr-2">
            Research Papers
                    </p>
                </div>
                <div className="text-center md:border-r mx-2">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                        <CountUp start={0} end={100} duration={15} separator="," /> +
                    </h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 dark:text-gray-200 uppercase lg:text-base">
            Patents
                    </p>
                </div>
                <div className="text-center md:border-r mx-2">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                        <CountUp start={0} end={100} duration={15} separator="," /> +
                    </h6>
                    <p className="text-sm font-medium tracking-widest dark:text-gray-200 text-gray-800 uppercase lg:text-base">
            students guided
                    </p>
                </div>
                <div className="text-center mx-2">
                    <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                        <CountUp start={0} end={10} duration={30} separator="," /> +
                    </h6>
                    <p className="text-sm font-medium tracking-widest dark:text-gray-200 text-gray-800 uppercase lg:text-base">
            Books Published
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
