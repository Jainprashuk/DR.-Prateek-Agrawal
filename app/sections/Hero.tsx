import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import Profile from "./Profile";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <Profile/>
        </motion.section>
    );
};

export default Hero;
