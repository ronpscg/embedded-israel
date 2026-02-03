import { EventCard } from '../components/EventCard';

export function Events() {
    return (
        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Events</h1>
            <p className="text-gray-400 mb-12">Join us for deep dives into embedded technology.</p>

            <div className="space-y-16">
                {/* Upcoming */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Upcoming Events
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <EventCard
                            title="Meetup #24: Embedded Debugging 2.0 – The AI Agent Perspective"
                            date="Feb 3, 2026"
                            time="9:00 PM IST"
                            location="Online"
                            link="https://www.meetup.com/embedded-israel/events/313085402/"
                        />
                        <EventCard
                            title="Meetup #19: Hardware and IoT Cybersecurity"
                            date="Feb 19, 2026"
                            time="5:30 PM IST"
                            location="TBA, Tel Aviv-Yafo"
                            link="https://www.meetup.com/embedded-israel/events/306359444/"
                        />
                    </div>
                </section>

                {/* Past */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">Past Events</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <EventCard
                            title="Embedded Israel Conference 2025"
                            date="Nov 12, 2025"
                            location="Tel Aviv"
                            isPast={true}
                            link="https://www.meetup.com/embedded-israel/events/308456687/"
                        />
                        <EventCard
                            title="Meetup #23: DevOps for Embedded Developers"
                            date="Jul 14, 2025"
                            location="Tel Aviv"
                            isPast={true}
                            link="https://www.meetup.com/embedded-israel/events/308779967/"
                        />
                        <EventCard
                            title="Meetup #22: Silicon to Cloud (AWS Annapurna Labs)"
                            date="Jun 11, 2025"
                            location="Haifa"
                            isPast={true}
                            link="https://www.meetup.com/embedded-israel/events/307817384/"
                        />
                        <EventCard
                            title="Meetup #21: The Kexec meetup"
                            date="May 21, 2025"
                            location="Tel Aviv"
                            isPast={true}
                            link="https://www.meetup.com/embedded-israel/events/307695255/"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
