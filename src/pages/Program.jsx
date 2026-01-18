import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import programData from '../content/program.json';

const ProgramCard = ({ title, description, image, link, color = "bg-white" }) => {
    const CardContent = (
        <div className={`flex flex-col rounded-lg shadow-md overflow-hidden ${color} h-full hover:shadow-xl transition-shadow duration-300`}>
            <div className="h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{description}</p>
                <span className="text-sociaal-green font-medium mt-auto flex items-center">Lees meer <ArrowRight className="w-4 h-4 ml-1" /></span>
            </div>
        </div>
    );

    return link ? <Link to={link}>{CardContent}</Link> : CardContent;
};

export const Kennis = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{programData.kennis.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programData.kennis.items.map((item, idx) => (
                <ProgramCard
                    key={idx}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={`/programma/kennis/${item.slug}`}
                />
            ))}
        </div>
    </div>
);

export const Actie = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{programData.actie.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programData.actie.items.map((item, idx) => (
                <ProgramCard
                    key={idx}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={`/programma/actie/${item.slug}`}
                />
            ))}
        </div>
    </div>
);

export const Faciliteit = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{programData.faciliteit.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
            {programData.faciliteit.items.map((item, idx) => (
                <ProgramCard
                    key={idx}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    link={`/programma/faciliteit/${item.slug}`}
                />
            ))}
        </div>
    </div>
);
