export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/images/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* No overlay — original video colors */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-6xl px-8">

        {/* Main Slogan — Futuristic Font */}
        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider text-white drop-shadow-2xl leading-tight">
          We accelerate your growth through{' '}
          <span className="text-white">
            digital transformation
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="/what-we-do"
            className="px-8 py-3 bg-cyan-400 text-zinc-950 font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] tracking-wider text-sm uppercase"
          >
            Explore Our Work
          </a>
          <a
            href="/contact-us"
            className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 tracking-wider text-sm uppercase"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </main>
  );
}
