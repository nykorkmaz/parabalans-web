import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Metin içeriği */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ailenizin{' '}
              <span className="gradient-text">Finansal Geleceğini</span>{' '}
              Güvence Altına Alın
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              iPhone ve iPad&apos;inizde ParaBalans ile gelir-gider takibi, bütçe planlama ve hedef belirleme artık çok kolay.
              Ailenizle birlikte finansal kontrolü elinize alın.
            </p>
            
            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://apps.apple.com/tr/app/parabalans/id6746780359?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold text-center inline-block"
              >
                App Store'dan İndir
              </a>
              <Link
                href="/features"
                className="border-2 border-parabalans-blue text-parabalans-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-parabalans-blue hover:text-white transition-all text-center inline-block"
              >
                Özellikleri Keşfet
              </Link>
            </div>

            {/* Özellik ikonları */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-parabalans-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Ücretsiz</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-parabalans-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Güvenli</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-parabalans-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Kolay Kullanım</span>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone çerçevesi */}
              <div className="relative bg-black rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl">
                {/* Ekran görüntüsü placeholder */}
                <div className="w-64 h-[480px] md:w-80 md:h-[640px] bg-gradient-parabalans rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Image
                        src="/parabalans_logo.png"
                        alt="ParaBalans"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">ParaBalans</h3>
                    <p className="text-xs md:text-sm opacity-90">Akıllı Bütçe Yönetimi</p>
                  </div>
                </div>
              </div>

              {/* Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2rem] md:rounded-[3rem] pointer-events-none"></div>

              {/* Dekoratif elementler */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-parabalans-blue/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-20 h-20 md:w-32 md:h-32 bg-parabalans-green/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekoratif arka plan elementleri */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-parabalans-blue rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-parabalans-green rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-parabalans-blue rounded-full opacity-20"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-parabalans-green rounded-full opacity-20"></div>
      </div>
    </section>
  );
}
