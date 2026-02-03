import { motion } from 'framer-motion';

export function CircuitBackground() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-background">
            {/* Ambient Ambient Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>

            {/* Circuit Lines SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Random Circuit Paths */}
                <path d="M 100 200 L 200 200 L 200 300" fill="none" stroke="var(--color-primary)" strokeWidth="1" className="animate-circuit" style={{ strokeDasharray: '100' }} />
                <path d="M 800 100 L 800 250 L 950 250" fill="none" stroke="var(--color-primary)" strokeWidth="1" className="animate-circuit" style={{ strokeDasharray: '100', animationDelay: '-2s' }} />
                <path d="M 400 600 L 450 600 L 450 750" fill="none" stroke="var(--color-primary)" strokeWidth="1" className="animate-circuit" style={{ strokeDasharray: '100', animationDelay: '-5s' }} />
                <path d="M 10% 80% L 15% 80% L 15% 90%" fill="none" stroke="var(--color-primary)" strokeWidth="1" className="animate-circuit" style={{ strokeDasharray: '100', animationDelay: '-7s' }} />
            </svg>

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        </div>
    );
}
