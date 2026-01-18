import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const navLinks = [
        { name: 'Voorpagina', path: '/', icon: <Home className="w-4 h-4 mr-2" /> },
        { name: 'Agenda', path: '/agenda' },
        { name: 'Voor wie?', path: '/voor-wie' },
        {
            name: 'Wat doen we?',
            path: '#',
            dropdown: [
                { name: 'Kennis & vaardigheden', path: '/programma/kennis' },
                { name: 'Actie, onderzoek & ontwerp', path: '/programma/actie' },
                { name: 'Faciliteit van het Lab', path: '/programma/faciliteit' },
            ]
        },
        { name: 'Verantwoorde AI', path: '/verantwoord-ai' },
        { name: 'Wie zijn we?', path: '/wie-zijn-we' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center">

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.dropdown ? (
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className="flex items-center px-3 py-2 text-gray-900 hover:text-sociaal-green font-bold transition-colors"
                                    >
                                        {link.name}
                                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                                    </button>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="flex items-center px-3 py-2 text-gray-900 hover:text-sociaal-green font-bold transition-colors"
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown Desktop */}
                                {link.dropdown && (
                                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                                        <div className="py-1" role="menu">
                                            {link.dropdown.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    to={subLink.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-sociaal-green"
                                                    role="menuitem"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Language Selector */}
                        <div className="relative group ml-4 pl-4 border-l border-gray-200">
                            <button className="flex items-center px-3 py-2 text-gray-900 hover:text-sociaal-green font-bold transition-colors">
                                <span className="mr-1">🌍</span>
                                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                            </button>
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                                <div className="py-1">
                                    {[
                                        { code: 'nl', label: '🇳🇱 Nederlands' },
                                        { code: 'en', label: '🇬🇧 English' },
                                        { code: 'ar', label: '🇸🇦 العربية' },
                                        { code: 'tr', label: '🇹🇷 Türkçe' },
                                        { code: 'pl', label: '🇵🇱 Polski' },
                                    ].map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                document.cookie = `googtrans=/nl/${lang.code}; path=/`;
                                                window.location.reload();
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-sociaal-green"
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sociaal-green focus:outline-none"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-200"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(link.name)}
                                                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-sociaal-green hover:bg-gray-50 bg-gray-50/50"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="pl-4 space-y-1"
                                                    >
                                                        {link.dropdown.map((subLink) => (
                                                            <Link
                                                                key={subLink.name}
                                                                to={subLink.path}
                                                                onClick={toggleMenu}
                                                                className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-sociaal-green hover:bg-gray-50"
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={toggleMenu}
                                            className="flex items-center px-3 py-2 rounded-md text-base font-bold text-gray-900 hover:text-sociaal-green hover:bg-gray-50"
                                        >
                                            {link.icon}
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
