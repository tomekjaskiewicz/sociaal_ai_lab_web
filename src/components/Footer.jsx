const Footer = () => {
    const logos = [
        { name: "Techniek College Rotterdam", src: "/images/Techniek_College_Rotterdam_logoOP.png" },
        { name: "Hogeschool Rotterdam", src: "/images/Hogeschool_Rotterdam.png" },
        { name: "Gemeente Rotterdam", src: "/images/Gemeente_Rotterdam.png" },
        { name: "Erasmus Universiteit", src: "/images/Erasmus_uni.png" },
        { name: "Erasmus Centre for Data Analytics", src: "/images/Erasmus_DataOP.png" },
    ];

    return (
        <footer className="bg-white/80 backdrop-blur-sm mt-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
                    {logos.map((logo) => (
                        <div key={logo.name} className="w-32 h-20 flex items-center justify-center p-2 opacity-80 hover:opacity-100 transition-opacity">
                            <img
                                src={logo.src}
                                alt={`Logo ${logo.name}`}
                                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Sociaal AI Lab Rotterdam. Alle rechten voorbehouden.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
