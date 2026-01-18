import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col font-sans">
            {isHome && <Hero />}
            <Navbar />
            <main className="flex-grow w-full relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sociaal-green/10 to-sociaal-light/20 blur-3xl opacity-50" />
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
