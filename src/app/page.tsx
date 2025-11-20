export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-8">
            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Adam <span className="text-blue-600">Taïeb</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Ingénieur Data & Développement Full-Stack
              </p>
              <p className="text-lg text-gray-500 mb-8">
                Je conçois et déploie des solutions data-driven, 
                de la modélisation à l&apos;application en production.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/cv.pdf" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Télécharger mon CV
                </a>
                <a 
                  href="#contact" 
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
                >
                  Me contacter
                </a>
              </div>
            </div>
            
            {/* Photo ou icône technique */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">AT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mon Approche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span>🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Autonomie & Leadership</h3>
              <p className="text-gray-600 text-sm">3 projets menés de A à Z en production</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span>📈</span>
              </div>
              <h3 className="font-semibold mb-2">Impact Métier</h3>
              <p className="text-gray-600 text-sm">Solutions utilisées par 100+ conseillers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span>🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">UX et travail d&apos;équipe transverse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="flex justify-center gap-6">
            <a href="mailto:contact@ataieb-dev.fr" className="text-blue-600 hover:text-blue-700">
              contact@ataieb-dev.fr
            </a>
            <a href="https://linkedin.com/in/adam-taieb-3342ff" className="text-blue-600 hover:text-blue-700">
              LinkedIn
            </a>
            <a href="https://github.com/ataieb3342" className="text-blue-600 hover:text-blue-700">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}