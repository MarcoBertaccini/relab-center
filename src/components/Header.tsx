import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Fisioterapia', path: '/fisioterapia' },
    { name: 'Chinesiologia', path: '/chinesiologia' },
    { name: 'Corsi', path: '/palestra' },
    { name: 'Performance', path: '/performance' },
    { name: 'Nutrizione', path: '/nutrizione' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="/Logo_Relab.webp"
              alt="RELAB Center"
              className="h-20 w-auto max-w-full object-contain my-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1 flex-wrap">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  location.pathname === item.path
                    ? 'text-white bg-relab-teal'
                    : 'text-relab-blue hover:bg-relab-gray'
                }`}
              >
                {item.name}
              </Link>
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
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  location.pathname === item.path
                    ? 'text-white bg-relab-teal'
                    : 'text-relab-blue hover:bg-relab-gray'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
