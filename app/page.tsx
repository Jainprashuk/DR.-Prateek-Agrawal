"use client";
import React, {useEffect, useState} from "react";
import { useEffectOnce, useEventListener } from 'usehooks-ts';

import { Analytics } from '@vercel/analytics/react';

import PreLoader from "./components/other/PreLoader";
import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Stats from "./sections/Stats.tsx";
import Work from "./sections/Work";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";
import Experience from "./experience/page.tsx";

export default function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffectOnce(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
        setIsMobile(window.innerWidth < 768);
    });
    useEffect(() => {
        const scrollTimeout = setTimeout(() => {
            window.scrollTo(0, window.innerHeight);
        }, 7500);
    
        return () => {
            clearTimeout(scrollTimeout);
        };
    }, []);

    useEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    useBlobity(
        {
            licenseKey: "opensource",
            focusableElementsOffsetX: 4,
            focusableElementsOffsetY: 4,
            color: "#ffffff",
            dotColor: "#ffffff",
            invert: true,
            focusableElements:
                "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
            font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
            fontSize: 16,
            fontWeight: 900,
            opacity: 1.0,
            fontColor: "#ffffff",
            zIndex: 35,
            size: 50,
            radius: 5,
            magnetic: false,
        }
    );

    return (
        <>
            <PreLoader />
            <Blur />
            <Color />
            <NavBar />
            {/*<ScrollerMotion // Weird, stuff happening with this
                disabled={isMobile}
                spring={{ mass: 1, stiffness:800, bounce: 300, damping: 100 }}
            >*/}
            <main
                className="flex flex-col items-center justify-center "
            >
                <Hero />
                <About />
                <Stats />
                <Work />
                {/* <Tools /> */}
                <Experience/>
                {/* <Testimonials/> */}
                <Footer />
                <Analytics/>
            </main>
            {/*</ScrollerMotion>*/}
        </>
    );
}
