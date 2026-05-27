// import React from 'react';
// import { Link } from 'react-router-dom';
// import './homePage.css';
// import GetStartedButton from '../../components/GetStartedBtn';

// const HomePage = () => {
//     return (
//         <div className="w-11/12 md:w-10/12 flex items-center gap-28 h-full">

//             {/* left */}
//             <div className="left flex-1 flex flex-col items-center justify-center gap-4 text-center ">
//                 {/* <h1 className='text-5xl md:text-8xl bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-extrabold'>FastGPT AI</h1> */}
//                 <h1 className="relative inline-block text-5xl md:text-8xl font-extrabold leading-none">
//                     <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
//                         FastGPT
//                     </span>

//                     <span className="absolute -right-10 -top-3 text-3xl md:-right-17 md:-top-3 md:text-5xl bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
//                         AI
//                     </span>
//                 </h1>
//                 <h2>Fasten your way of productivity with FastGPT</h2>
//                 <h3 className='font-light mb-3 w-full md:w-9/12'>Generate smarter answers, organize ideas, and complete tasks faster with your personal AI-powered assistant.</h3>
//                 <Link to="" >
//                     <GetStartedButton />
//                 </Link>
//             </div>

//             {/* right */}
//             <div className="right flex items-center justify-center h-full">

//                     <img src="/bot.png" alt="robot" className='' />
//                 </div>
//             </div>
//     );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import GetStartedButton from "../../components/GetStartedBtn";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
    return (
        <section className="home-hero relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center px-5">
            {/* Background effects */}
            <div className="hero-glow hero-glow-one" />
            <div className="hero-glow hero-glow-two" />
            <div className="hero-grid" />

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-0">
                {/* Left */}
                <div className="flex mx-auto flex-col items-center md:items-start justify-center text-center md:text-left gap-5 px-2 md:px-8">
                    <div className="space-y-4">
                        <h1 className="relative inline-block text-6xl md:text-9xl font-extrabold  ">
                            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                FastGPT
                            </span>

                            <span className="absolute -right-10 -top-2 md:-right-16 md:-top-3 text-3xl md:text-5xl bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
                                AI
                            </span>
                        </h1>

                        <h2 className="text-lg md:text-2xl font-semibold text-white">
                            Fasten your way of productivity with FastGPT
                        </h2>

                        <p className="max-w-md text-sm md:text-base leading-7 text-white/70 font-light">
                            Generate smarter answers, organize ideas, and complete tasks faster
                            with your personal AI-powered assistant.
                        </p>
                    </div>

                    <Link to="" className="mt-2">
                        <GetStartedButton />
                    </Link>
                </div>

                {/* Right */}
                <div className="flex items-center justify-center px-2 md:px-8">
                    <div className="bot-card">
                        <img src="/bot.png" alt="FastGPT AI robot assistant" className="bot-image" />
                        <div className="chat ">
                            <img src="/chat.png" alt="FastGPT AI robot assistant" className="w-5 mt-1" />
                            <TypeAnimation
                                sequence={[
                                    "Your AI assistant for faster work.",
                                    1000,
                                    "Turn ideas into content instantly.",
                                    1000,
                                    "Chat smarter. Create faster.",
                                    1000,
                                    "Write, summarize, and brainstorm with AI.",
                                    1000,
                                    "FastGPT helps you get more done.",
                                    1000,
                                ]}
                                wrapper="span"
                                speed={70}
                                repeat={Infinity}
                                cursor={true}
                                // omitDeletionAnimation={true}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;