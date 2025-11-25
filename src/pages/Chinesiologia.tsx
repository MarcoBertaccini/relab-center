import { Activity, CheckCircle2, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';

interface ChinesiologiaProps {
  onNavigate: (page: string) => void;
}

export default function Chinesiologia({ onNavigate }: ChinesiologiaProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-[#003F63] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Activity className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Chinesiologia</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-4">
            La scienza del movimento al servizio del tuo benessere.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Valutazione personalizzata, prevenzione, rieducazione e potenziamento per migliorare movimento, postura e performance.
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
            className="bg-white text-[#003F63] px-8 py-4 rounded-relab font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
            Prenota una valutazione
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003F63] mb-6">Cos'è la Chinesiologia</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              La chinesiologia è la disciplina che studia il movimento umano e il suo rapporto con postura, performance e benessere generale.
              Attraverso un'analisi scientifica permette di identificare compensi, rigidità e limitazioni funzionali per intervenire in modo mirato e personalizzato.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003F63] mb-8 text-center">A chi è rivolta</h2>
            <div className="bg-white p-8 rounded-relab-lg shadow-md space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Chi soffre di dolori muscolo-scheletrici ricorrenti</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Persone che vogliono migliorare postura e mobilità</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Atleti che desiderano ottimizzare il gesto sportivo</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Chi ha subito un infortunio</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Chi lavora molte ore seduto</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Chi vuole prevenire problemi futuri migliorando il movimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003F63] mb-12 text-center">Cosa facciamo in Relab</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-relab-gray p-8 rounded-relab-lg">
                <div className="w-16 h-16 bg-[#00A8E8]/10 rounded-relab flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#00A8E8]" />
                </div>
                <h3 className="text-xl font-bold text-[#003F63] mb-4">Valutazione funzionale completa</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Analisi del movimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Screening posturale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Test di mobilità e forza</span>
                  </li>
                </ul>
              </div>

              <div className="bg-relab-gray p-8 rounded-relab-lg">
                <div className="w-16 h-16 bg-[#003F63]/10 rounded-relab flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-[#003F63]" />
                </div>
                <h3 className="text-xl font-bold text-[#003F63] mb-4">Piano di rieducazione personalizzato</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Esercizi mirati</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Rinforzo e stabilizzazione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Mobilità e respirazione</span>
                  </li>
                </ul>
              </div>

              <div className="bg-relab-gray p-8 rounded-relab-lg">
                <div className="w-16 h-16 bg-[#00A8E8]/10 rounded-relab flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-[#00A8E8]" />
                </div>
                <h3 className="text-xl font-bold text-[#003F63] mb-4">Potenziamento preventivo</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Prevenzione infortuni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Miglioramento del gesto sportivo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00A8E8] mt-1">•</span>
                    <span>Programmi progressivi e misurabili</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-relab-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003F63] mb-8 text-center">Perché scegliere Relab</h2>
            <div className="bg-white p-8 rounded-relab-lg shadow-md space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Approccio scientifico e personalizzato</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Comunicazione costante tra chinesiologo e fisioterapista</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Ambiente professionale e moderno</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#00A8E8] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Programmi verificabili e adattati al progresso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#00A8E8] to-[#003F63] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prenota ora la tua valutazione di chinesiologia</h2>
          <a
            href="/contatti#contatti-diretti"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contatti');
              setTimeout(() => {
                document.getElementById('contatti-diretti')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-white text-[#003F63] px-8 py-4 rounded-relab font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all inline-flex items-center gap-2"
          >
            Contattaci
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
