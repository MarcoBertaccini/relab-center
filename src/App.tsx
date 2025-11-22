import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Fisioterapia from './pages/Fisioterapia';
import ETI from './pages/ETI';
import Palestra from './pages/Palestra';
import Nutrizione from './pages/Nutrizione';
import Performance from './pages/Performance';
import Contatti from './pages/Contatti';

interface PageProps {
  onNavigate: (page: string) => void;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);

    const titles: Record<string, string> = {
      home: 'RELAB Center – Fisioterapia e Movimento a Forlì',
      fisioterapia: 'Fisioterapia – RELAB Center Forlì',
      eti: 'Esercizio Terapeutico Individualizzato – RELAB Center',
      palestra: 'Palestra & Corsi di Gruppo – RELAB Center Forlì',
      performance: 'RELAB Performance – Preparazione Atletica e Biomeccanica',
      nutrizione: 'Nutrizione – RELAB Center Forlì',
      contatti: 'Contatti – RELAB Center'
    };

    const descriptions: Record<string, string> = {
      home: 'RELAB Center: fisioterapia, esercizio terapeutico, corsi di gruppo, nutrizione e performance a Forlì. Professionisti al servizio del tuo benessere.',
      fisioterapia: 'Trattamenti di fisioterapia professionale a Forlì: valutazione, dolore, mobilità, recupero funzionale e prevenzione.',
      eti: 'Percorso ETI in palestra a Forlì: esercizi mirati, recupero forza, mobilità e prevenzione recidive.',
      palestra: 'Corsi di gruppo: posturale, yoga, pilates, allenamento funzionale. Allenati in un ambiente controllato e guidato da professionisti.',
      performance: 'Preparazione atletica, biomeccanica, rientro post-infortunio e personal training guidati da Alessandro Malaguti, ex pro ciclista e Maglia Rosa.',
      nutrizione: 'Consulenze nutrizionali personalizzate: valutazione, piani alimentari su misura ed educazione alimentare.',
      contatti: 'Contatta RELAB Center: informazioni, prenotazioni, orari e indirizzo in Via Ferdinando Magellano 11, Forlì.'
    };

    document.title = titles[currentPage] || 'RELAB Center – Fisioterapia e Movimento a Forlì';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptions[currentPage] || descriptions.home);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'fisioterapia':
        return <Fisioterapia onNavigate={setCurrentPage} />;
      case 'eti':
        return <ETI onNavigate={setCurrentPage} />;
      case 'palestra':
        return <Palestra onNavigate={setCurrentPage} />;
      case 'nutrizione':
        return <Nutrizione onNavigate={setCurrentPage} />;
      case 'performance':
        return <Performance />;
      case 'contatti':
        return <Contatti />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main key={currentPage} className="page-transition">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
