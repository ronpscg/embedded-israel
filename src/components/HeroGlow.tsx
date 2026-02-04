export function HeroGlow() {
    return (
        <div className="absolute inset-0 z-[-15] overflow-hidden pointer-events-none">
            {/* Primary Blue/Teal Glow Inspired by Source Site */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-500/10 blur-[150px] rounded-full opacity-50 animate-pulse-slow"></div>

            {/* Edge Vignette Glows */}
            <div className="absolute top-0 inset-x-0 h-[20%] bg-gradient-to-b from-blue-900/10 to-transparent"></div>
            <div className="absolute bottom-0 inset-x-0 h-[20%] bg-gradient-to-t from-blue-900/10 to-transparent"></div>

            {/* Monospace Code Particles (Subtle) */}
            <div className="absolute inset-0 opacity-[0.05] font-mono text-[10px] select-none text-blue-300 grid grid-cols-4 gap-4 p-10 overflow-hidden leading-tight">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="whitespace-pre overflow-hidden">
                        {`0x${Math.random().toString(16).slice(2, 6)}  ${Math.random().toString(36).slice(2, 8)}\nMOV EAX, EBX\nKERNEL_INIT\nGPIO_MAP\nSPI_IRQ\nRTOS_SCHED`}
                    </div>
                ))}
            </div>
        </div>
    );
}
