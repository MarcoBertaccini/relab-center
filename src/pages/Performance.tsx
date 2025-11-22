import { Activity, Target, TrendingUp, Users } from 'lucide-react';

export default function Performance() {
  const services = [
    {
      icon: Activity,
      title: 'Preparazione Atletica',
      description: 'Programmi su misura per ogni disciplina. Lavoro su forza, resistenza e potenza.',
    },
    {
      icon: Target,
      title: 'Biomeccanica',
      description: 'Analisi completa dei movimenti. Ottimizzazione tecnica e prevenzione errori meccanici.',
    },
    {
      icon: TrendingUp,
      title: 'Ricondizionamento Post Infortunio',
      description: 'Percorso di ritorno allo sport sicuro e progressivo. Valutazioni continue e test funzionali.',
    },
    {
      icon: Users,
      title: 'Personal Training (indoor & outdoor)',
      description: 'Sessioni individuali. Obiettivi specifici: performance, postura, dimagrimento, forza.',
    },
  ];

  const benefits = [
    'Incremento performance sportiva',
    'Tecnica più efficiente',
    'Riduzione rischio infortuni',
    'Programmi concreti e misurabili',
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-relab-blue via-relab-teal to-relab-blue text-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              RELAB Performance
            </h1>
            <p className="text-2xl lg:text-3xl font-light">
              Allenamento, valutazioni e performance di livello professionale
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              RELAB Performance è la divisione dedicata allo sport e all'allenamento avanzato. Programmi personalizzati, valutazioni funzionali e biomeccaniche, ricondizionamento e preparazione atletica per chi vuole migliorare davvero la propria performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-relab-lg shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src="/Foto_Performance.jpg"
                    alt="Alessandro Malaguti - RELAB Performance"
                    className="rounded-relab-lg h-96 w-full object-cover shadow-xl"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-relab-blue mb-6">
                    Una squadra guidata da un professionista del ciclismo: Alessandro Malaguti
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    La sezione Performance è coordinata da <strong>Alessandro Malaguti</strong>, ex ciclista professionista, vincitore della Maglia Rosa al Giro d'Italia e atleta di livello internazionale.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La sua esperienza nello sport professionistico porta un approccio unico, preciso e scientifico alla preparazione atletica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-4">
              Servizi Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-relab-lg shadow-lg p-8 hover:shadow-xl transition-all border-2 border-gray-100 hover:border-relab-teal"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-relab-teal to-relab-blue rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-relab-blue mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-6">
                Metodo basato su esperienza professionistica e linee guida scientifiche
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Ogni atleta viene valutato attraverso test funzionali, analisi biomeccaniche e monitoraggio continuo. I programmi si adattano nel tempo in base a obiettivi e performance.
              </p>
            </div>
            <div>
              <div className="bg-gradient-to-br from-relab-teal to-relab-blue rounded-relab-lg h-96 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
                IMG
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-relab-blue mb-12 text-center">
              Benefici
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-relab-lg shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-relab-teal to-relab-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                  <p className="text-lg font-medium text-relab-blue">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-relab-blue via-relab-teal to-relab-blue text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Vuoi lavorare con un ex professionista?
            </h2>
            <p className="text-2xl mb-10 font-light">
              Prenota ora la tua valutazione Performance
            </p>
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-white text-relab-blue px-10 py-4 rounded-relab-lg text-xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contattaci
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
