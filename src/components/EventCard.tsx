import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

interface EventCardProps {
    title: string;
    date: string;
    time?: string;
    location: string;
    isPast?: boolean;
    link?: string;
}

export function EventCard({ title, date, time, location, isPast = false, link }: EventCardProps) {
    const Wrapper = link ? 'a' : 'div';
    const wrapperProps = link ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block h-full"
    } : { className: "block h-full" };

    return (
        <Wrapper {...wrapperProps}>
            <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors h-full ${isPast ? 'opacity-70 hover:opacity-100' : ''}`}>
                <div className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-4 flex-1">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>{date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-start justify-between gap-2">
                                <span>{title}</span>
                                {link && <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />}
                            </h3>

                            <div className="space-y-2 text-sm text-gray-400">
                                {time && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span>{time}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative circuit line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-y-1 group-hover:translate-y-0 transition-transform" />
            </div>
        </Wrapper>
    );
}
