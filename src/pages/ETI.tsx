import { Heart, TrendingUp, Dumbbell, Target, Activity, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

interface ETIProps {
  onNavigate: (page: string) => void;
}

export default function ETI({ onNavigate }: ETIProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-relab-blue to-relab-teal text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Heart className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            ETI — Esercizio Terapeutico Individualizzato
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Il ponte tra fisioterapia e pieno recupero
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              L'ETI è il passaggio successivo alla fisioterapia: un percorso personalizzato in palestra, con esercizi mirati a migliorare forza, mobilità e controllo del movimento, sempre seguiti da professionisti qualificati.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Obiettivi del Percorso</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Dumbbell className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Recupero della forza</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Rinforzo specifico per aree indebolite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Progressione sicura e controllata</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Mobilità e articolazione</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Ripristino del movimento ottimale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Lavoro su rigidità e compensi</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Propriocezione e controllo</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Esercizi per stabilità e coordinazione</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Riduzione rischio recidive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-relab-teal to-relab-blue rounded-relab-lg h-96 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                IMG
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-6">
                Un lavoro pratico, progressivo e misurabile
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Il programma ETI si svolge in palestra con sessioni guidate, esercizi personalizzati e monitoraggio costante dei progressi. Tutto il percorso è costruito sulle specifiche problematiche del paziente e sui suoi obiettivi.
              </p>
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
                <h2 className="text-3xl lg:text-4xl font-bold text-relab-blue">Il Cuore del Metodo RELAB</h2>
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
                  <div className="w-20 h-20 bg-gradient-to-br from-relab-blue to-relab-teal rounded-relab flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-relab-blue mb-2">ETI</h3>
                  <p className="text-sm text-relab-teal font-bold">Passaggio essenziale</p>
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
                L'ETI rappresenta il cuore del metodo RELAB: un passaggio essenziale che permette di trasformare il miglioramento ottenuto in fisioterapia in risultati concreti e duraturi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">I Benefici</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-relab-gray rounded-relab-lg">
                <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-relab-blue text-lg mb-1">Maggiore autonomia</h3>
                  <p className="text-gray-600">Ritorna a gestire le tue attività quotidiane con sicurezza</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-relab-gray rounded-relab-lg">
                <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-relab-blue text-lg mb-1">Miglior controllo motorio</h3>
                  <p className="text-gray-600">Movimenti più precisi ed efficaci</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-relab-gray rounded-relab-lg">
                <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-relab-blue text-lg mb-1">Riduzione del dolore</h3>
                  <p className="text-gray-600">Rinforzo e stabilità per alleviare i sintomi</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-relab-gray rounded-relab-lg">
                <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-relab-blue text-lg mb-1">Prevenzione degli infortuni</h3>
                  <p className="text-gray-600">Corpo più forte e resistente alle sollecitazioni</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-relab-gray rounded-relab-lg md:col-span-2">
                <CheckCircle2 className="w-6 h-6 text-relab-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-relab-blue text-lg mb-1">Ritorno più sicuro allo sport</h3>
                  <p className="text-gray-600">Preparazione ottimale per riprendere le attività sportive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-relab-blue to-relab-teal text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Inizia ora il tuo percorso ETI</h2>
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
            Prenota una seduta
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
