import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function DownloadPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Sol taraf - İçerik */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  ParaBalans&apos;ı <span className="gradient-text">Ücretsiz İndirin</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  iPhone ve iPad&apos;inizde ParaBalans&apos;ı kullanarak ailenizin finansal geleceğini güvence altına alın.
                </p>

                {/* Download Buttons */}
                <div className="flex justify-center lg:justify-start mb-8">
                  <a
                    href="https://apps.apple.com/tr/app/parabalans/id6746780359?l=tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-parabalans-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Tamamen Ücretsiz</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-parabalans-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Reklamsız</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-parabalans-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Güvenli</span>
                  </div>
                </div>
              </div>

              {/* Sağ taraf - Phone mockup */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                    {/* Screen Content */}
                    <div className="w-80 h-[640px] bg-gradient-parabalans rounded-[2.5rem] flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Image
                            src="/parabalans_logo.png"
                            alt="ParaBalans"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-2">ParaBalans</h3>
                        <p className="text-sm opacity-90">Akıllı Bütçe Yönetimi</p>
                      </div>
                    </div>
                  </div>

                  {/* Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[3rem] pointer-events-none"></div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-parabalans-blue/15 to-parabalans-green/15 rounded-[4rem] blur-2xl opacity-40 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sistem Gereksinimleri
              </h2>
              <p className="text-xl text-gray-600">
                ParaBalans&apos;ı kullanmak için minimum sistem gereksinimleri
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* iOS Requirements */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center justify-center mb-6">
                  <svg className="w-12 h-12 text-gray-700 mr-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">iOS Cihazlar</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-parabalans-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>iOS 14.0 veya üzeri gereklidir</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-parabalans-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>iPhone 6s, iPad Air 2, iPad mini 4 veya daha yeni modeller</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-parabalans-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>50 MB boş depolama alanı</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-parabalans-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>İnternet bağlantısı (veri senkronizasyonu için)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              QR Kod ile Hızlı İndirme
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              iPhone&apos;unuzla QR kodu tarayın ve ParaBalans&apos;ı App Store&apos;dan hemen indirin
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
              <div className="w-48 h-48 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h2M4 4h4m0 0V2m0 2h2m0 0h2m0 0v2M4 4v4m0 0h2m0 0h2" />
                  </svg>
                  <p className="text-sm">QR Kod</p>
                  <p className="text-xs">Yakında</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Yardıma mı İhtiyacınız Var?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              ParaBalans&apos;ı indirme veya kullanma konusunda sorularınız varsa bizimle iletişime geçin
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/guide"
                className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Kullanım Kılavuzu
              </a>
              <a
                href="mailto:destek@parabalans.com"
                className="border-2 border-parabalans-blue text-parabalans-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-parabalans-blue hover:text-white transition-all"
              >
                Destek Ekibi
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
