import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fisioterapia from './pages/Fisioterapia';
import Chinesiologia from './pages/Chinesiologia';
import Palestra from './pages/Palestra';
import Nutrizione from './pages/Nutrizione';
import Performance from './pages/Performance';
import Contatti from './pages/Contatti';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function MetaTags() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'RELAB Center – Fisioterapia e Movimento a Forlì',
      '/fisioterapia': 'Fisioterapia – RELAB Center Forlì',
      '/chinesiologia': 'Chinesiologia – RELAB Center Forlì',
      '/palestra': 'Palestra & Corsi di Gruppo – RELAB Center Forlì',
      '/performance': 'RELAB Performance – Preparazione Atletica e Biomeccanica',
      '/nutrizione': 'Nutrizione – RELAB Center Forlì',
      '/contatti': 'Contatti – RELAB Center'
    };

    const descriptions: Record<string, string> = {
      '/': 'RELAB Center: fisioterapia, esercizio terapeutico, corsi di gruppo, nutrizione e performance a Forlì. Professionisti al servizio del tuo benessere.',
      '/fisioterapia': 'Trattamenti di fisioterapia professionale a Forlì: valutazione, dolore, mobilità, recupero funzionale e prevenzione.',
      '/chinesiologia': 'Chinesiologia a Forlì: valutazione funzionale, rieducazione posturale, prevenzione e potenziamento per migliorare movimento e performance.',
      '/palestra': 'Corsi di gruppo: posturale, yoga, pilates, allenamento funzionale. Allenati in un ambiente controllato e guidato da professionisti.',
      '/performance': 'Preparazione atletica, biomeccanica, rientro post-infortunio e personal training guidati da Alessandro Malaguti, ex pro ciclista e Maglia Rosa.',
      '/nutrizione': 'Consulenze nutrizionali personalizzate: valutazione, piani alimentari su misura ed educazione alimentare.',
      '/contatti': 'Contatta RELAB Center: informazioni, prenotazioni, orari e indirizzo in Via Ferdinando Magellano 11, Forlì.'
    };

    document.title = titles[location.pathname] || 'RELAB Center – Fisioterapia e Movimento a Forlì';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptions[location.pathname] || descriptions['/']);
  }, [location.pathname]);

  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollToTop />
      <MetaTags />
      <Header />
      <main className="page-transition overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fisioterapia" element={<Fisioterapia />} />
          <Route path="/chinesiologia" element={<Chinesiologia />} />
          <Route path="/palestra" element={<Palestra />} />
          <Route path="/nutrizione" element={<Nutrizione />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
