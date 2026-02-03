import { ArrowRight, Cpu, CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventCard } from '../components/EventCard';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        <CircuitBoard className="w-4 h-4" />
                        <span>The Heart of Israel's Embedded Community</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Bits</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Atoms</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                        Join 1,300+ engineers, makers, and innovators exploring the depths of Embedded Linux, Bare Metal, IoT, and FPGA technologies.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/events"
                            className="px-8 py-3 bg-primary hover:bg-red-600 text-white font-medium rounded-md transition-colors flex items-center gap-2"
                        >
                            Upcoming Events
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="https://www.meetup.com/embedded-israel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-md transition-colors"
                        >
                            Join Community
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Event Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Next Meetup</h2>
                    <EventCard
                        title="Meetup #24: Embedded Debugging 2.0 – The AI Agent Perspective"
                        date="Tuesday, February 3, 2026"
                        time="9:00 PM IST"
                        location="Online"
                        link="https://www.meetup.com/embedded-israel/events/313085402/"
                    />
                </div>
            </section>

            {/* Stats/Info Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Cpu className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Deep Tech</h3>
                        <p className="text-gray-400">
                            From Linux Kernel internals to Bare Metal debugging, we cover the hard stuff.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CircuitBoard className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Hardware & IoT</h3>
                        <p className="text-gray-400">
                            Connecting software to the physical world with FPGA, RISC-V, and industrial IoT.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white font-bold mb-4">
                            1.3K
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Growing Community</h3>
                        <p className="text-gray-400">
                            The largest community of Embedded Engineers in Israel. Network and learn.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
