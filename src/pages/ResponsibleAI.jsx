import { Shield, Users, Eye, Lock, Zap, Scale } from 'lucide-react';
import responsibleData from '../content/responsible_ai.json';
import { resolvePath } from '../utils/paths';

const ValueCard = ({ icon: Icon, title, description, number }) => (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-8 gap-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 bg-green-50 rounded-full text-sociaal-green">
            {Icon ? <Icon size={48} /> : <span className="text-4xl font-bold">{number}</span>}
        </div>
        <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ResponsibleAI = () => {
    const icons = {
        "1": Users,
        "2": Scale,
        "3": Eye,
        "4": Lock,
        "5": Shield,
        "6": Zap
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">{responsibleData.title}</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: responsibleData.intro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />
            </div>

            <div className="space-y-8">
                {responsibleData.values.map((value, idx) => (
                    <ValueCard
                        key={idx}
                        number={value.number}
                        icon={icons[value.number]}
                        title={value.title}
                        description={value.description}
                    />
                ))}
            </div>

            <div className="mt-16 bg-white p-4 rounded-xl shadow-lg">
                <img
                    src={resolvePath(responsibleData.image)}
                    alt="Code of Conduct"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default ResponsibleAI;
