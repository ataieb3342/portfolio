export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-block mb-4">
                <span className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium">
                  Disponible • En recherche active
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Adam <span className="text-gray-900">Taïeb</span>
              </h1>
              <p className="text-2xl text-gray-700 font-medium mb-6">
                Ingénieur Data & Développement Full-Stack
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                Ingénieur polyvalent spécialisé dans la conception de solutions complètes, 
                de la data à l'application. Expertise dans l'adaptation au contexte technique 
                existant et la livraison de solutions robustes en production.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:contact@ataieb-dev.fr" 
                  className="bg-gray-900 text-white px-8 py-4 rounded hover:bg-gray-800 transition font-medium"
                >
                  Me contacter
                </a>
                <a 
                  href="/cvvv.pdf" 
                  className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded hover:bg-gray-100 hover:border-gray-400 transition font-medium"
                >
                  Télécharger mon CV
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-48 h-48 bg-gray-900 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-5xl font-bold">AT</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded shadow-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-900">+2 ans d'XP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                ACTUEL
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Ingénieur Full-Stack & Data</h3>
                <p className="text-slate-600 font-medium">Crédit Agricole Franche-Comté • Sept 2023 - Présent</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">⚡</span> Applications métier full-stack
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Interfaces décisionnelles (React) utilisées par 100+ conseillers • 
                  Backend Python/PHP • Architecture SQL Server + APIs REST
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">📊</span> Data & MLOps
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Industrialisation de modèles de scoring • Pipelines données pour 
                  segmentation client • Datamart centralisé (15 tables), +50% d'efficacité analytique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approche & Impact */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Approche & Impact</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Ma valeur ajoutée : transformer un besoin métier en solution complète et opérationnelle
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 hover:shadow-lg transition">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Autonomie & Leadership</h3>
              <p className="text-slate-600 leading-relaxed">
                3 projets menés de la conception au déploiement en production
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 hover:shadow-lg transition">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Impact Métier</h3>
              <p className="text-slate-600 leading-relaxed">
                Solutions utilisées par 100+ conseillers quotidiennement
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 hover:shadow-lg transition">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Approche Collaborative</h3>
              <p className="text-slate-600 leading-relaxed">
                Synergie avec les équipes métier et techniques pour aligner data, APIs et interfaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Stack Technique</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Data & ML</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'ETL', 'Machine Learning', 'Spark/Hadoop'].map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Développement</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'PHP', 'C#', 'ASP.NET', 'APIs REST'].map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
              <h3 className="font-bold text-lg mb-4 text-slate-900">Outils & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'SQL Server', 'MySQL', 'Apache'].map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Discutons de votre projet</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Vous cherchez un profil polyvalent capable de prendre en charge des projets 
            de bout en bout ? Contactez-moi.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="mailto:contact@ataieb-dev.fr" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-medium shadow-lg inline-flex items-center gap-2"
            >
              <span>📧</span> contact@ataieb-dev.fr
            </a>
            <a 
              href="tel:+33769214226" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-medium shadow-lg inline-flex items-center gap-2"
            >
              <span>📱</span> +33 7.69.21.42.26
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/ataieb3342" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition font-medium underline"
            >
              LinkedIn
            </a>
            <span className="text-blue-300">•</span>
            <a 
              href="https://github.com/ataieb3342" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition font-medium underline"
            >
              GitHub
            </a>
            <span className="text-blue-300">•</span>
            <a 
              href="https://www.ataieb-dev.fr" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition font-medium underline"
            >
              Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-center">
        <p className="text-slate-400 text-sm">
          © 2024 Adam Taïeb • Ingénieur Full-Stack & Data
        </p>
      </footer>
    </div>
  )
}