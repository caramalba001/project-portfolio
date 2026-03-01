import { topics } from '@/lib/data';
import TopicCard from '@/components/TopicCard';

export default function WhatWeDo() {
    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            {/* ── Hero Section ─────────────────────────────────── */}
            <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/8 rounded-full filter blur-[150px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/8 rounded-full filter blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
                </div>

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Hero content */}
                <div className="relative z-10 text-center px-6 max-w-5xl fade-in-up">
                    <span className="inline-block text-xs font-bold text-cyan-400 tracking-[0.3em] uppercase mb-6 border border-cyan-400/20 px-4 py-1.5 rounded-full bg-cyan-400/5">
                        Our Services
                    </span>
                    <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide">
                        What We Do
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Delivering enterprise-grade digital solutions through advanced data analytics,
                        intelligent automation, and custom application development.
                    </p>

                    {/* Scroll indicator */}
                    <div className="mt-12 animate-bounce">
                        <svg className="w-6 h-6 text-zinc-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* ── Service Cards Section ────────────────────────── */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 -mt-8 pb-24">
                {/* Section label */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
                    <span className="text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase">Explore Our Expertise</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((topic, index) => (
                        <div
                            key={topic.title}
                            className="fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* @ts-ignore */}
                            <TopicCard
                                title={topic.title}
                                description={topic.description}
                                icon={topic.icon}
                                slug={topic.slug}
                            />
                        </div>
                    ))}
                </div>

                {/* Cloud & Enterprise Partners */}
                <div className="mt-24 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-600 mb-12">Cloud & Enterprise Platforms We Work With</p>
                    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
                        {[
                            { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
                            { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                            { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                            { name: 'SAP', logo: '/images/partners/sap.svg' },
                            { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
                            { name: 'IBM', logo: '/images/partners/ibm.svg' },
                            { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
                            { name: 'Tencent Cloud', logo: '/images/partners/tencent.svg' },
                            { name: 'Alibaba Cloud', logo: '/images/partners/alibaba.svg' },
                        ].map((partner) => (
                            <div
                                key={partner.name}
                                className="flex flex-col items-center gap-3 group cursor-default"
                            >
                                <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] group-hover:border-cyan-400/20 group-hover:bg-white/[0.06] transition-all duration-300">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-10 h-10 object-contain brightness-0 invert opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                                    />
                                </div>
                                <span className="text-[10px] font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors uppercase tracking-wider">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
