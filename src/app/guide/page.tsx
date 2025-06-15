import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function GuidePage() {
  const steps = [
    {
      step: "1",
      title: "Uygulamayı İndirin ve Hesap Oluşturun",
      description: "ParaBalans'ı App Store'dan indirin. E-posta adresinizle hızlıca hesap oluşturun.",
      details: [
        "App Store'dan ParaBalans'ı indirin",
        "E-posta adresinizi girin ve güvenli bir şifre oluşturun"
      ]
    },
    {
      step: "2",
      title: "İlk Evinizi Oluşturun",
      description: "Ailenizin finansal verilerini yönetmek için bir ev oluşturun ve aile üyelerini davet edin.",
      details: [
        "Ana sayfada 'Yeni Ev Oluştur' butonuna tıklayın",
        "Evinize bir isim verin (örn: 'Aile Evi', 'Ana Ev')",
        "Davet kodu ile aile üyelerini davet edin"
      ],
      images: [
        "/images/evler/evler.png",
        "/images/evler/yeni ev.png"
      ]
    },
    {
      step: "3",
      title: "Aile Üyelerini Davet Edin",
      description: "Davet kodu ile aile üyelerinizi evinize davet edin.",
      details: [
        "Ev detay sayfasında 'Davet Et' butonuna tıklayın",
        "Davet kodunu paylaşın",
        "Davet edilen kişiler otomatik olarak eve eklenir"
      ],
      images: [
        "/images/evler/ev detay.png",
        "/images/evler/eve davet et.png",
        "/images/evler/eve katıl.png"
      ]
    },
    {
      step: "4",
      title: "Ev Ayarlarını Düzenleyin",
      description: "Ev ismini değiştirin, para birimini güncelleyin veya evi silin.",
      details: [
        "Ev detay sayfasında 'Evi Düzenle' butonuna tıklayın",
        "Ev ismini değiştirin",
        "Gerekirse evi tamamen silebilirsiniz"
      ],
      images: [
        "/images/evler/evi duzenle.png"
      ]
    },
    {
      step: "4.1",
      title: "Ana Sayfa ve Dashboard'u Keşfedin",
      description: "Ana sayfada finansal durumunuzu özetleyin ve hızlı işlemler yapın.",
      details: [
        "Ana sayfada genel finansal durumunuzu görün",
        "Son işlemlerinizi ve bekleyen işlemleri kontrol edin",
        "Hızlı işlem ekleme butonlarını kullanın",
        "Finansal raporlara ve analizlere göz atın"
      ],
      images: [
        "/images/anasayfa/anasayfa.png",
        "/images/anasayfa/anasayfa2.png",
        "/images/anasayfa/anasayfa3.png"
      ]
    },
    {
      step: "4.2",
      title: "Bekleyen İşlemleri Yönetin",
      description: "Bekleyen işlemlerinizi görüntüleyin ve onaylayın.",
      details: [
        "Ana sayfada 'Bekleyen İşlemler' bölümüne gidin",
        "Düzenli işlemlerden gelen bekleyen ödemeleri görün",
        "İşlemleri onaylayın veya erteleyin",
        "Otomatik onay ayarlarını düzenleyin"
      ],
      images: [
        "/images/anasayfa/bekleyen islemler.png"
      ]
    },
    {
      step: "4.3",
      title: "Finansal Raporları İnceleyin",
      description: "Ana sayfadan finansal raporlarınıza hızlı erişim sağlayın.",
      details: [
        "Ana sayfada 'Finansal Raporlar' bölümüne gidin",
        "Aylık, haftalık gelir-gider özetlerini görün",
        "Kategori bazlı harcama dağılımını inceleyin",
        "Trend analizlerini takip edin"
      ],
      images: [
        "/images/anasayfa/finansal raporlar.png"
      ]
    },
    {
      step: "5",
      title: "Gelir ve Giderlerinizi Kaydedin",
      description: "Günlük harcamalarınızı ve gelirlerinizi kategorilere ayırarak kaydedin.",
      details: [
        "İşlemler sekmesine gidin",
        "'+' butonuna tıklayarak yeni işlem ekleyin",
        "Gelir veya Gider seçin",
        "Tutarı girin ve kategori seçin",
        "Açıklama ekleyin"
      ],
      images: [
        "/images/islemler/islemler.png",
        "/images/islemler/islem ekle.png"
      ]
    },
    {
      step: "5.1",
      title: "İşlem Detaylarını Düzenleyin",
      description: "Mevcut işlemlerinizi düzenleyin veya silin.",
      details: [
        "İşlemler listesinden bir işleme tıklayın",
        "İşlem detaylarını görüntüleyin",
        "'Düzenle' butonuna tıklayın",
        "İşlem bilgilerini güncelleyin veya silin"
      ],
      images: [
        "/images/islemler/islem duzenle.png"
      ]
    },
    {
      step: "6",
      title: "Düzenli İşlemleri Ayarlayın",
      description: "Maaş, kira, fatura gibi düzenli ödemelerinizi otomatik hale getirin.",
      details: [
        "İşlemler sekmesinde 'Düzenli İşlemler' bölümüne gidin",
        "'Yeni Düzenli İşlem' butonuna tıklayın",
        "İşlem detaylarını girin (tutar, kategori, açıklama)",
        "Tekrar sıklığını belirleyin (günlük, haftalık, aylık)"
      ],
      images: [
        "/images/islemler/duzenli islemler.png",
        "/images/islemler/duzenli islem ekle.png"
      ]
    },
    {
      step: "6.1",
      title: "Düzenli İşlem Detaylarını İnceleyin",
      description: "Oluşturduğunuz düzenli işlemlerin detaylarını görüntüleyin ve yönetin.",
      details: [
        "Düzenli işlemler listesinden bir işleme tıklayın",
        "İşlem geçmişini ve detaylarını inceleyin",
        "Sonraki ödeme tarihini kontrol edin",
        "Gerekirse işlemi düzenleyin veya durdurun"
      ],
      images: [
        "/images/islemler/duzenli islem detay.png"
      ]
    },
    {
      step: "7",
      title: "Aylık Bütçenizi Planlayın",
      description: "Her kategori için harcama limitleri belirleyin ve bütçenizi takip edin.",
      details: [
        "Bütçe sekmesine gidin",
        "Yeni bütçe oluşturun",
        "Her kategori için aylık limit belirleyin",
        "Bütçe dönemini ayarlayın"
      ],
      images: [
        "/images/butce/butce.png",
        "/images/butce/yeni butce.png"
      ]
    },
    {
      step: "7.1",
      title: "Bütçe Detaylarını İnceleyin",
      description: "Oluşturduğunuz bütçenin detaylarını görüntüleyin ve ilerlemeyi takip edin.",
      details: [
        "Bütçe listesinden bir bütçeye tıklayın",
        "Kategori bazlı harcama dağılımını görün",
        "Kalan bütçe miktarlarını kontrol edin",
        "Bütçe performansınızı analiz edin"
      ],
      images: [
        "/images/butce/butce detay.png"
      ]
    },
    {
      step: "7.2",
      title: "Bütçeye Harcama Ekleyin",
      description: "Bütçenize harcama ekleyerek gerçek zamanlı takip yapın.",
      details: [
        "Bütçe detay sayfasında 'Harcama Ekle' butonuna tıklayın",
        "Harcama tutarını ve kategorisini seçin",
        "Harcama açıklaması ekleyin",
        "Bütçe grafiklerinin güncellendiğini görün"
      ],
      images: [
        "/images/butce/butce harcama ekle.png",
        "/images/butce/butce harcamaalrı.png"
      ]
    },
    {
      step: "7.3",
      title: "Bütçe Ayarlarını Düzenleyin",
      description: "Mevcut bütçenizi düzenleyin veya kategori limitlerini güncelleyin.",
      details: [
        "Bütçe detay sayfasında 'Düzenle' butonuna tıklayın",
        "Kategori limitlerini değiştirin",
        "Bütçe dönemini güncelleyin",
        "Gerekirse bütçeyi tamamen silebilirsiniz"
      ],
      images: [
        "/images/butce/butce duzenle.png"
      ]
    },
    {
      step: "8",
      title: "Finansal Hedeflerinizi Belirleyin",
      description: "Kısa ve uzun vadeli hedefler koyun, bu hedeflere ulaşmak için plan yapın.",
      details: [
        "Hedefler sekmesinde 'Yeni Hedef' oluşturun",
        "Hedef tutarını ve süresini belirleyin",
        "Aylık tasarruf miktarını hesaplayın",
        "İlerlemenizi düzenli olarak takip edin"
      ],
      images: [
        "/images/hedef/hedefler.png",
        "/images/hedef/yeni hedef.png"
      ]
    },
    {
      step: "9",
      title: "Hedef Detaylarını Görüntüleyin",
      description: "Oluşturduğunuz hedeflerin detaylarını inceleyin ve ilerlemenizi takip edin.",
      details: [
        "Hedef listesinden bir hedefe tıklayın",
        "Hedef detay sayfasında ilerlemeyi görün",
        "Kalan süre ve tutarı kontrol edin",
        "Hedef grafiğini inceleyin"
      ],
      images: [
        "/images/hedef/hedef detay.png"
      ]
    },
    {
      step: "10",
      title: "Hedefe Para Ekleyin",
      description: "Hedeflerinize düzenli olarak para ekleyerek ilerleme kaydedin.",
      details: [
        "Hedef detay sayfasında 'Para Ekle' butonuna tıklayın",
        "Eklemek istediğiniz tutarı girin",
        "İsteğe bağlı açıklama ekleyin",
        "İlerleme grafiğinizin güncellendiğini görün"
      ],
      images: [
        "/images/hedef/hedefe para ekleme.png"
      ]
    },
    {
      step: "11",
      title: "Hedef Ayarlarını Düzenleyin",
      description: "Mevcut hedeflerinizi düzenleyin veya silin.",
      details: [
        "Hedef detay sayfasında 'Düzenle' butonuna tıklayın",
        "Hedef adını, tutarını veya süresini değiştirin",
        "Hedef kategorisini güncelleyin",
        "Gerekirse hedefi tamamen silebilirsiniz"
      ],
      images: [
        "/images/hedef/hedefi duzenle.png"
      ]
    },
    {
      step: "12",
      title: "Bildirimleri Yönetin",
      description: "Uygulama bildirimlerinizi görüntüleyin ve yönetin.",
      details: [
        "Bildirimler sekmesine gidin",
        "Gelen bildirimleri inceleyin",
        "Önemli bildirimleri işaretleyin",
        "Bildirim ayarlarını düzenleyin"
      ],
      images: [
        "/images/bildirim/Simulator Screenshot - iPhone 16 Pro Max - 2025-06-15 at 23.05.51.png"
      ]
    }
  ];

  const tips = [
    {
      icon: "💡",
      title: "Düzenli Kayıt Tutun",
      description: "Her harcamanızı hemen kaydetme alışkanlığı edinin. Bu sayede daha doğru analizler elde edersiniz."
    },
    {
      icon: "📊",
      title: "Raporları İnceleyin",
      description: "Aylık raporlarınızı düzenli olarak inceleyin ve harcama alışkanlıklarınızı analiz edin."
    },
    {
      icon: "🎯",
      title: "Gerçekçi Hedefler Koyun",
      description: "Ulaşılabilir hedefler belirleyin ve küçük adımlarla ilerleyin."
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Aile İle Paylaşın",
      description: "Tüm aile üyelerinin uygulamayı kullanmasını sağlayın. Birlikte daha başarılı olursunuz."
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
              ParaBalans <span className="gradient-text">Kullanım Kılavuzu</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ParaBalans'ı etkili şekilde kullanmak için adım adım rehberimizi takip edin. 
              Finansal kontrolünüzü elinize almak hiç bu kadar kolay olmamıştı.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-parabalans rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <svg className="w-6 h-6 text-parabalans-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Screenshots */}
                      {step.images && step.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {step.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="flex flex-col items-center">
                              {/* Phone Mockup */}
                              <div className="relative">
                                {/* Phone Frame */}
                                <div className="relative bg-black rounded-[2rem] p-1.5 shadow-xl transform hover:scale-105 transition-transform duration-300">
                                  {/* Screen Content */}
                                  <div className="relative w-48 h-96 bg-white rounded-[1.5rem] overflow-hidden">
                                    <Image
                                      src={image}
                                      alt={`${step.title} - Ekran ${imageIndex + 1}`}
                                      fill
                                      className="object-cover rounded-[1.5rem]"
                                    />
                                  </div>
                                </div>

                                {/* Reflection Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2rem] pointer-events-none"></div>

                                {/* Glow Effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-parabalans-blue/15 to-parabalans-green/15 rounded-[2.5rem] blur-xl opacity-30 -z-10"></div>
                              </div>

                              {/* Caption */}
                              <p className="text-sm text-gray-600 text-center mt-3 font-medium">
                                {imageIndex === 0 && step.images.length > 1 ? 'Ana Ekran' :
                                 imageIndex === 1 && step.images.length > 2 ? 'Detay Ekranı' :
                                 imageIndex === 2 ? 'Sonuç Ekranı' :
                                 `Ekran ${imageIndex + 1}`}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Başarı İçin İpuçları
              </h2>
              <p className="text-xl text-gray-600">
                ParaBalans'tan maksimum verim almak için bu önerileri uygulayın
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sıkça Sorulan Sorular
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ParaBalans ücretsiz mi?
                </h3>
                <p className="text-gray-600">
                  Evet, ParaBalans tamamen ücretsizdir. Tüm temel özellikler hiçbir ücret ödemeden kullanılabilir.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Verilerim güvende mi?
                </h3>
                <p className="text-gray-600">
                  Tüm verileriniz şifreli olarak saklanır ve sadece sizin erişiminizde olur. Hiçbir üçüncü tarafla paylaşılmaz.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Kaç kişi aynı eve katılabilir?
                </h3>
                <p className="text-gray-600">
                  Bir eve sınırsız sayıda aile üyesi katılabilir. Herkes kendi harcamalarını takip edebilir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-parabalans">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hemen Başlayın!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              ParaBalans'ı indirin ve finansal kontrolünüzü elinize alın.
            </p>
            <a
              href="https://apps.apple.com/tr/app/parabalans/id6746780359?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-parabalans-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              App Store'dan İndir
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
