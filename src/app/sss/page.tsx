import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SSS() {
  const faqs = [
    {
      question: "ParaBalans nedir?",
      answer: "ParaBalans, ailenizin finansal yönetimini kolaylaştıran iOS uygulamasıdır. Gelir-gider takibi, bütçe planlama, hedef belirleme ve finansal raporlama özelliklerini tek platformda sunar."
    },
    {
      question: "Uygulama ücretsiz mi?",
      answer: "Evet, ParaBalans tamamen ücretsizdir. App Store'dan indirip hemen kullanmaya başlayabilirsiniz."
    },
    {
      question: "Android versiyonu var mı?",
      answer: "Şu anda ParaBalans sadece iOS (iPhone ve iPad) için mevcuttur. Android versiyonu planlanmamaktadır."
    },
    {
      question: "Verilerim güvende mi?",
      answer: "Evet, tüm verileriniz şifreli olarak saklanır ve güvenli sunucularda barındırılır. Verileriniz üçüncü taraflarla paylaşılmaz."
    },
    {
      question: "Kaç kişi aynı eve katılabilir?",
      answer: "Bir eve sınırsız sayıda aile üyesi katılabilir. QR kod ile kolayca davet edebilir ve finansal verileri güvenle paylaşabilirsiniz."
    },
    {
      question: "Offline kullanabilir miyim?",
      answer: "Temel özellikler offline kullanılabilir, ancak veri senkronizasyonu ve aile üyeleri ile paylaşım için internet bağlantısı gereklidir."
    },
    {
      question: "Verilerimi nasıl yedekleyebilirim?",
      answer: "Verileriniz otomatik olarak bulut sunucularında yedeklenir. Ayrıca uygulama içinden manuel yedekleme de yapabilirsiniz."
    },
    {
      question: "Hangi para birimlerini destekliyor?",
      answer: "ParaBalans Türk Lirası (TL), Dolar ($), Euro (€) ve diğer major para birimlerini destekler."
    },
    {
      question: "Düzenli işlemler nasıl çalışır?",
      answer: "Maaş, kira, fatura gibi düzenli gelir ve giderlerinizi tanımlayabilirsiniz. Uygulama belirlediğiniz tarihlerde otomatik hatırlatma gönderir."
    },
    {
      question: "Bütçe limiti aştığımda ne olur?",
      answer: "Bütçe limitinizi aştığınızda anında bildirim alırsınız. Bu sayede harcamalarınızı kontrol altında tutabilirsiniz."
    },
    {
      question: "Raporları nasıl görüntüleyebilirim?",
      answer: "Ana sayfada ve raporlar bölümünde detaylı grafikler ve analizler bulabilirsiniz. Aylık, haftalık ve günlük raporları inceleyebilirsiniz."
    },
    {
      question: "Hesabımı nasıl silebilirim?",
      answer: "Hesabınızı silmek için uygulama içindeki ayarlar bölümünden 'Hesabı Sil' seçeneğini kullanabilirsiniz. Bu işlem geri alınamaz."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan <span className="gradient-text">Sorular</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ParaBalans hakkında merak ettiğiniz her şey burada. 
              Sorunuzun cevabını bulamazsanız bizimle iletişime geçin.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Başka Sorularınız Var mı?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Aradığınız cevabı bulamadıysanız, bizimle iletişime geçmekten çekinmeyin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:destek@parabalans.com"
                className="btn-gradient text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                E-posta Gönder
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
