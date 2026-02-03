import { Terminal, Shield, Smartphone, Server, Cpu, Database } from 'lucide-react';

interface TrainingCategoryProps {
    icon: React.ReactNode;
    title: string;
    items: string[];
}

function TrainingCategory({ icon, title, items }: TrainingCategoryProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-4 text-white">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    {icon}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Training() {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-bold text-white mb-6">Expert Training</h1>
                <p className="text-xl text-gray-300">
                    From Kernel Space to Cyber Security, we offer world-class training for individuals and teams.
                    Delivered by industry veterans.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <TrainingCategory
                    icon={<Terminal className="w-6 h-6" />}
                    title="Linux & Kernel"
                    items={[
                        "Linux Kernel Internals & Debugging",
                        "Embedded Linux Development (Yocto/Buildroot)",
                        "Linux System Development",
                        "Advanced Network Programming"
                    ]}
                />

                <TrainingCategory
                    icon={<Shield className="w-6 h-6" />}
                    title="Cyber Security"
                    items={[
                        "Applied Security & Blockchain",
                        "Reverse Engineering & Exploitation",
                        "Secure Coding Best Practices",
                        "Cryptography & Hardening"
                    ]}
                />

                <TrainingCategory
                    icon={<Smartphone className="w-6 h-6" />}
                    title="Android"
                    items={[
                        "Android Internals & Architecture",
                        "Android Security & Exploitation",
                        "Android Development Bootcamps",
                        "Enterprise Mobility Management"
                    ]}
                />

                <TrainingCategory
                    icon={<Cpu className="w-6 h-6" />}
                    title="Embedded & RTOS"
                    items={[
                        "Embedded/Real-time Programming",
                        "ARM Architecture & Security",
                        "FreeRTOS / Zephyr / VxWorks",
                        "Bare Metal Programming"
                    ]}
                />

                <TrainingCategory
                    icon={<Server className="w-6 h-6" />}
                    title="Cloud & DevOps"
                    items={[
                        "Virtualization Internals (KVM, Xen)",
                        "Docker & Kubernetes",
                        "CI/CD Pipelines",
                        "Git & Gerrit Workshops"
                    ]}
                />

                <TrainingCategory
                    icon={<Database className="w-6 h-6" />}
                    title="Advanced Tech"
                    items={[
                        "Data Science & Deep Learning",
                        "Industrial Control Systems & SCADA",
                        "FPGA Development (Xilinx/Intel)",
                        "MacOS & iOS Internals"
                    ]}
                />
            </div>

            <div className="bg-gradient-to-r from-blue-900/40 to-primary/20 border border-white/10 rounded-2xl p-8 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">Interested in a Course?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Most of our training is tailored to specific customer needs. Contact us to get a quote or a detailed outline for any of our courses.
                </p>
                <a
                    href="mailto:training@thepscg.com"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-red-600 rounded-md transition-colors"
                >
                    Contact Training Team
                </a>
            </div>
        </div>
    );
}
