import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
// import { spaceGrotesk } from '../fonts/spaceGrotesk';
import Image from 'next/image';


const Profile = () => {
    const profileRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed (0.5 means 50% of the component should be visible)
        );

        if (profileRef.current) {
            observer.observe(profileRef.current);
        }

        return () => {
            if (profileRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(profileRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`flex flex-col items-center justify-center sm:mt-0 ${
                isVisible ? 'profile-animation' : ''
            }`}
            ref={profileRef}
        >
            <div
                className={`item-center inner relative flex flex-col justify-center  pointer-events-none`}
            >
                <div className="flex flex-col items-center justify-center profile-animation sm:mt-0">
                    <div
                        className={`item-center inner relative flex flex-col justify-center  pointer-events-none`}
                    >
                        {/* <Logo width={100} height={100} /> */}
                        <div className="flex flex-col border-profile p-20 items-center relative"> {/* Add 'relative' position here */}
                            <div className="mb-4 h-36 w-36 overflow-hidden outer rounded-full bg-gray-100 shadow-lg md:h-48 md:w-48">
                                <Link href="https://www.linkedin.com/in/prateek-agrawal-ph-d-6183b28" target="_blank" rel="noopener noreferrer">
                                    <div className="rounded-full border-spacing-2 border-gray-50 border-4 p-2">
                                        <Image
                                            src="/profile.png"
                                            alt="Photo by Radu Florin"
                                            width={40}
                                            height={96}
                                            unoptimized
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </Link>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <div className="text-center  font-bold text-indigo-500 text-xl md:text-2xl">
          Prof. (Dr.) Prateek Agrawal
                                </div>
                                <p className="text-center dark:text-gray-100 text-base text-gray-600 md:text-lg">
          Dy. Dean & Coordinator, SCSE
                                </p>
                                <p className="text-center dark:text-gray-100 text-base text-gray-600 md:mb-4 md:text-lg">
          Chief Advisor, IEEE CIS LPU
                                </p>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};



export default Profile;
