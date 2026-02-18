import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-slate-950 text-white shadow-xl backdrop-blur-sm bg-opacity-90 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105">
                            <div className="relative w-20 h-20">
                                <Image
                                    src="/images/logo.png?v=2"
                                    alt="Alcatar Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-12 flex items-baseline space-x-8">
                                <Link
                                    href="/"
                                    className="hover:text-sky-400 px-3 py-2 text-lg font-medium transition-colors tracking-wide"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/what-we-are"
                                    className="hover:text-sky-400 px-3 py-2 text-lg font-medium transition-colors tracking-wide"
                                >
                                    What We Are
                                </Link>
                                <Link
                                    href="/what-we-do"
                                    className="hover:text-sky-400 px-3 py-2 text-lg font-medium transition-colors tracking-wide"
                                >
                                    What We Do
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="hover:text-sky-400 px-3 py-2 text-lg font-medium transition-colors tracking-wide"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button could go here */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
