import { topics } from '@/lib/data';
import TopicCard from '@/components/TopicCard';



export default function WhatWeDo() {



    return (
        <main className="min-h-screen relative flex flex-col items-center justify-center p-8 sm:p-20 overflow-hidden bg-black text-white transition-colors duration-300">


            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                {/* Header Section - Grid Aligned */}
                <header className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mb-16 items-end">
                    <div className="md:col-span-2">
                        <span className="block text-xs font-bold text-cyan-600 tracking-widest uppercase mb-2">My Work</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none">
                            PORTFOLIO
                        </h1>
                    </div>
                    <div className="md:col-span-2 pb-2">
                        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg ml-auto md:ml-0">
                            Delivering enterprise-grade digital solutions through advanced data analytics and custom application development.
                        </p>
                    </div>
                </header>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mb-32">
                    {topics.map((topic) => (
                        <div key={topic.title} className="h-64 sm:h-80">
                            {/* @ts-ignore - Dynamic icon component type issue */}
                            <TopicCard
                                title={topic.title}
                                description={topic.description}
                                icon={topic.icon}
                                slug={topic.slug}
                            />
                        </div>
                    ))}
                </div>



                <footer className="mt-32 text-zinc-500 text-sm">
                    © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
                </footer>
            </div>
        </main>
    );
}
