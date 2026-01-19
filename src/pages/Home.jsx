import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Users, Hand } from 'lucide-react';
import fm from 'front-matter';
import homeData from '../content/home.json';
import EventCard from '../components/EventCard';
import { resolvePath } from '../utils/paths';

const Home = () => {
    // Helper to map icon name/index to component if needed
    const icons = [Lightbulb, Users, Hand];

    const [latestEvent, setLatestEvent] = useState(null);

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
                        slug: path.split('/').pop().replace('.md', '')
                    };
                })
            );
            // Sort by date descending
            eventList.sort((a, b) => new Date(b.date) - new Date(a.date));
            // Take the first one
            if (eventList.length > 0) {
                setLatestEvent(eventList[0]);
            }
        };

        importEvents();
    }, []);

    return (
        <>
            {/* Intro Section */}
            <section className="relative z-10 mt-8 px-4 mb-20">
                <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur shadow-xl rounded-xl p-8 md:p-12 mb-12">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                {homeData.hero_title.split('Sociaal AI Lab').map((part, i, arr) => (
                                    <span key={i}>
                                        {part}
                                        {i < arr.length - 1 && <span className="text-sociaal-green">Sociaal AI Lab</span>}
                                    </span>
                                ))}
                            </h1>
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                {homeData.hero_subtitle}
                            </h2>
                            <div className="text-gray-700 leading-relaxed mb-4 text-lg whitespace-pre-line">
                                {homeData.intro_text}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3 Columns */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {homeData.pillars.map((item, idx) => {
                        return (
                            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <div className="h-48 flex items-center justify-center bg-gray-50 p-6">
                                    <img src={resolvePath(item.image)} alt={item.title} className="max-h-full object-contain" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Mission */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center md:text-left">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                        {homeData.mission_text.split('gelijke kansen voor iedereen').map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i < arr.length - 1 && <strong className="text-sociaal-green">gelijke kansen voor iedereen</strong>}
                            </span>
                        ))}
                    </p>
                    <p className="text-sociaal-green text-2xl font-semibold italic">
                        "Kunstmatige Intelligentie? Technologie is pas echt slim als ze óók sociaal is."
                    </p>
                </div>
            </section>

            {/* Latest Event Section */}
            {latestEvent && (
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex justify-between items-end mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">Binnenkort in de agenda</h2>
                            <Link to="/agenda" className="text-sociaal-green font-semibold hover:underline flex items-center">
                                Bekijk volledige agenda <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                        <EventCard
                            title={latestEvent.title}
                            date={new Date(latestEvent.date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                            location={latestEvent.location}
                            description={latestEvent.description}
                            image={latestEvent.image}
                        />
                    </div>
                </section>
            )}

            {/* Contact CTA */}
            <section className="py-20 bg-gradient-to-r from-sociaal-green to-sociaal-light">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Heb je vragen of ideeën?</h2>
                    <Link to="/contact" className="inline-flex items-center bg-white text-sociaal-green font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg">
                        Neem Contact Op <ArrowRight className="ml-2" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
