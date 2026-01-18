import aboutData from '../content/about.json';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{aboutData.title}</h1>
            </header>

            {aboutData.main_sections.map((section, idx) => (
                <section key={idx} className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
                    <h2 className="text-2xl font-bold text-sociaal-green mb-4">{section.title}</h2>
                    {section.items ? (
                        <ul className="space-y-4 text-gray-700 leading-relaxed list-disc pl-5">
                            {section.items.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.text}</p>
                    )}
                </section>
            ))}

            <section className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
                <h2 className="text-2xl font-bold text-sociaal-green mb-6">{aboutData.goals_section.title}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {aboutData.goals_section.goals.map((goal, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-bold text-gray-900 mb-2">{goal.title}</h3>
                            <p className="text-sm text-gray-600">{goal.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
