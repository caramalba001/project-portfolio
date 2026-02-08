
import { getTopic } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';

// This is correct in Next.js 15+, params is a Promise
export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const topic = getTopic(slug);

    if (!topic) {
        notFound();
    }

    const Icon = topic.icon;

    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-900 px-8 py-20">
            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-zinc-900 transition-colors mb-12">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back to Home
                </Link>

                <header className="mb-24">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 mb-6">
                        {topic.title}
                    </h1>
                    <p className="text-xl text-zinc-600 font-light max-w-2xl mb-8">
                        {topic.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 border-t border-zinc-200 pt-8">
                        {topic.stats && (
                            <div className="pr-6 border-r border-zinc-200">
                                <span className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Impact</span>
                                <span className="text-lg font-bold text-zinc-900">{topic.stats}</span>
                            </div>
                        )}

                        {topic.tags && (
                            <div className="flex gap-2">
                                {topic.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                <section className="grid grid-cols-1 gap-32">
                    {topic.projects.map((project, index) => (
                        <div key={project.title} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}>

                            {/* Mockup Layer */}
                            <div className="flex-1 w-full group perspective">
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform group-hover:rotate-y-2 group-hover:scale-105 bg-zinc-100 border border-zinc-200">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                    {/* Placeholder for actual project image */}
                                    <div className="w-full h-full flex items-center justify-center bg-zinc-200 text-zinc-400">
                                        <span className="text-lg font-medium">Project Mockup: {project.title}</span>
                                    </div>
                                    {/* Using next/image when real images are available:
                    <Image src={project.image} alt={project.title} fill className="object-cover" /> 
                  */}
                                </div>

                                {/* Decorative elements for "layers" */}
                                <div className="absolute -inset-4 bg-zinc-900/5 rounded-[2.5rem] -z-10 transform translate-x-4 translate-y-4 blur-xl transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
                            </div>

                            {/* Project Info */}
                            <div className="flex-1 space-y-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-zinc-900 mb-4">{project.title}</h3>
                                    <p className="text-lg text-zinc-600 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-600 shadow-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}
