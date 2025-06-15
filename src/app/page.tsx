import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kullanıcılarımız Ne Diyor?
              </h2>
              <p className="text-xl text-gray-600">
                ParaBalans ile finansal kontrolü ele alan aileler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-parabalans rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Ahmet K.</h4>
                    <p className="text-gray-600 text-sm">Aile Babası</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "ParaBalans sayesinde ailemizin harcamalarını çok daha iyi kontrol edebiliyoruz.
                  Özellikle bütçe planlama özelliği harika!"
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-parabalans rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Selin Y.</h4>
                    <p className="text-gray-600 text-sm">Ev Hanımı</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Düzenli işlemler özelliği çok pratik. Artık her ay aynı faturaları tekrar tekrar girmiyorum."
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-parabalans rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Mehmet D.</h4>
                    <p className="text-gray-600 text-sm">Mühendis</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Hedef belirleme özelliği motivasyonumu artırdı. Artık ne için para biriktirdiğimi biliyorum."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-parabalans">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Finansal Geleceğinizi Bugün Planlayın
            </h2>
            <p className="text-xl text-white/90 mb-8">
              ParaBalans'ı ücretsiz indirin ve ailenizin finansal kontrolünü elinize alın.
            </p>
            <div className="flex justify-center">
              <a
                href="https://apps.apple.com/tr/app/parabalans/id6746780359?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-parabalans-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                App Store'dan İndir
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
