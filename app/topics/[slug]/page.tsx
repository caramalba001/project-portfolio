
import { getTopic } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const topic = getTopic(slug);

    if (!topic) {
        notFound();
    }



    return (
        <main className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Header */}
            <section className="relative pt-24 pb-16 px-6 lg:px-8">
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full filter blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <Link
                        href="/what-we-do"
                        className="inline-flex items-center text-zinc-500 hover:text-cyan-400 transition-colors mb-10 group"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to What We Do
                    </Link>

                    <div className="mb-12">
                        <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-4">
                            {topic.title}
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            {topic.description}
                        </p>
                    </div>


                </div>
            </section>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            </div>

            {/* Projects Section */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20">
                <div className="space-y-24">
                    {topic.projects.map((project: any, index: number) => (
                        <div
                            key={project.title}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}
                        >
                            {/* Project Info */}
                            <div className="flex-1 space-y-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-white">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>

                                {/* Sub-items list */}
                                {project.items && (
                                    <ul className="space-y-3 pt-2">
                                        {project.items.map((item: string) => (
                                            <li key={item} className="flex items-center gap-3 text-zinc-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Sections (for Training) */}
                                {project.sections && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                                        {project.sections.map((section: any) => (
                                            <div key={section.heading}>
                                                <h4 className="text-lg font-bold text-white mb-3 border-l-2 border-cyan-400 pl-4">
                                                    {section.heading}
                                                </h4>
                                                <ul className="space-y-2 pl-4">
                                                    {section.items.map((item: string) => (
                                                        <li key={item} className="flex items-center gap-3 text-zinc-300">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.technologies.map((tech: string) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-full text-xs font-medium text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 text-center"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Image */}
                            <div className="flex-1 w-full group">
                                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50 transition-all duration-500 group-hover:border-cyan-400/20 group-hover:shadow-cyan-500/5">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-zinc-600">
                                            <span className="text-sm font-medium">{project.title}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Back to top CTA */}
            <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-12" />
                <div className="text-center">
                    <Link
                        href="/what-we-do"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 transition-all duration-300"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to What We Do
                    </Link>
                </div>
            </div>
        </main>
    );
}
