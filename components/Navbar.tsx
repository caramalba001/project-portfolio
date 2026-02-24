'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Hamburger menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="text-white hover:text-cyan-400 transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center space-x-10 absolute left-1/2 -translate-x-1/2">
                        <Link
                            href="/"
                            className="text-white hover:text-cyan-400 text-sm font-medium transition-colors tracking-wider uppercase"
                        >
                            Home
                        </Link>
                        <Link
                            href="/who-we-are"
                            className="text-white hover:text-cyan-400 text-sm font-medium transition-colors tracking-wider uppercase"
                        >
                            Who we are
                        </Link>
                        <Link
                            href="/what-we-do"
                            className="text-white hover:text-cyan-400 text-sm font-medium transition-colors tracking-wider uppercase"
                        >
                            What we Do
                        </Link>
                        <Link
                            href="/contact-us"
                            className="text-white hover:text-cyan-400 text-sm font-medium transition-colors tracking-wider uppercase"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Brand name on right */}
                    <Link href="/" className="text-white text-lg font-bold tracking-widest hover:text-cyan-400 transition-colors">
                        Alcatar
                    </Link>
                </div>
            </div>

            {/* Dropdown menu — works on all screen sizes */}
            {mobileOpen && (
                <div className="bg-black/95 backdrop-blur-lg border-t border-white/10">
                    <div className="flex flex-col space-y-1 px-6 py-4">
                        <Link
                            href="/"
                            onClick={() => setMobileOpen(false)}
                            className="text-white hover:text-cyan-400 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/who-we-are"
                            onClick={() => setMobileOpen(false)}
                            className="text-white hover:text-cyan-400 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
                        >
                            Who we are
                        </Link>
                        <Link
                            href="/what-we-do"
                            onClick={() => setMobileOpen(false)}
                            className="text-white hover:text-cyan-400 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
                        >
                            What we Do
                        </Link>
                        <Link
                            href="/contact-us"
                            onClick={() => setMobileOpen(false)}
                            className="text-white hover:text-cyan-400 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
