import { Calendar, MapPin, Target } from 'lucide-react';
import { resolvePath } from '../utils/paths';

const EventCard = ({ title, date, location, description, image, type = "Evenement" }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="inline-block self-start bg-sociaal-green text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                    {type}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                        <Calendar className="w-5 h-5 mr-3 text-sociaal-green" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <MapPin className="w-5 h-5 mr-3 text-sociaal-green" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-start text-gray-600">
                        <Target className="w-5 h-5 mr-3 text-sociaal-green mt-1" />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
                <img
                    src={resolvePath(image)}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default EventCard;
