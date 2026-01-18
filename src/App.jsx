import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import About from './pages/About';
import ResponsibleAI from './pages/ResponsibleAI';
import WhoWeAre from './pages/WhoWeAre';
import Contact from './pages/Contact';
import { Kennis, Actie, Faciliteit } from './pages/Program';
import ProgramDetail from './pages/ProgramDetail';

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/voor-wie" element={<About />} />
          <Route path="/verantwoord-ai" element={<ResponsibleAI />} />
          <Route path="/wie-zijn-we" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/programma/kennis" element={<Kennis />} />
          <Route path="/programma/actie" element={<Actie />} />
          <Route path="/programma/faciliteit" element={<Faciliteit />} />
          <Route path="/programma/:category/:slug" element={<ProgramDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
