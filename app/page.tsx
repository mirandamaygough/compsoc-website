'use client';

import { Event, EventCard } from "../components/events-card";
import Navbar from "../components/navbar";
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';
import { EventsCarousel } from "@/components/events-carousel";
import Image from 'next/image';
import { LuInstagram, LuUserPlus, LuMail } from "react-icons/lu";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then((data: Event[]) => {
        const now = new Date();
        const upcomingEvents = data
          .filter(event => new Date(`${event.date}T${event.time}`).getTime() > now.getTime())
          .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime())
          .slice(0, 3);
        setEvents(upcomingEvents);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center space-y-6 p-4 md:p-24 bg-primary text-white">
        <Navbar />
        
        <div className="pt-14 flex flex-col md:flex-row items-center justify-between w-full space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 order-2 md:order-1">
            <h1 className="text-6xl md:text-8xl px-4 font-bold md:px-10 mt-10 leading-loose">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Leeds Computing Society')
                    .pauseFor(2500)
                    .callFunction(() => {
                      const typewriterWrapper = document.querySelector('.Typewriter__wrapper');
                      if (typewriterWrapper) {
                        typewriterWrapper.innerHTML = 'Leeds Computing Society';
                      }
                    })
                    .start();
                }}
              />
            </h1>
            <p className="text-2xl px-4 mt-4 md:px-10 font-barlow">
                Welcome to the website of the University of Leeds Computing Society!
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <Image src="/images/homepage-hero-art.png" alt="Hero Image" className="w-full h-auto mt-[-30px] md:mt-0" height="1110" width="1382"/>
          </div>
        </div>
        <div className="w-full items-left">
        <h2 className="text-4xl font-bold text-left pt-8 mb-4">About us</h2>
        <p className="text-2xl text-left pb-12 font-barlow">
          We are the official student computing society of the University of Leeds. We work with the School of Computing and local companies to run a range of fun events and socials, so there&apos;s something for everyone.
        </p>
        <h2 className="text-4xl font-bold text-left mb-4">Upcoming events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventsCarousel events={events} />
        </div>
        <h2 className="text-4xl font-bold text-left pt-8 mb-4">Links</h2>
        <div className="flex flex-col items-start space-y-6">
          <a href="https://www.instagram.com/luucompsoc" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
            <LuInstagram className="w-6 h-6 md:w-8 md:h-8" />
            <span className="text-2xl underline">@luucompsoc on Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/luu-compsoc/" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
            <FaLinkedin size="2em" />
            <span className="text-2xl underline">Leeds Computing Society on Linkedin</span>
          </a>
          <a href="https://discord.com/invite/fAneEKuHqs" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
            <FaDiscord size="2em" />
            <span className="text-2xl underline">Leeds Computing Society on Discord</span>
          </a>
          <a href="https://engage.luu.org.uk/groups/PQ3/compsoc" target="_blank" rel="noreferrer" className="flex items-center space-x-2">
            <LuUserPlus size="2em" />
            <span className="text-2xl underline">LUU Engage for membership and event tickets</span>
          </a>
          <a href="mailto:committee@luucompsoc.co.uk" className="flex items-center space-x-2">
          <LuMail size="2em" />
          <span className="text-2xl underline break-all">
            committee@luucompsoc.co.uk for enquiries
          </span>
        </a>
        </div>
        </div>
      </main>

      {/* <footer className="bg-black w-full mt-auto text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap">Leeds Computing Society</span>
            </div>
          </div>
        </div>
      </footer> */}
    
    </div>
  );
}
