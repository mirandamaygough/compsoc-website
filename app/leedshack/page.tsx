'use client';

import Navbar from "../../components/navbar";
import Image from "next/image";
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { SponsorCarousel } from "../../components/sponsor-carousel";

import { useState } from 'react';

export default function Leedshack() {
    const faq = [
        {
          question: "Who can participate?",
          answer: "If you're a student at a university in the UK, you're eligible to participate in LeedsHack. Whether you're a beginner or an experienced hacker, we welcome all skill levels."
        },
        {
            question: "How do I form a team?",
            answer: "Teams will be of up to 4 people, you can either come with a team or we can help you find one on the day. After ticket registration closes, we may send out a form to fill in if you have already decided on a team."
        },
        {
            question: "When does the event start and end?",
            answer: "Check-in will start at 10am on Saturday 8th February with the opening talks at 11am, and we are expecting to end at around 3pm on Sunday 9th February."
        },
        {
            question: "What will happen on the day?",
            answer: "An exact timetable will be published closer to the time, but we will start with opening talks from our sponsors introducing their challenges. You will then be sat with your team and have 24 hours to build a solution to one of the challenges. During this time there will be workshops and exciting sessions from our sponsors, opportunities to network and pick up free merchandise, and a few fun games to provide a respite from hacking."
        },
        {
            question: "What are the challenges?",
            answer: "Our sponsors will outline their challenges in the opening talks, and you will have the opportunity to ask them questions and find out more about what they are looking for. The challenges will be a mix of short and open-ended software design briefs."
        },
        {
            question: "What kind of thing will I be building?",
            answer: "You can build anything you like, as long as it is related to the challenge you have chosen. This could be a website, an app, a game, or anything else you can think of. Submissions will be judged on things like creativity, innovative use of resources, and how well you have met the challenge brief."
        },
        {
            question: "What should I bring?",
            answer: "First of all, bring your laptop and charger! We want to make the event as sustainable as possible, so we encourage you to bring a reusable water bottle and coffee cup if you can. We will have some hygiene products available such as toothbrushes and deodorant, but we recommend you bring your own if you would prefer."
        },
        {
            question: "Is food and drink provided?",
            answer: "We will provide lunch and dinner on Saturday, a midnight snack, and breakfast and lunch on Sunday, as well as snacks, drinks, and coffee throughout. There will be a variety of options to cater for all dietary requirements - please fill out dietary requirements on your ticket registration, and email or DM us if you have any questions or worries."
        },
        {
            question: "Can I bring my own food?",
            answer: "We will provide food and drink throughout the event, but you are welcome to bring your own snacks if you would like. Please don't bring any snacks that contain nuts or peanuts, as participants may have allergies."
        },
        {
            question: "Do I have to stay all night?",
            answer: "No, you can leave and come back whenever you like! We recommend you get some sleep, but if you want to stay all night and work on your project, that's up to you. We will have a quiet room available that you can nap in if you wish, so if you plan on doing this, you may want to bring a sleeping bag, blanket, or pillow."
        },
        {
            question: "Is it suitable for beginners?",
            answer: "Yes! We will have mentors available throughout the event to help you with any questions you have, and we will also have workshops to help you learn new skills. We encourage you to come along and give it a go, even if you have never been to a hackathon before."
        },
        {   question: "Why should I attend?",
            answer: "LeedsHack will be an amazing opportunity to challenge yourself to create something innovative in just 24 hours, picking up new skills and making friends along the way. You will also have the opportunity to talk to and attend workshops run by our sponsors, exciting tech companies offering internships and graduate roles, and hackathons also are a great thing to put on a CV and talk about in interviews."
        },
        {
            question: "How can I register?",
            answer: (
                <>
                    You can currently register <a href="https://universe.com/leedshack2025" className="text-blue-500 text-m underline font-jetbrains">here</a>. Registration will close on the 22nd of January.
                </>
            )
        },
        {
            question: "When will I know if I have a ticket?",
            answer: "We may be oversubscribed, so registration does not guarantee you a ticket. We will let you know if you have a ticket by the 29th of January."
        }

        
    ];
    const [openIndices, setOpenIndices] = useState<number[]>([]);

    const toggleParagraph = (index: number) => {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter(i => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    };
  
    return (
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-left space-y-6 p-4 md:p-24 bg-primary text-white overflow-y-auto scroll-smooth pt-12 md:pt-24">
            <Navbar />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8">
                <Image src="/images/leedshack/leedshack-logo.svg" alt="LeedsHack" className="mt-10 mb-8" width="800" height="428" />
                <Image src="/images/DateLocation.svg" alt="Date + Location" className="mt-10 mb-8 md:ml-10" width="600" height="321" />
            </div>
            {/* <div className="flex items-start">
                 <Image src="/images/leedsHackhero.svg" alt="LeedsHack" className = "mt-12" width="1800" height="428" />
            </div>
             */}
            <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-24 pt-4 pb-8">
                <img className="max-h-20 w-auto object-contain" src="/images/leedshack/snowflake-logo.png" alt="Snowflake" />
                <img className="max-h-20 w-auto object-contain" src="/images/leedshack/imdb-logo.png" alt="IMDb" />
                <img className="max-h-12 w-auto object-contain" src="/images/leedshack/pexip-logo-white.svg" alt="Pexip" />
                <img className="max-h-10 w-auto object-contain" src="/images/leedshack/hetzner-logo.svg" alt="Hetzner" />
                <img className="max-h-24 w-auto object-contain" src="/images/leedshack/the-data-city-logo-white.png" alt="The Data City" />
                <img className="max-h-16 w-auto object-contain" src="/images/leedshack/glean-logo.png" alt="Glean" />
                <img className="max-h-16 w-auto object-contain" src="/images/leedshack/rebuilding-society-logo.png" alt="Rebuilding Society" />
                
                <img className="max-h-12 w-auto object-contain" src="/images/leedshack/leeds-university-logo.png" alt="University of Leeds" />
            </div>
                <div className="relative mx-1 h-96 md:h-96">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <Image
                        src="/images/leedshack/banner.jpeg"
                        alt="Banner showing participants coding at a previous Computing Society event"
                        className="w-full h-full object-cover filter blur-sm"
                        width={2014}
                        height={547}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center p-4 md:p-8 space-y-4 md:space-y-8">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-bold leading-relaxed sm:leading-loose md:leading-loose lg:leading-loose text-white px-4 sm:px-8 md:px-12 lg:px-16">
                                Registration for LeedsHack is now open!
                            </p>
                            <a href="https://universe.com/leedshack2025">
                                <button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold rounded custom-bg custom-bg-hover">
                                    Register
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-left mt-4 underline underline-offset-8" style={{ textDecorationColor: '#48bc4c' }}>
                    LeedsHack TL;DR
                </h2>
                <div className="text-lg md:text-3xl text-left font-barlow">
                    <ul className="list-disc pl-5">
                        <li className="mb-4">
                            24-hour free hackathon in the Sir William Henry Bragg Building at the University of Leeds, supported by the School of Computing.
                        </li>
                        <li className="mb-4">
                            Students from across the UK will come together to innovate, collaborate, and create solutions in the fields of computer science and software engineering.
                        </li>
                        <li className="mb-4">
                            Our sponsors will set challenges in the form of short and open-ended software design briefs, to give you a starting point for your project. Then it&apos;s up to you to come up with a solution and build it.
                        </li>
                        <li className="mb-4">
                            Sponsors will host workshops and there will be plenty of networking opportunities.
                        </li>
                        <li className="mb-4">
                            Food and drink will be provided throughout the event.
                        </li>
                        <li className="mb-4">
                            Registration is now open until the 22nd of January. Please note that registration does not guarantee a ticket, and if we are oversubscribed, tickets will be allocated randomly. We will let you know if you have a ticket by the 29th of January.
                        </li>
                    </ul>                
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-left mt-4 underline underline-offset-8" style={{ textDecorationColor: '#48bc4c' }}>
                    Meet the sponsors
                </h2>
                <SponsorCarousel />
                <h2 className="text-2xl md:text-4xl font-bold text-left mt-4 underline underline-offset-8" style={{ textDecorationColor: '#48bc4c' }}>
                    Frequently asked questions
                </h2>
                <div>
                    {faq.map((item, index) => (
                        <div key={index} className="mb-4">
                            <h3
                                className="text-lg md:text-2xl font-bold text-left mt-4 cursor-pointer flex items-center"
                                onClick={() => toggleParagraph(index)}
                            >
                                {openIndices.includes(index) ? <FaChevronDown className="inline mr-2 text-sm" /> : <FaChevronRight className="inline mr-2 text-sm" />}
                                {item.question}
                            </h3>
                            {openIndices.includes(index) && (
                                <p className="text-lg md:text-2xl text-left font-barlow mt-2">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <p className="text-lg md:text-2xl text-left font-barlow mt-4">
                    If you&apos;ve got any more questions, please DM us on Instagram or email us at <a href="mailto:events@luucompsoc.co.uk" className="font-jetbrains text-blue-500 underline">
                        <span className="text-blue-500 underline">events@luucompsoc.co.uk</span>
                    </a>
                </p>
            </main>
        </div>
    );
}