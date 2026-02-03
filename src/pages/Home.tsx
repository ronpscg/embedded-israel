import { ArrowRight, Cpu, CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventCard } from '../components/EventCard';
import logoEI from '../assets/logo_ei_new.png';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,_var(--color-primary)_0%,_transparent_50%)] opacity-10"></div>

                <div className="relative z-10 animate-fade-in-up max-w-5xl mx-auto flex flex-col items-center">
                    {/* Tagline ABOVE logo */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-primary text-sm font-semibold mb-6 border-gold-glow">
                        <CircuitBoard className="w-4 h-4" />
                        <span className="tracking-widest uppercase text-xs">The Heart of Israel's Embedded Community</span>
                    </div>

                    {/* Smaller logo, closer to tagline */}
                    <div className="mb-6">
                        <img
                            src={logoEI}
                            alt="Embedded Israel"
                            className="h-28 md:h-40 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-none">
                        Connecting <span className="text-gradient-gold">Bits</span> to <span className="text-gradient-gold">Atoms</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                        Join 1,300+ engineers, makers, and innovators exploring the depths of Embedded Linux, Bare Metal, IoT, and FPGA technologies.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            to="/events"
                            className="px-8 py-3 bg-primary hover:bg-primary-dark text-black font-bold rounded-full transition-all hover:scale-105 flex items-center gap-2"
                        >
                            Next Meetup
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="https://www.meetup.com/embedded-israel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 glass-panel hover:bg-white/5 text-white font-bold rounded-full transition-all hover:scale-105 border border-white/10"
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
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Cpu className="w-10 h-10 text-secondary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Deep Tech</h3>
                        <p className="text-gray-400">
                            From Linux Kernel internals to Bare Metal debugging, we cover the hard stuff.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <CircuitBoard className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Hardware & IoT</h3>
                        <p className="text-gray-400">
                            Connecting software to the physical world with FPGA, RISC-V, and industrial IoT.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white font-black mb-4 text-sm">
                            1.3K
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Community</h3>
                        <p className="text-gray-400">
                            The largest community of Embedded Engineers in Israel. Network and learn.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
