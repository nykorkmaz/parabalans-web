import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 4h4" />
        </svg>
      ),
      title: "Ev Oluşturma ve Kullanıcı Davet",
      description: "Aileniz için özel bir finansal alan oluşturun ve aile üyelerini kolayca davet edin.",
      details: [
        "Sınırsız sayıda ev oluşturabilirsiniz",
        "Davet Kodu ile kolay davet sistemi"
      ],
      image: "/images/anasayfa/anasayfa.png"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Gelir & Gider Takibi",
      description: "Tüm gelir ve giderlerinizi kategorilere ayırarak detaylı şekilde takip edin.",
      details: [
        "Özelleştirilebilir kategori sistemi",
        "Aylık, haftalık, günlük görünümler"
      ],
      image: "/images/islemler/islemler.png"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Düzenli İşlemler",
      description: "Maaş, kira, fatura gibi düzenli gelir ve giderlerinizi otomatik olarak takip edin.",
      details: [
        "Otomatik tekrarlayan işlemler",
        "Esnek tekrar seçenekleri (günlük, haftalık, aylık)",
        "Hatırlatma bildirimleri",
        "Gelecek ödemeler takvimi"
      ],
      image: "/images/islemler/duzenli islemler.png"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Akıllı Bütçe Planlama",
      description: "Aylık bütçenizi kategorilere göre planlayın ve harcama limitlerini belirleyin.",
      details: [
        "Kategori bazlı bütçe limitleri",
        "Gerçek zamanlı bütçe takibi",
        "Limit aşımı uyarıları",
        "Bütçe performans analizi"
      ],
      image: "/images/butce/butce.png"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Hedef Belirleme ve Takip",
      description: "Finansal hedeflerinizi belirleyin ve bu hedeflere ulaşmak için plan yapın.",
      details: [
        "Kısa ve uzun vadeli hedefler",
        "Otomatik tasarruf hesaplaması",
        "Hedef ilerleme takibi",
        "Motivasyon bildirimleri"
      ],
      image: "/images/hedef/hedefler.png"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Detaylı Raporlar ve Analizler",
      description: "Harcama alışkanlıklarınızı analiz edin ve finansal durumunuzu takip edin.",
      details: [
        "Görsel grafikler ve çizelgeler",
        "Trend analizi",
        "Kategori bazlı harcama dağılımı"
      ],
      image: "/images/anasayfa/finansal raporlar.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ParaBalans <span className="gradient-text">Özellikleri</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ailenizin finansal yönetimini kolaylaştıran güçlü özellikler ile 
              para kontrolünü elinize alın ve geleceğinizi planlayın.
            </p>
          </div>
        </section>

        {/* Features Detail Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-12 py-16 px-8 rounded-3xl ${
                    index % 2 === 0 ? 'bg-gradient-to-r from-blue-50/50 to-green-50/50' : 'bg-gradient-to-r from-green-50/50 to-blue-50/50'
                  } border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  {/* İkon ve Başlık */}
                  <div className="flex-1">
                    <div className="w-20 h-20 bg-gradient-parabalans rounded-3xl flex items-center justify-center text-white mb-6">
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <svg className="w-6 h-6 text-parabalans-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phone Mockup */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative">
                      {/* Phone Frame */}
                      <div className="relative bg-black rounded-[2rem] p-1.5 shadow-xl transform hover:scale-105 transition-transform duration-300">
                        {/* Screen Content */}
                        <div className="relative w-48 h-96 bg-white rounded-[1.5rem] overflow-hidden">
                          {feature.image ? (
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              className="object-cover rounded-[1.5rem]"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-parabalans flex items-center justify-center">
                              <div className="text-center text-white">
                                <div className="w-12 h-12 bg-white/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                                  {feature.icon}
                                </div>
                                <p className="text-sm font-semibold">Ekran Görüntüsü</p>
                                <p className="text-xs opacity-80">Yakında eklenecek</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Reflection Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2rem] pointer-events-none"></div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-parabalans-blue/15 to-parabalans-green/15 rounded-[2.5rem] blur-xl opacity-30 -z-10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tüm Bu Özellikleri Ücretsiz Deneyin
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              ParaBalans'ı indirin ve ailenizin finansal geleceğini güvence altına alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/tr/app/parabalans/id6746780359?l=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                App Store'dan İndir
              </a>
              <a
                href="/guide"
                className="border-2 border-parabalans-blue text-parabalans-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-parabalans-blue hover:text-white transition-all"
              >
                Kullanım Kılavuzu
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
