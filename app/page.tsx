export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
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
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 fade-in-up text-center max-w-5xl -mt-20">

        {/* Slogan */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white drop-shadow-lg leading-tight">
          We accelerate your growth through <span className="text-sky-400">digital transformation</span>
        </h1>

      </div>
    </main>
  );
}
