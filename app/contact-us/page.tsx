export default function ContactUs() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-black relative overflow-hidden">
            <div className="relative z-10 w-full max-w-4xl text-center">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
                    Contact Us
                </h1>
                <p className="text-xl text-zinc-400 mb-12">
                    We'd love to hear from you. Get in touch with us for any inquiries.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                    <div className="bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-800">
                        <h3 className="font-bold text-lg text-sky-500 mb-2">Email</h3>
                        <p className="text-zinc-200">contact@alcatar.com</p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-800">
                        <h3 className="font-bold text-lg text-sky-500 mb-2">Phone</h3>
                        <p className="text-zinc-200">+1 (555) 123-4567</p>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-800 md:col-span-2">
                        <h3 className="font-bold text-lg text-sky-500 mb-2">Address</h3>
                        <p className="text-zinc-200">123 Innovation Drive, Tech Valley, CA 90210</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
