import { Activity, Heart, Users, Dumbbell, ArrowRight, CheckCircle2, Star, Apple, TrendingUp } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
<section
  className="relative text-white py-20 lg:py-32"
  style={{
    backgroundColor: '#003F63'

  }}
>
  {/* Logo RELAB piccolo sopra al testo */}
  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
    <img
      src="/Background_home.png"
      alt="Relab Logo"
      className="w-64 opacity-50" 
    />
  </div>

  <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-24">
    <div className="max-w-4xl mx-auto text-center">

      <p className="text-xl lg:text-2xl mb-12 text-white/90 font-light">
        Un percorso completo:<br />
        Fisioterapia → Riabilitazione → Mantenimento
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contatti#contatti-diretti"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('contatti');
            setTimeout(() => {
              document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-white text-relab-blue px-8 py-4 rounded-relab font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
        >
          Prenota un appuntamento
          <ArrowRight className="w-5 h-5" />
        </a>

        <button
          onClick={() => {
            document.getElementById('nostro-percorso')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-relab-teal text-white px-8 py-4 rounded-relab font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all border-2 border-white/20"
        >
          Scopri i servizi
        </button>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-6">Chi Siamo</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
             In Relab Center integriamo fisioterapia e movimento consapevole per accompagnare ogni persona — dall’atleta al paziente di ogni età — verso un recupero efficace e una migliore qualità di vita. Nel nostro spazio costruiamo percorsi personalizzati per raggiungere obiettivi reali e duraturi.
            </p>
          </div>
        </div>
      </section>

      <section id="nostro-percorso" className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Il nostro percorso</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un approccio integrato in tre fasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div
              className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl hover:border-2 hover:border-relab-teal border-2 border-transparent transition-all cursor-pointer"
              onClick={() => onNavigate('fisioterapia')}
            >
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">1. Fisioterapia</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Valutazione, trattamento, gestione del dolore</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Terapie manuali, strumentali ed esercizio attivo</span>
                </li>
              </ul>
            </div>

            <div
              className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl hover:border-2 hover:border-relab-teal border-2 border-transparent transition-all cursor-pointer"
              onClick={() => onNavigate('eti')}
            >
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">2. ETI</h3>
              <p className="text-sm text-gray-500 mb-3">Esercizio Terapeutico Individualizzato</p>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Lavoro in palestra mirato su forza, mobilità, stabilità</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Ripristino funzionale e prevenzione recidive</span>
                </li>
              </ul>
            </div>

            <div
              className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl hover:border-2 hover:border-relab-teal border-2 border-transparent transition-all cursor-pointer"
              onClick={() => onNavigate('palestra')}
            >
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Dumbbell className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">3. Corsi di Gruppo</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Posturale, Yoga, Pilates, Allenamento Funzionale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Mantenimento, miglioramento performance e prevenzione</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/foto_palestra.jpeg"
                alt="Palestra RELAB - Allenamento di gruppo"
                className="rounded-relab-lg h-96 w-full object-cover shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-6">
                La nostra Palestra: dove inizi a stare meglio davvero
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Programmi individuali e di gruppo, seguiti da fisioterapisti e trainer qualificati. Perfetta per mantenimento, ritorno allo sport e potenziamento.
              </p>
              <button className="bg-relab-teal text-white px-8 py-4 rounded-relab font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2">
                Vedi i Corsi e gli Orari
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Altri Servizi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl hover:border-2 hover:border-relab-teal border-2 border-transparent transition-all cursor-pointer"
              onClick={() => onNavigate('performance')}
            >
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">RELAB Performance</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Preparazione atletica e biomeccanica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Personal training e ricondizionamento post infortunio</span>
                </li>
              </ul>
            </div>

            <div
              className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl hover:border-2 hover:border-green-600 border-2 border-transparent transition-all cursor-pointer"
              onClick={() => onNavigate('nutrizione')}
            >
              <div className="w-16 h-16 bg-green-50 rounded-relab flex items-center justify-center mb-6">
                <Apple className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Nutrizione</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Percorsi personalizzati per forma fisica e salute</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Supporto nutrizionale integrato con il movimento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">
              Cosa Dicono i Nostri Pazienti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-relab-gray p-8 rounded-relab-lg hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-relab-teal text-relab-teal" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Ottimo centro di fisioterapia con personale molto valido nonché palestra con lezioni di zumba pilates ed altro e preparatore atletico per ciclismo."
              </p>
              <div className="font-bold text-relab-blue">Davide F.</div>
            </div>

            <div className="bg-relab-gray p-8 rounded-relab-lg hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-relab-teal text-relab-teal" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Gestori disponibili, locali ampi, luminosi e puliti. Professionalità."
              </p>
              <div className="font-bold text-relab-blue">Paola L.</div>
            </div>

            <div className="bg-relab-gray p-8 rounded-relab-lg hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-relab-teal text-relab-teal" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Palestra spaziosa, ariosa e molto pulita come gli spogliatoi. Ampio terrazzo con possibilità di fare attività fisica anche fuori. Personale qualificato e disponibile."
              </p>
              <div className="font-bold text-relab-blue">Adriana M.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-relab-teal to-relab-blue text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prenota ora la tua valutazione
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Fisioterapisti, trainer e nutrizionista lavorano insieme per costruire il tuo percorso
          </p>
          <a
            href="/contatti#contatti-diretti"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contatti');
              setTimeout(() => {
                document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-relab-blue px-10 py-5 rounded-relab font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-3"
          >
            Contattaci
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
