export function About() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">About Embedded Israel</h1>

            <div className="prose prose-invert prose-lg">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Embedded Israel is the premier professional community for Embedded Engineers and practitioners in Israel. We are a hub for those passionate about the intersection of hardware and software.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">Our Focus</h3>
                        <ul className="space-y-2 text-gray-400 list-disc pl-5">
                            <li>Embedded Linux & Kernel Development</li>
                            <li>Bare Metal Programming</li>
                            <li>Real-Time Operating Systems (RTOS)</li>
                            <li>Industrial IoT & Firmware</li>
                            <li>FPGA & Hardware Design</li>
                            <li>Cybersecurity for Embedded Systems</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">Our Activities</h3>
                        <ul className="space-y-2 text-gray-400 list-disc pl-5">
                            <li>Monthly Meetups</li>
                            <li>Deep-dive Technical Sessions</li>
                            <li>Annual Conference</li>
                            <li>Networking Events</li>
                            <li>Knowledge Sharing</li>
                        </ul>
                    </div>
                </div>

                <p className="text-gray-400">
                    Founded to bridge the gap between silicon and cloud, we organize events that bring together experts from top companies like AWS Annapurna Labs, NVIDIA, and innovative startups. Whether you are a veteran kernel hacker or a junior firmware engineer, you'll find your place here.
                </p>
            </div>
        </div>
    );
}
