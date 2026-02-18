import CompanyList from '@/components/CompanyList';

export default function WhatWeAre() {

    const companies = [
        { name: 'Pandora', logo: '/images/companies/pandora.png' },
        { name: 'Cpaxtra', logo: '/images/companies/cpaxtra.png' },
        { name: 'MakroPro', logo: '/images/companies/makropro.png' },
        { name: 'CPF', logo: '/images/companies/cpf.png' },
        { name: 'Viriyah', logo: '/images/companies/viriyah.png' },
        { name: 'PTG', logo: '/images/companies/ptg.png' },
        { name: 'Toyota', logo: '/images/companies/toyota.png' },
        { name: 'Thai Wah', logo: '/images/companies/thaiwah.png' }
    ];

    return (
        <main className="min-h-screen flex flex-col items-center p-8 sm:p-20 bg-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-20 w-80 h-80 bg-sky-900 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl flex flex-col gap-12">
                <header className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white border-b-4 border-sky-400 pb-4 inline-block">
                        What We Are
                    </h1>
                    <p className="mt-6 text-xl text-zinc-400 max-w-3xl leading-relaxed">
                        We are a team of dedicated professionals committed to delivering excellence.
                        Trusted by industry leaders to drive innovation and transformation.
                    </p>
                </header>

                <section>
                    <h2 className="text-2xl font-semibold mb-8 text-zinc-200">Our Trusted Partners</h2>
                    {/* Companies Section moved here */}
                    <CompanyList companies={companies} />
                </section>
            </div>
        </main>
    );
}
