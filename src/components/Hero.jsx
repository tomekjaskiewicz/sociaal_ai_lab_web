import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const images = [
        '/images/banner_website_01.jpg',
        '/images/banner_website_02.jpg'
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[21/8] lg:aspect-[3/1] overflow-hidden bg-gray-900">
            <AnimatePresence>
                <motion.img
                    key={current}
                    src={images[current]}
                    alt={`Banner ${current + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20" />

            {/* Optional overlay content if needed */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* <h1 className="text-white text-4xl font-bold">Welkom bij Sociaal AI Lab</h1> */}
            </div>
        </div>
    );
};

export default Hero;
