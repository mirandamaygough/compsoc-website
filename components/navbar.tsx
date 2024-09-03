"use client";

// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//         <nav className="fixed top-0 left-0 w-full bg-primary z-50 md:static md:mt-[-30px]">
//             <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
//                 <div className="flex justify-between w-full md:hidden">
//                     <button onClick={toggleMenu} className="text-white focus:outline-none mt-4">
//                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                         </svg>
//                     </button>
//                 </div>
//                 <div className={`flex-1 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-20 ${isOpen ? 'block' : 'hidden'} md:flex`}>
//                     <Link href="/" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
//                         Home
//                         <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
//                     </Link>
//                     <Link href="/events" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
//                         Events
//                         <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
//                     </Link>
//                     <Link href="/committee" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
//                         Committee
//                         <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
//                     </Link>
//                     <Link href="/contact" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
//                         Contact
//                         <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//         {isOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
//         )}
//     </>
//     );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-primary z-50 md:static md:mt-[-30px]">
                <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
                    <div className="flex justify-between w-full md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none mt-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`flex-1 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-20 ${isOpen ? 'block' : 'hidden'} md:flex`}>
                        <Link href="/" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
                            Home
                            <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
                        </Link>
                        <Link href="/events" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
                            Events
                            <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
                        </Link>
                        <Link href="/committee" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
                            Committee
                            <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
                        </Link>
                        <Link href="/contact" className="group flex flex-col items-center text-4xl font-bold text-center group" onClick={() => setIsOpen(false)}>
                            Contact
                            <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300 w-full"></span>
                        </Link>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
            )}
        </>
    );
};

export default Navbar;