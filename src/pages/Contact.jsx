import { Mail, MapPin, Clock } from 'lucide-react';
import contactData from '../content/contact.json';
import { resolvePath } from '../utils/paths';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">{contactData.title}</h1>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 space-y-8 bg-gray-50">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{contactData.intro_title}</h2>
                            <p className="text-gray-600 mb-4">{contactData.intro_text}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-sociaal-green mr-3 mt-1" />
                                <div>
                                    <p className="font-semibold">{contactData.address_title}</p>
                                    {contactData.address_lines.map((line, idx) => (
                                        <p key={idx}>{line}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Mail className="w-6 h-6 text-sociaal-green mr-3" />
                                <a href={`mailto:${contactData.email}`} className="text-blue-600 hover:underline">{contactData.email}</a>
                            </div>

                            <div className="flex items-start">
                                <Clock className="w-6 h-6 text-sociaal-green mr-3 mt-1" />
                                <div>
                                    <p className="font-semibold">{contactData.opening_hours_title}</p>
                                    <p>{contactData.opening_hours}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-64 md:h-auto relative">
                        <iframe
                            src={contactData.map_url}
                            className="grayscale hover:grayscale-0 transition-all duration-500 absolute inset-0 w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-white p-4 rounded-xl shadow-lg text-center">
                <img src={resolvePath(contactData.image)} alt="Locatie foto" className="mx-auto rounded-lg max-h-96 object-cover" />
            </div>
        </div>
    );
};

export default Contact;
