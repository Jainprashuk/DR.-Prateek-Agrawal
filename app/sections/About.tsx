import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-gray-100 dark:bg-gradient-to-b from-black via-neutral-900 to-zinc-900 bg-cover bg-center pt-16 pb-12 md:pt-20 md:pb-44 lg:pt-20 lg:pb-24"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"About Me"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-gray-900 dark:text-white sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-gray-900 dark:text-white md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="A proactive learner with a flair for adopting emerging trends & addressing industry requirements to achieve
organizational objectives & profitability norms.
" />

                        <AnimatedBody
                            delay={0.1}
                            text="Experienced individual in teaching with a demonstrated history of working in the education and administration. Successfully completed Post-Doctoral Research from AAU, Austria. Skilled in Natural Language Processing (NLP), Fuzzy Sysstems, AI, Machine Learning etc. Strong education professional with a Ph.D focused in Natural Language Translation (Sanskrit to Hindi)."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Having leadership quality with more than 12 years of experience as coordinator of the department and/or
                            the school ready in accepting the challenges with a positive mindset.
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
