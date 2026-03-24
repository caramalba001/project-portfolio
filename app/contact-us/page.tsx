'use client';

import { useState, FormEvent } from 'react';

// TODO: Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <main className="min-h-screen bg-black">
            {/* ── Hero Banner ─────────────────────────────────── */}
            <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
                {/* Background video (no loop, freezes on last frame) */}
                <video
                    autoPlay
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover bg-black"
                >
                    <source src="/images/contact-us.mp4" type="video/mp4" />
                </video>
                {/* Dark gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" /> */}

                {/* Hero text */}
                <div className="relative z-10 text-center px-6">
                    <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] leading-snug drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        Hello.
                        <br />
                        Let&apos;s work together
                        <br />
                        on your next project.
                    </h1>
                </div>
            </section>

            {/* ── Contact Content ──────────────────────────────── */}
            <section className="relative bg-zinc-900/60 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* ── Left: Company Info ────────────────── */}
                        <div className="flex flex-col justify-center">
                            {/* Mail icon */}
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8">
                                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h2 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-2">
                                For project inquiries
                            </h2>

                            <a
                                href="mailto:contact@fellowlab.co"
                                className="text-cyan-400 text-xl md:text-2xl font-semibold underline underline-offset-4 decoration-cyan-400/40 hover:decoration-cyan-400 transition-all mt-2 mb-1"
                            >
                                info@fellowlab.com
                            </a>

                            <p className="text-zinc-400 text-sm mt-1 mb-10">
                                or send a message via form
                            </p>

                            {/* Company Details */}
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-zinc-300 text-sm">+66 123 456 789</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-zinc-300 text-sm">Bangkok, Thailand</span>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Follow Us</p>
                                <div className="flex items-center gap-3">
                                    {/* LinkedIn */}
                                    <a href="https://linkedin.com/company/fellowlab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300" aria-label="LinkedIn">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a href="https://instagram.com/fellowlab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/5 transition-all duration-300" aria-label="Instagram">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>
                                    {/* Facebook */}
                                    <a href="https://facebook.com/fellowlab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300" aria-label="Facebook">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    {/* X / Twitter */}
                                    <a href="https://x.com/fellowlab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300" aria-label="X">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* ── Right: Contact Form ──────────────── */}
                        <div>
                            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-10 tracking-wider">
                                Contact
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* First & Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-zinc-400 text-sm mb-2">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            required
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                            className="w-full bg-transparent border-b border-zinc-600 text-white pb-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-600"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-zinc-400 text-sm mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            required
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                            className="w-full bg-transparent border-b border-zinc-600 text-white pb-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-600"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-zinc-400 text-sm mb-2">
                                        Email <span className="text-cyan-400">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-zinc-600 text-white pb-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-zinc-600"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-zinc-400 text-sm mb-2">
                                        Write a message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-transparent border-b border-zinc-600 text-white pb-2 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none placeholder:text-zinc-600"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="px-10 py-3 bg-zinc-700 hover:bg-cyan-500 text-white font-semibold rounded-full text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : 'Submit'}
                                </button>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <p className="text-emerald-400 text-sm flex items-center gap-2 fade-in-up">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Message sent successfully! We&apos;ll get back to you soon.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm flex items-center gap-2 fade-in-up">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Something went wrong. Please try again or email us directly.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
