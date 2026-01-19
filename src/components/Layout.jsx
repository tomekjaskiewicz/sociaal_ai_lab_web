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
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
