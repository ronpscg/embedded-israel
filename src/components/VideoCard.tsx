import { Play, ExternalLink } from 'lucide-react';

interface VideoCardProps {
    title: string;
    videoId: string;
    playlistId?: string;
}

export function VideoCard({ title, videoId, playlistId = "PLBaH8x4hthVysdRTOlg2_8hL6CWCnN5l-" }: VideoCardProps) {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}&list=${playlistId}`;

    return (
        <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-xl overflow-hidden border border-white/10 bg-black/50 hover:border-primary/50 transition-colors"
        >
            <div className="aspect-video relative overflow-hidden">
                <img
                    src={thumbnailUrl}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current" />
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                    {title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <ExternalLink className="w-3 h-3" />
                    <span>Watch on YouTube</span>
                </div>
            </div>
        </a>
    );
}
