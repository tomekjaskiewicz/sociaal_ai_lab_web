import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import fm from 'front-matter';

const Agenda = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const importEvents = async () => {
            const modules = import.meta.glob('../content/events/*.md', { query: '?raw', import: 'default' });
            const eventList = await Promise.all(
                Object.entries(modules).map(async ([path, loader]) => {
                    const content = await loader();
                    const { attributes, body } = fm(content);
                    return {
                        ...attributes,
                        description: body,
                        // Extract filename as id if needed, or slug
                        slug: path.split('/').pop().replace('.md', '')
                    };
                })
            );
            // Sort by date descending
            eventList.sort((a, b) => new Date(b.date) - new Date(a.date));
            setEvents(eventList);
        };

        importEvents();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-sociaal-green mb-12">Agenda</h1>

            <div className="space-y-12">
                {events.length > 0 ? (
                    events.map((event, idx) => (
                        <EventCard
                            key={idx}
                            title={event.title}
                            date={new Date(event.date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                            location={event.location}
                            description={event.description}
                            image={event.image}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500 italic">Geen evenementen gevonden.</p>
                )}
            </div>
        </div>
    );
};

export default Agenda;
