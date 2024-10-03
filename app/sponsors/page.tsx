'use client';

import {Event, EventCard} from "../../components/events-card";
import Navbar from "../../components/navbar";
import Image from "next/image";

import { useEffect, useState } from 'react';


export default function Sponsors() {
    return (
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-center space-y-6 p-4 md:p-24 bg-primary text-white">
            <Navbar />
            <h1 className="text-6xl font-bold text-center pt-6">Our sponsors</h1>
            <div className="w-full">
                <h2 className="text-4xl font-bold text-left">TPP</h2>
                <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4">
                    <div className="w-full lg:w-1/5">
                        <Image src="/images/sponsors/tpp-logo.jpg" alt="TPP logo" width="800" height="493"/>
                    </div>
                    <p className="mt-4 lg:mt-0">About TPP...</p>
                </div>
            </div>
        </main>
        </div>
    )
}