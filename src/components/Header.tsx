import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Fisioterapia', id: 'fisioterapia' },
    { name: 'ETI', id: 'eti' },
    { name: 'Corsi & Palestra', id: 'palestra' },
    { name: 'Performance', id: 'performance' },
    { name: 'Nutrizione', id: 'nutrizione' },
    { name: 'Contatti', id: 'contatti' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/Logo_Relab.jpg"
              alt="RELAB Center"
              className="h-20 w-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'text-white bg-relab-teal'
                    : 'text-relab-blue hover:bg-relab-gray'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-relab-blue" />
            ) : (
              <Menu className="w-6 h-6 text-relab-blue" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  currentPage === item.id
                    ? 'text-white bg-relab-teal'
                    : 'text-relab-blue hover:bg-relab-gray'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
