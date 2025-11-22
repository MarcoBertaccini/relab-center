import { Activity, Shield, TrendingUp, ArrowRight, Heart, BookOpen, Star } from 'lucide-react';

interface FisioterapiaProps {
  onNavigate: (page: string) => void;
}

export default function Fisioterapia({ onNavigate }: FisioterapiaProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-relab-blue to-relab-teal text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Activity className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Fisioterapia</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Valutazione, trattamento e percorso su misura
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              La fisioterapia è il primo passo del percorso RELAB. Attraverso una valutazione approfondita, identifichiamo la causa del dolore e strutturiamo un trattamento mirato per recuperare mobilità, ridurre sintomi e migliorare la qualità della vita.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Cosa Trattiamo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Controllo del dolore</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Gestione fase acuta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Tecniche manuali e strumentali</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Ripristino funzionale</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Recupero mobilità, forza e stabilità</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Esercizio terapeutico attivo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Prevenzione recidive</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Programmi personalizzati</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Educazione terapeutica</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-6">
                Un approccio moderno e basato sulle evidenze
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                I nostri fisioterapisti utilizzano metodiche aggiornate, integrate con esercizio terapeutico e valutazioni mirate. L'obiettivo è garantire un miglioramento reale e duraturo, evitando ricadute e guidando il paziente verso l'autonomia.
              </p>
            </div>
            <div>
              <img
                src="/Foto_Fisioterapia.jpg"
                alt="Fisioterapia RELAB - Trattamento professionale"
                className="rounded-relab-lg h-96 w-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-relab-lg shadow-md">
              <div className="flex items-center gap-4 mb-8">
                <BookOpen className="w-10 h-10 text-relab-teal flex-shrink-0" />
                <h2 className="text-3xl lg:text-4xl font-bold text-relab-blue">Il Percorso RELAB</h2>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-relab-teal rounded-relab flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-relab-blue mb-2">FISIOTERAPIA</h3>
                  <p className="text-sm text-gray-600">Gestione del dolore</p>
                </div>

                <ArrowRight className="w-8 h-8 text-relab-teal rotate-90 md:rotate-0" />

                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-relab-blue rounded-relab flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-relab-blue mb-2">ETI</h3>
                  <p className="text-sm text-gray-600">Esercizio Terapeutico</p>
                </div>

                <ArrowRight className="w-8 h-8 text-relab-teal rotate-90 md:rotate-0" />

                <div className="flex-1 text-center">
                  <div className="w-20 h-20 bg-relab-teal rounded-relab flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-relab-blue mb-2">CORSI DI GRUPPO</h3>
                  <p className="text-sm text-gray-600">Mantenimento</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-center">
                Dalla gestione del dolore al movimento consapevole: la fisioterapia è il punto di partenza di un percorso completo che prosegue in palestra con ETI e, quando serve, con i corsi di gruppo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-relab-gray p-8 rounded-relab-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-relab-teal text-relab-teal" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                "Grazie al trattamento fisioterapico ho risolto un problema cronico che mi limitava da anni. Professionisti competenti e attenti."
              </p>
              <div className="font-bold text-relab-blue">Paolo S.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-relab-blue to-relab-teal text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prenota la tua valutazione fisioterapica</h2>
          <a
            href="/contatti#contatti-diretti"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contatti');
              setTimeout(() => {
                document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-relab-blue px-8 py-4 rounded-relab font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
            Contattaci
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
