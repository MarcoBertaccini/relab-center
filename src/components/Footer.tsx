import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-relab-blue text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/Logo_Relab.jpg"
              alt="RELAB Center"
              className="h-20 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-white/80 leading-relaxed">
              Centro specializzato in fisioterapia, esercizio terapeutico individualizzato e corsi di gruppo.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-relab-teal flex-shrink-0 mt-1" />
                <span className="text-white/80">Via Ferdinando Magellano, 11, 47121 Forlì FC</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-relab-teal flex-shrink-0" />
                <span className="text-white/80">3515453493</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-relab-teal flex-shrink-0" />
                <span className="text-white/80">info@relab-center.it</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Orari</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-relab-teal flex-shrink-0 mt-1" />
              <div className="text-white/80 space-y-1">
                <p>Lunedì: 17:00 – 19:30</p>
                <p>Martedì: 18:00 – 20:00</p>
                <p>Mercoledì: 17:30 – 19:30</p>
                <p>Giovedì: 18:00 – 20:00</p>
                <p>Venerdì: 17:30 – 20:00</p>
                <p>Sabato: Chiuso</p>
                <p>Domenica: Chiuso</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} RELAB Center. Tutti i diritti riservati.</p>
          <p className="text-white/60 text-xs mt-2">
            Powered by{' '}
            <a
              href="https://zenith-studio.it"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Zenith Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
