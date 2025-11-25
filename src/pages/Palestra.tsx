import { Dumbbell, Users, Calendar, Activity, Heart, TrendingUp, ArrowRight, BookOpen, CheckCircle2, Wind, Target } from 'lucide-react';

interface PalestraProps {
  onNavigate: (page: string) => void;
}

export default function Palestra({ onNavigate }: PalestraProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-relab-teal to-relab-blue text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Dumbbell className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Corsi di Gruppo</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Allenamento guidato, progressivo e sicuro
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              La palestra RELAB è il completamento del nostro percorso: un ambiente professionale dove allenarsi in sicurezza, mantenere i risultati raggiunti e migliorare forza, postura e benessere generale.
            </p>
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
                  <div className="w-20 h-20 bg-gradient-to-br from-relab-teal to-relab-blue rounded-relab flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-relab-blue mb-2">PALESTRA E CORSI</h3>
                  <p className="text-sm text-relab-teal font-bold">Consolidamento</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-center">
                Dopo il lavoro individuale con fisioterapisti ed esercizi personalizzati, i corsi di gruppo permettono di consolidare i progressi e ridurre il rischio di recidive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="i-nostri-corsi" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">I Nostri Corsi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all border-2 border-relab-gray">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Ginnastica Posturale</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Migliora mobilità e allineamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Ideale per rigidità, mal di schiena, prevenzione</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all border-2 border-relab-gray">
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Yoga</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Respirazione, equilibrio, controllo del movimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Perfetto per rilassamento e mobilità</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all border-2 border-relab-gray">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Pilates</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Core stability, postura, fluidità dei movimenti</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Utile per prevenire recidive</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all border-2 border-relab-gray">
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Allenamento Funzionale</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Forza, resistenza, agilità</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Adatto anche al ritorno allo sport</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="bg-gradient-to-br from-relab-teal to-relab-blue rounded-relab-lg h-96 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                IMG
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-6">
                Perché i nostri corsi sono diversi?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Tutti i corsi RELAB sono condotti da fisioterapisti o trainer formati secondo le linee guida del movimento terapeutico.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-lg">Esercizi sicuri e corretti</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-lg">Progressioni adattate al livello</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-lg">Prevenzione degli infortuni</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-lg">Un ambiente professionale e controllato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Calendario Corsi</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-relab-lg shadow-lg overflow-hidden">
              <img
                src="/Calendario_provvisorio.jpg"
                alt="Calendario corsi RELAB"
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg mb-6">I posti sono limitati. Prenota in anticipo il tuo corso.</p>
              <a
                href="/contatti#contatti-diretti"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contatti');
                  setTimeout(() => {
                    document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-relab-teal text-white px-8 py-4 rounded-relab font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
              >
                Richiedi disponibilità
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">I Benefici</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-relab-lg shadow-md text-center">
              <CheckCircle2 className="w-12 h-12 text-relab-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-relab-blue mb-3">Mantiene i risultati ottenuti in fisioterapia</h3>
            </div>
            <div className="bg-white p-8 rounded-relab-lg shadow-md text-center">
              <CheckCircle2 className="w-12 h-12 text-relab-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-relab-blue mb-3">Riduce il rischio di recidive</h3>
            </div>
            <div className="bg-white p-8 rounded-relab-lg shadow-md text-center">
              <CheckCircle2 className="w-12 h-12 text-relab-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-relab-blue mb-3">Migliora forza, postura e benessere mentale</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-relab-blue to-relab-teal text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Vuoi iscriverti a un corso o provarne uno?</h2>
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
            Contattaci ora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
