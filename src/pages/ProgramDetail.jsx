import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import programData from '../content/program.json';
import { resolvePath } from '../utils/paths';

const ProgramDetail = () => {
    const { category, slug } = useParams();

    // Find the item
    // Category mapping might be needed if URL category doesn't strictly match JSON keys
    const section = programData[category];
    const item = section?.items.find(i => i.slug === slug);

    if (!item) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Item niet gevonden</h1>
                <Link to="/" className="text-sociaal-green hover:underline">Terug naar home</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <Link to={`/programma/${category}`} className="inline-flex items-center text-gray-800 hover:text-sociaal-green font-bold text-lg mb-8 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-sociaal-green/20">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Terug naar {section.title}
            </Link>

            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 md:h-80 w-full relative">
                    <img
                        src={resolvePath(item.image)}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-8">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 shadow-sm">{item.title}</h1>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="prose prose-lg prose-green max-w-none text-gray-800">
                        <Markdown>{item.content || item.description}</Markdown>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ProgramDetail;
