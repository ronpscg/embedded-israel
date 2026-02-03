import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    const linkClass = (path: string) =>
        `text-sm font-medium transition-colors ${isActive(path) ? 'text-white' : 'text-gray-300 hover:text-white'}`;

    const mobileLinkClass = (path: string) =>
        `block px-3 py-2 text-base font-medium rounded-md ${isActive(path) ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="h-10 w-auto">
                            {/* Fallback to text if image fails to load (can handle via onError later, but assuming file exists) */}
                            <img src={logoUrl} alt="Embedded Israel" className="h-full w-auto object-contain" onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('fallback-logo');
                            }} />
                            <div className="hidden fallback-logo flex items-center gap-2">
                                <div className="bg-secondary p-1.5 rounded-sm">
                                    <Cpu className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    EMBEDDED ISRAEL
                                </span>
                            </div>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link to="/" className={linkClass('/')}>Home</Link>
                        <Link to="/events" className={linkClass('/events')}>Events</Link>
                        <Link to="/training" className={linkClass('/training')}>Training</Link>
                        <Link to="/recordings" className={linkClass('/recordings')}>Recordings</Link>
                        <Link to="/about" className={linkClass('/about')}>About</Link>
                        <a
                            href="https://www.meetup.com/embedded-israel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary hover:bg-red-600 text-white text-sm font-medium rounded-md transition-colors"
                        >
                            Join Meetup
                        </a>
                    </nav>

                    <button
                        className="md:hidden text-gray-300 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className={mobileLinkClass('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/events" className={mobileLinkClass('/events')} onClick={() => setIsMenuOpen(false)}>Events</Link>
                        <Link to="/training" className={mobileLinkClass('/training')} onClick={() => setIsMenuOpen(false)}>Training</Link>
                        <Link to="/recordings" className={mobileLinkClass('/recordings')} onClick={() => setIsMenuOpen(false)}>Recordings</Link>
                        <Link to="/about" className={mobileLinkClass('/about')} onClick={() => setIsMenuOpen(false)}>About</Link>
                        <a
                            href="https://www.meetup.com/embedded-israel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center mt-4 px-4 py-3 bg-primary hover:bg-red-600 text-white font-medium rounded-md"
                        >
                            Join Meetup
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
