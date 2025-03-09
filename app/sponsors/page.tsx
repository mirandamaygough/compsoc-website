'use client';

import Navbar from "../../components/navbar";
import Image from "next/image";

import { useEffect, useState } from 'react';


export default function Sponsors() {
    return (
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-left space-y-6 p-4 md:p-24 bg-primary text-white">
            <Navbar />
            <h1 className="text-6xl font-bold text-left pt-6">Our sponsors</h1>
            <p className="text-2xl text-left font-barlow">
              We work with a range of sponsors to provide our members with opportunities to network, develop their skills, and connect with industry. If you are interested in sponsoring us, please get in touch.
            </p>
            <div className="w-full">
                <h2 className="text-5xl font-bold text-left mb-4">TPP</h2>
                <div className="flex flex-col items-start lg:items-left lg:space-x-0">
                    <div className="w-full lg:w-1/5 mb-4 lg:mb-0">
                        <Image src="/images/sponsors/tpp-logo.jpg" alt="TPP logo" width="800" height="493" layout="responsive" />
                    </div>
                    <p className="font-barlow text-2xl lg:mt-4">
                        TPP is a world-leader in digital health; from apps enabling patients to manage their own care to comprehensive hospital solutions, TPP has been delivering technology that connects everyone in healthcare delivery for over twenty years.
                    </p>
                </div>
                <h3 className="text-4xl font-bold text-left mt-6">Graduate opportunities at TPP</h3>
                <div>
                    <h4 className="text-3xl font-bold text-left mt-4 mb-2">Technical System Administrator</h4>
                    <p className="font-barlow text-xl mb-2">
                        TPP are currently looking for bright graduates to join their close-knit technical team, this diverse role will allow you to kick start your career in the tech industry. Don&pos;t be put off by the breadth of this role as on the job training will be provided in all areas listed below:
                    </p>
                    <ul className="list-disc list-inside font-barlow text-xl mb-2 ml-4">
                        <li>SQL Server DBA - optimisation, upgrading & managing</li>
                        <li>Cyber Security & Networks - research & implementation</li>
                        <li>Hardware - projects to test & upgrade both hands on & remotely</li>
                        <li>Scoping and building global infrastructure for mobile patient apps</li>
                        <li>Windows & Server Administration - patching & performance testing</li>
                    </ul>
                    <p className="font-barlow text-xl mb-2">
                        You will actively participate in the designing, maintaining and upgrading of services that are critical to the NHS and many healthcare organisations around the world. You will be working as a team to address the current challenges such as the rapid expansion of their mobile apps and AI as they scale on an international level. You will also have the opportunity to travel internationally to scope out data centres, design and size new projects and join in on technical discussions at government level. If you enjoy solving technical problems, have an interest in technology and thrive in a fast-paced environment then this role is for you.
                    </p>
                    <p className="font-barlow text-xl mb-2">
                    To apply, please visit <a href="https://tpp-careers.com/roles/technical-systems-administrator/" className="font-jetbrains text-blue-500 underline">tpp-careers.com/roles/technical-systems-administrator/</a>.
                    </p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-left mt-6 mb-2">Graduate Software Developer</h4>
                    <p className="font-barlow text-xl mb-2">
                    TPP are looking for bright and geeky graduates to join their Software Developer team. No experience is required, and many of their successful applicants have never programmed before. If you think logically and enjoy problem solving, then you have the potential to become a great developer. A career at TPP will challenge you every day. In your first few weeks you will be solving real-world problems as you help to develop software used by healthcare professionals and patients across the world. 
                    </p>
                    <p className="font-barlow text-xl mb-2">
                    You&apos;ll be part of an agile development team, working on one of the largest real-time databases in the world. You&apos;ll work on a wide variety of projects, ranging from AI assisting clinicians with early diagnosis of cancer to an iOS app helping patients manage their diabetes. Developers at TPP are involved in the full software cycle, and work closely with all teams across the company to scope out new projects and design, develop and deploy products.
                    </p>
                    <p className="font-barlow text-xl mb-2">
                        To apply, please visit <a href="https://tpp-careers.com/roles/graduate-software-developer/" className="font-jetbrains text-blue-500 underline">tpp-careers.com/roles/graduate-software-developer/</a>.
                    </p>
                </div>
                <div>
                    <h4 className="text-3xl font-bold text-left mt-6 mb-2">Graduate Business Analyst</h4>
                    <p className="font-barlow text-xl mb-2">
                    TPP are looking for bright and driven graduates from all disciplines to work on exciting projects in their Analyst team. You will work across a range of healthcare settings to understand requirements, and then collaborate with Software Developers to design new functionality. The role combines aspects of business analysis, systems analysis, and project management.</p>
                    <p className="font-barlow text-xl mb-2">
                    The variety of projects means that you will always have something new to learn. Your first project could be working on functionality to help a hospital manage patient flow in a busy emergency department. On the next, you could be designing and deploying an app for patients in rural communities in China. </p>
                    <p className="font-barlow text-xl mb-2">
                    To apply, please visit <a href="https://tpp-careers.com/roles/business-analyst/" className="font-jetbrains text-blue-500 underline">tpp-careers.com/roles/business-analyst/</a>
                    </p>
                </div>
                </div>
                
        </main>
        </div>
    )
}