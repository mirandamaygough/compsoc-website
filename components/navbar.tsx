import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-4xl font-bold text-center">Home</Link>
                <Link href="/events" className="text-4xl font-bold text-center">Events</Link>
                <Link href="/committee" className="text-4xl font-bold text-center">Committee</Link>
            </div>
        </nav>
    );
};

export default Navbar;