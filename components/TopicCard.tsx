import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  bgColor?: string;
  slug: string;
}

export default function TopicCard({ title, description, icon: Icon, slug }: TopicCardProps) {
  return (
    <Link href={`/topics/${slug}`} className="block h-full group">
      <div className={`relative h-full overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 border border-zinc-800 bg-zinc-900 shadow-sm flex flex-col`}>
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-900/10 rounded-bl-[4rem] -z-10 transition-transform duration-500 group-hover:scale-110" />

        <div className="h-full flex flex-col">
          <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-cyan-900/20 transition-colors duration-500">
            <Icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500" strokeWidth={1.5} />
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          {description && (
            <p className="text-base text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
              {description}
            </p>
          )}

          <div className="mt-auto pt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
