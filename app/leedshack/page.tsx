'use client';

import Navbar from "../../components/navbar";
import Image from "next/image";

import { useEffect, useState } from 'react';


export default function Leedshack() {
    return (
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-left space-y-6 p-4 md:p-24 bg-primary text-white">
            <Navbar />
            {/* <div className="flex items-start">
                 <Image src="/images/LeedsHackLogo.svg" alt="LeedsHack" className = "mt-8 mb-8" width="800" height="428" />
            </div> */}
            <div className="flex items-start">
                 <Image src="/images/leedsHackhero.svg" alt="LeedsHack" className = "mt-8 mb-8" width="1800" height="428" />
            </div>
            <p className="text-2xl text-left font-barlow">
                We&apos;re excited to announce that on February 8-9th, we will be hosting LeedsHack 2025 at the University of Leeds!
            </p>
            <h2 className="text-4xl font-bold text-left mt-4">What is LeedsHack?</h2>
            <p className="text-2xl text-left font-barlow">
                LeedsHack is a 24-hour hackathon in the Sir William Henry Bragg Building at the University of Leeds where students from across the UK will come together to innovate, collaborate, and create solutions in the fields of computer science and software engineering.
                We will set challenges, as will our sponsors, to give you a starting point for your project. Then it&apos;s up to you to come up with a solution and build it.
                This is your chance to challenge yourself, learn new skills, connect with like-minded peers, and build your network. It is completely free and food and drink will be provided throughout!
            </p>
            <h2 className="text-4xl font-bold text-left mt-4">Who can participate?</h2>
            <p className="text-2xl text-left font-barlow">
                If you&apos;re a student at a university in the UK, you&apos;re eligible to participate in LeedsHack. Whether you&apos;re a beginner or an experienced hacker, we welcome all skill levels. Teams will be of up to 4 people, you can either come with a team or we can help you find one on the day.
            </p>
            <h2 className="text-4xl font-bold text-left mt-4">How can I register?</h2>
            <p className="text-2xl text-left font-barlow">
                Registration will be open soon! Keep an eye on our social media channels for updates.
            </p>
            <h2 className="text-4xl font-bold text-left mt-4">What if my organisation wants to sponsor LeedsHack?</h2>
            <p className="text-2xl text-left font-barlow">
                If you&apos;re interested in sponsoring LeedsHack, please get in touch with us at <a href="mailto:events@luucompsoc.co.uk" className="font-jetbrains text-blue-500 underline">
                    <span className="text-blue-500 underline">events@luucompsoc.co.uk</span>
                </a>
            </p>
        </main>
        </div>
    );
}