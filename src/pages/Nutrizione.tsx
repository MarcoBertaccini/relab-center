import { Apple, ClipboardList, FileText, GraduationCap, Zap, RefreshCw, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Nutrizione() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-relab-blue to-relab-teal text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Apple className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Nutrizione</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Benessere che parte dall'alimentazione
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 leading-relaxed">
              La nutrizione è parte integrante del percorso RELAB: un supporto fondamentale per migliorare energia, forma fisica e risultati del lavoro svolto in studio e in palestra.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">Cosa offre la nostra nutrizionista</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <ClipboardList className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Valutazione Nutrizionale</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Analisi abitudini e stato nutrizionale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Definizione obiettivi realistici</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Piano Alimentare Personalizzato</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Adattato ad età, attività fisica e stile di vita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-blue mt-1">•</span>
                  <span>Focalizzato su energia, salute e performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-4">Educazione Alimentare</h3>
              <ul className="space-y-2 text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Consigli pratici e sostenibili</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-relab-teal mt-1">•</span>
                  <span>Miglioramento a lungo termine</span>
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
              <div className="bg-gradient-to-br from-relab-blue to-relab-teal rounded-relab-lg h-96 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                IMG
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-6">
                Perché integrarla nel percorso RELAB?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Una corretta alimentazione aiuta a ottimizzare i risultati ottenuti con fisioterapia, ETI e corsi di gruppo. Energia, recupero, composizione corporea e benessere generale migliorano in modo significativo quando allenamento e nutrizione procedono insieme.
              </p>
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
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-3">Più energia</h3>
              <p className="text-gray-600">Ritrova vitalità per affrontare la giornata e gli allenamenti</p>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md text-center">
              <div className="w-16 h-16 bg-relab-blue/10 rounded-relab flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-relab-blue" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-3">Miglior recupero</h3>
              <p className="text-gray-600">Supporta il corpo nel recupero post-allenamento</p>
            </div>

            <div className="bg-white p-8 rounded-relab-lg shadow-md text-center">
              <div className="w-16 h-16 bg-relab-teal/10 rounded-relab flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-relab-teal" />
              </div>
              <h3 className="text-2xl font-bold text-relab-blue mb-3">Obiettivi più chiari e misurabili</h3>
              <p className="text-gray-600">Traccia progressi concreti verso i tuoi obiettivi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-relab-blue to-relab-teal text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prenota la tua consulenza nutrizionale</h2>
          <Link
            to="/contatti"
            onClick={() => {
              setTimeout(() => {
                document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-relab-blue px-8 py-4 rounded-relab font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
            Contattaci
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
