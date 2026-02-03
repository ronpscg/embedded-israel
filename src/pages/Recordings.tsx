import { useState } from 'react';
import { VideoCard } from '../components/VideoCard';
import { Shuffle, Calendar, ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

interface Video {
    title: string;
    videoId: string;
    date: string;
}

const INITIAL_VIDEOS: Video[] = [
    {
        title: "Native Mobile Botnet & Anti Botnet Solutions - Presented by Ron Munitz",
        videoId: "kmaPtoCOKwM",
        date: "2023-11-15"
    },
    {
        title: "Understanding, Building and Researching Minimal Linux Systems",
        videoId: "JtQu3sLMsWk",
        date: "2023-09-20"
    },
    {
        title: "The Yocto Project 10 minute quick-start guide",
        videoId: "jFMK7NCXEiw",
        date: "2023-08-10"
    },
    {
        title: "Yocto Project quick start guide - tips, guidelines and pitfalls",
        videoId: "CZ2cVtAsBVI",
        date: "2023-07-05"
    },
    {
        title: "Yocto Project quick start - adding an external application",
        videoId: "fvcdcJMem-0",
        date: "2023-06-12"
    }
];

type SortMode = 'newest' | 'oldest' | 'az' | 'za';

export function Recordings() {
    const [videos, setVideos] = useState<Video[]>(INITIAL_VIDEOS);
    const [sortMode, setSortMode] = useState<SortMode>('newest');

    const handleSort = (mode: SortMode) => {
        setSortMode(mode);
        const sorted = [...videos].sort((a, b) => {
            switch (mode) {
                case 'newest':
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                case 'oldest':
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                case 'az':
                    return a.title.localeCompare(b.title);
                case 'za':
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });
        setVideos(sorted);
    };

    const handleShuffle = () => {
        setSortMode('newest'); // Reset sort mode display (optional logic)
        const shuffled = [...videos].sort(() => Math.random() - 0.5);
        setVideos(shuffled);
    };

    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Recorded Talks</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Watch replays of our meetups, tutorials, and deep dives into embedded systems.
                </p>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400 font-medium">Sort by:</span>
                        <div className="flex bg-black/20 rounded-md p-1">
                            <button
                                onClick={() => handleSort('newest')}
                                className={`p-2 rounded transition-colors ${sortMode === 'newest' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Newest First"
                            >
                                <Calendar className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleSort('oldest')}
                                className={`p-2 rounded transition-colors ${sortMode === 'oldest' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Oldest First"
                            >
                                <Calendar className="w-4 h-4 rotate-180" />
                            </button>
                            <button
                                onClick={() => handleSort('az')}
                                className={`p-2 rounded transition-colors ${sortMode === 'az' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="A-Z"
                            >
                                <ArrowDownAZ className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => handleSort('za')}
                                className={`p-2 rounded transition-colors ${sortMode === 'za' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
                                title="Z-A"
                            >
                                <ArrowUpAZ className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="h-6 w-px bg-white/10 hidden sm:block" />

                    <button
                        onClick={handleShuffle}
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors text-sm font-medium"
                    >
                        <Shuffle className="w-4 h-4" />
                        <span>Shuffle</span>
                    </button>

                    <div className="ml-auto text-sm text-gray-500">
                        {videos.length} videos
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <VideoCard
                        key={video.videoId}
                        title={video.title}
                        videoId={video.videoId}
                    />
                ))}
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://www.youtube.com/watch?v=kmaPtoCOKwM&list=PLBaH8x4hthVysdRTOlg2_8hL6CWCnN5l-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-md transition-colors"
                >
                    View Full Playlist on YouTube
                </a>
            </div>
        </div>
    );
}
