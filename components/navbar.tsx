import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='pt-0'>
          
            <div className="flex items-center space-x-16">
                <Link href="/" className="text-4xl font-bold text-center">Home</Link>
                <Link href="/events" className="text-4xl font-bold text-center">Events</Link>
                <Link href="/committee" className="text-4xl font-bold text-center">Committee</Link>
                <Link href="/contact" className="text-4xl font-bold text-center">Contact</Link>
            </div>
       
        </nav>
    );
};

export default Navbar;