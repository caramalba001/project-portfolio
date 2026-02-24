import Image from 'next/image';
import CompanyList from '@/components/CompanyList';

const stats = [
    {
        number: '100+',
        label: 'Projects Delivered',
        description: 'Successfully completed projects across diverse industries',
        gradient: 'from-sky-400 to-blue-600',
    },
    {
        number: '20+',
        label: 'Leading Companies',
        description: 'Trusted by top-tier enterprises and industry leaders',
        gradient: 'from-violet-400 to-purple-600',
    },
    {
        number: '8+',
        label: 'Years of Experience',
        description: 'Delivering excellence and innovation since day one',
        gradient: 'from-emerald-400 to-teal-600',
    },
];

export default function WhoWeAre() {
    const companies = [
        { name: 'Pandora', logo: '/images/companies/pandora.png' },
        { name: 'Cpaxtra', logo: '/images/companies/cpaxtra.png' },
        { name: 'MakroPro', logo: '/images/companies/makropro.png' },
        { name: 'CPF', logo: '/images/companies/cpf.png' },
        { name: 'Viriyah', logo: '/images/companies/viriyah.png' },
        { name: 'PTG', logo: '/images/companies/ptg.png' },
        { name: 'Toyota', logo: '/images/companies/toyota.png' },
        { name: 'Thai Wah', logo: '/images/companies/thaiwah.png' },
        { name: 'GPSC', logo: '/images/companies/gpsc.png' },
        { name: 'Harmless Harvest', logo: '/images/companies/harmless-harvest.png' },
        { name: 'Mitr Phol', logo: '/images/companies/mitrphol.png' },
        { name: 'PTT', logo: '/images/companies/ptt.png' },
        { name: 'Telehealth', logo: '/images/companies/telehealth.png' },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center bg-white relative overflow-hidden">
            {/* Hero section with astronaut background */}
            <div className="relative w-full">
                <div className="relative w-full h-[600px] md:h-[700px]">
                    <Image
                        src="/images/who-we-are-bg.png"
                        alt="Astronaut pointing"
                        fill
                        className="object-cover object-center"
                        priority
                        unoptimized
                    />
                    {/* Text positioned where the astronaut points (right side) */}
                    <div className="absolute right-8 sm:right-16 md:right-24 top-1/2 -translate-y-1/4 z-10 max-w-md md:max-w-lg">
                        <h1 className="font-orbitron text-3xl md:text-4xl font-bold uppercase tracking-wider text-zinc-800 leading-tight mb-6">
                            Who We Are
                        </h1>
                        <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                            We help businesses scale by turning digital technology into sustainable growth.
                            As a premier tech consulting firm, we don&apos;t just implement tools—we build
                            the digital ecosystems that empower industry leaders to innovate and dominate.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="relative z-10 w-full max-w-7xl px-8 sm:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg border border-zinc-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient accent bar */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                            {/* Glow effect on hover */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r ${stat.gradient} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl`}></div>

                            <div className="relative">
                                <span className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                                    {stat.number}
                                </span>
                                <h3 className="text-xl font-bold text-zinc-900 mt-3">
                                    {stat.label}
                                </h3>
                                <p className="text-zinc-500 mt-2 leading-relaxed text-sm">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Companies Section */}
            <div className="relative z-10 w-full max-w-7xl px-8 sm:px-20 pb-20">
                <h2 className="text-2xl font-bold mb-8 text-zinc-900">
                    Industry Experience
                </h2>
                <CompanyList companies={companies} />
            </div>
        </main>
    );
}
