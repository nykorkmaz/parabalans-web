import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kullanım <span className="gradient-text">Şartları</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ParaBalans uygulamasını kullanarak aşağıdaki şartları kabul etmiş olursunuz.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Son güncelleme: 15 Haziran 2025
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Hizmet Tanımı</h2>
                <p className="text-gray-600">
                  ParaBalans, iOS cihazlar için geliştirilmiş bir aile bütçe yönetimi uygulamasıdır. 
                  Uygulama, gelir-gider takibi, bütçe planlama, hedef belirleme ve finansal raporlama 
                  hizmetleri sunar.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kullanıcı Sorumlulukları</h2>
                <p className="text-gray-600 mb-4">
                  Uygulamayı kullanırken aşağıdaki kurallara uymanız gerekmektedir:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Doğru ve güncel bilgiler sağlamak</li>
                  <li>Hesap güvenliğini korumak</li>
                  <li>Yasalara uygun kullanım</li>
                  <li>Diğer kullanıcıların haklarına saygı göstermek</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hizmet Kullanılabilirliği</h2>
                <p className="text-gray-600 mb-4">
                  ParaBalans hizmetleri:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>7/24 erişilebilir olmaya çalışılır</li>
                  <li>Bakım ve güncellemeler için kesintiler olabilir</li>
                  <li>Teknik sorunlar nedeniyle geçici kesintiler yaşanabilir</li>
                  <li>Önceden bildirim yapılmaya çalışılır</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fikri Mülkiyet</h2>
                <p className="text-gray-600">
                  ParaBalans uygulaması ve içeriği telif hakkı ile korunmaktadır. 
                  Uygulamanın kaynak kodunu kopyalamak, dağıtmak veya ticari amaçla 
                  kullanmak yasaktır.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sorumluluk Reddi</h2>
                <p className="text-gray-600 mb-4">
                  ParaBalans:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Finansal tavsiye vermez</li>
                  <li>Yatırım önerilerinde bulunmaz</li>
                  <li>Veri kaybından sorumlu değildir (yedekleme önerilir)</li>
                  <li>Üçüncü taraf hizmetlerden sorumlu değildir</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hesap Sonlandırma</h2>
                <p className="text-gray-600">
                  Kullanım şartlarını ihlal eden hesaplar uyarı verilmeksizin 
                  sonlandırılabilir. Kullanıcılar hesaplarını istediği zaman 
                  silebilir.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Değişiklikler</h2>
                <p className="text-gray-600">
                  Bu kullanım şartları zaman zaman güncellenebilir. 
                  Önemli değişiklikler uygulama içinde bildirilir.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. İletişim</h2>
                <p className="text-gray-600">
                  Kullanım şartları hakkında sorularınız için:
                  <br />
                  E-posta: <a href="mailto:destek@parabalans.com" className="text-parabalans-blue hover:underline">destek@parabalans.com</a>
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
