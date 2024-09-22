'use client'

import Navbar from '@/components/navbar';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !company || !message) {
            setSuccessMessage('');
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setSuccessMessage('');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, company, message }),
          });
        
          if (response.ok) {
            setErrorMessage('');
            setSuccessMessage('Thank you for your message!');
          } else {
            setSuccessMessage('');
            setErrorMessage('Something went wrong, please try again.');
          }
        
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col items-center space-y-6 p-4 md:p-24 bg-primary text-white">
            <Navbar />
            <h1 className="text-6xl font-bold text-center pt-6">Contact us</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label className="text-xl font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-xl font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="text-xl font-bold mb-2" htmlFor="company">
                        Company
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="text-xl font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
                <div className="flex flex-col items-start justify-center pt-4">
                    {errorMessage && <p className="bg-red-200 text-red-800 text-sm rounded px-3 py-1 inline-block">{errorMessage}</p>}
                    {successMessage && <p className="bg-green-200 text-green-800 text-sm rounded px-3 py-1 inline-block">{successMessage}</p>}
                </div>
            </form>
            </main>
        </div>
    );
};

export default ContactPage;