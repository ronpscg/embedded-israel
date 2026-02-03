import logoPscgNew from '../assets/logo_pscg_new.png';

export function About() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-black text-white mb-8 tracking-tighter">About Embedded Israel</h1>

            <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    Embedded Israel is the premier professional community for Embedded Engineers and practitioners in Israel. We are a hub for those passionate about the intersection of hardware and software.
                </p>

                <p className="text-gray-400 mb-12">
                    Founded to bridge the gap between silicon and cloud, we organize events that bring together experts from top companies. Whether you are a veteran kernel hacker or a junior firmware engineer, you'll find your place here.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/20 transition-colors">
                        <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">Our Focus</h3>
                        <ul className="space-y-2 text-gray-400 list-disc pl-5 text-sm">
                            <li>Embedded Linux & Kernel Development</li>
                            <li>Bare Metal Programming</li>
                            <li>Real-Time Operating Systems (RTOS)</li>
                            <li>Industrial IoT & Firmware</li>
                            <li>FPGA & Hardware Design</li>
                            <li>Cybersecurity for Embedded Systems</li>
                        </ul>
                    </div>

                    <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/20 transition-colors">
                        <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">Our Activities</h3>
                        <ul className="space-y-2 text-gray-400 list-disc pl-5 text-sm">
                            <li>Monthly Meetups</li>
                            <li>Deep-dive Technical Sessions</li>
                            <li>Annual Conference</li>
                            <li>Networking Events</li>
                            <li>Knowledge Sharing</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Leadership</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Embedded Israel was founded and is led by <span className="text-white font-bold">Ron Munitz</span>, a world-renowned expert in system internals and security. Under his leadership, the community has grown into a powerhouse of knowledge and collaboration, bridging the gap between hardware and software.
                    </p>
                </div>

                <div className="p-8 glass-panel border-gold-glow rounded-3xl mb-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                        <a
                            href="https://www.thepscg.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition-transform hover:scale-110 duration-300"
                        >
                            <img
                                src={logoPscgNew}
                                alt="The PSCG"
                                className="h-20 md:h-28 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,191,0,0.4)]"
                            />
                        </a>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-gradient-gold mb-3 uppercase tracking-tighter">Powered by The PSCG</h3>
                        <p className="text-gray-300 leading-relaxed">
                            The community is professionally supported by <span className="text-white font-bold">The Premium Software Consulting Group (PSCG)</span>, Ron Munitz's elite consulting firm. The PSCG is a trusted training partner for industry giants like <span className="text-white font-bold">ARM</span> and <span className="text-white font-bold">The Linux Foundation</span>, providing top-tier professional services and high-end training globally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
