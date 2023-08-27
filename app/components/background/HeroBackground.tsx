import React from "react";

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <video className="h-full w-full object-cover dark:hidden" autoPlay={true} playsInline={true} loop muted preload="auto">
                <source src="/bg3.mp4" type="video/mp4" />
            </video>

            <video className="h-full w-full object-cover hidden dark:flex" autoPlay={true} playsInline={true} loop muted preload="auto">
                <source src="/bg2.mp4" type="video/mp4" />
            </video>
            
            {/* <div className="bg-gray-100 dark:bg-blue-900 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/> */}
            
        </div>
    );
};

export default HeroBackground;
