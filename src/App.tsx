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
