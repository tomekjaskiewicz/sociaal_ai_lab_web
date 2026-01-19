import whoWeAreData from '../content/who_we_are.json';
import { resolvePath } from '../utils/paths';

const PartnerCard = ({ name, description, logo, reverse = false }) => (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white rounded-xl shadow-lg overflow-hidden p-8 gap-8 my-8`}>
        <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{name}</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="flex-1 flex justify-center items-center p-4">
            {logo && <img src={resolvePath(logo)} alt={name} className="max-w-full max-h-48 object-contain" />}
        </div>
    </div>
);

const WhoWeAre = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">{whoWeAreData.title}</h1>

            {whoWeAreData.partners.map((partner, idx) => (
                <PartnerCard
                    key={idx}
                    name={partner.name}
                    description={partner.description}
                    logo={partner.logo}
                    reverse={idx % 2 !== 0} // Alternate layout
                />
            ))}

            <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
                <h2 className="text-2xl font-bold text-center mb-8">{whoWeAreData.social_partners_title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {whoWeAreData.social_partners.map((partner) => (
                        <div key={partner} className="bg-green-50 rounded-lg p-4 text-center font-medium text-gray-800 flex items-center justify-center hover:bg-green-100 transition-colors">
                            {partner}
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 text-sociaal-green font-bold text-lg">{whoWeAreData.footer_text}</p>
            </div>
        </div>
    );
};

export default WhoWeAre;
