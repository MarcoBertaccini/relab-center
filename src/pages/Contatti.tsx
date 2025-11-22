import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contatti() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-relab-blue to-relab-teal text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Mail className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contatti</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Siamo qui per aiutarti nel tuo percorso di benessere
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Dove siamo</h2>
            </div>

            <div className="max-w-3xl mx-auto mb-20">
              <div className="bg-white border-2 border-relab-gray p-8 rounded-relab-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-relab-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-relab-blue">Indirizzo</h3>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 text-xl font-semibold mb-1">Via Ferdinando Magellano, 11</p>
                  <p className="text-gray-700 text-xl font-semibold mb-4">47121 Forlì, FC</p>
                  <p className="text-gray-600 leading-relaxed">
                    Lo studio è facilmente raggiungibile e dispone di parcheggio nelle vicinanze.
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/kxjNHNgsFysHJbmp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-relab-teal text-white px-6 py-3 rounded-relab font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  <MapPin className="w-5 h-5" />
                  Apri in Google Maps
                </a>
              </div>
            </div>

            <div id="contatti-diretti" className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Contatti diretti</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
              <div className="bg-white border-2 border-relab-gray p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-relab-blue" />
                </div>
                <h3 className="text-2xl font-bold text-relab-blue mb-4">Telefono</h3>
                <p className="text-gray-700 text-xl font-semibold mb-3">3515453493</p>
                <p className="text-gray-600 leading-relaxed">
                  Contattaci per informazioni o prenotazioni.
                </p>
              </div>

              <div className="bg-white border-2 border-relab-gray p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-relab-teal" />
                </div>
                <h3 className="text-2xl font-bold text-relab-blue mb-4">Email</h3>
                <p className="text-gray-700 text-xl font-semibold mb-3">info@relabcenter.it</p>
                <p className="text-gray-600 leading-relaxed">
                  Rispondiamo rapidamente a tutte le richieste.
                </p>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Orari di apertura</h2>
            </div>

            <div className="max-w-3xl mx-auto mb-20">
              <div className="bg-white border-2 border-relab-gray p-8 rounded-relab-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center">
                    <Clock className="w-8 h-8 text-relab-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-relab-blue">Orari</h3>
                </div>
                <div className="space-y-3 text-lg">
                  <div className="flex justify-between border-b border-relab-gray/30 pb-3">
                    <span className="font-semibold text-relab-blue">Lunedì:</span>
                    <span className="text-gray-700">17:00 – 19:30</span>
                  </div>
                  <div className="flex justify-between border-b border-relab-gray/30 pb-3">
                    <span className="font-semibold text-relab-blue">Martedì:</span>
                    <span className="text-gray-700">18:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-relab-gray/30 pb-3">
                    <span className="font-semibold text-relab-blue">Mercoledì:</span>
                    <span className="text-gray-700">17:30 – 19:30</span>
                  </div>
                  <div className="flex justify-between border-b border-relab-gray/30 pb-3">
                    <span className="font-semibold text-relab-blue">Giovedì:</span>
                    <span className="text-gray-700">18:00 – 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-relab-gray/30 pb-3">
                    <span className="font-semibold text-relab-blue">Venerdì:</span>
                    <span className="text-gray-700">17:30 – 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-relab-gray/30 pb-3">
                    <span className="font-semibold text-relab-blue">Sabato:</span>
                    <span className="text-gray-700">Chiuso</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-relab-blue">Domenica:</span>
                    <span className="text-gray-700">Chiuso</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </div>
  );
}
