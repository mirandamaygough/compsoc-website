import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="mt-[-30px]">
            <div className="flex items-center space-x-20">
                <Link href="/" className="text-4xl font-bold text-center group">
                    Home
                    <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300"></span>
                </Link>
                <Link href="/events" className="text-4xl font-bold text-center group">
                    Events
                    <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300"></span>
                </Link>
                <Link href="/committee" className="text-4xl font-bold text-center group">
                    Committee
                    <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300"></span>
                </Link>
                <Link href="/contact" className="text-4xl font-bold text-center group">
                    Contact
                    <span className="block h-1 bg-transparent group-hover:bg-CompSocBlue transition-all duration-300"></span>
                </Link>
            </div> 

        </nav>
    );
};

export default Navbar;