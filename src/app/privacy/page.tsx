import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gizlilik <span className="gradient-text">Politikası</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kişisel verilerinizin korunması bizim için çok önemlidir. 
              Bu politika, verilerinizi nasıl topladığımızı ve koruduğumuzu açıklar.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Son güncelleme: 15 Haziran 2025
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Toplanan Bilgiler</h2>
                <p className="text-gray-600 mb-4">
                  ParaBalans uygulamasını kullanırken aşağıdaki bilgileri topluyoruz:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Hesap bilgileri (e-posta adresi, kullanıcı adı)</li>
                  <li>Finansal veriler (gelir, gider, bütçe bilgileri)</li>
                  <li>Uygulama kullanım verileri</li>
                  <li>Cihaz bilgileri (iOS versiyonu, cihaz modeli)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Bilgilerin Kullanımı</h2>
                <p className="text-gray-600 mb-4">
                  Topladığımız bilgileri şu amaçlarla kullanırız:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Uygulama hizmetlerini sağlamak ve geliştirmek</li>
                  <li>Kullanıcı deneyimini kişiselleştirmek</li>
                  <li>Teknik destek sağlamak</li>
                  <li>Güvenlik ve dolandırıcılık önleme</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Veri Güvenliği</h2>
                <p className="text-gray-600 mb-4">
                  Verilerinizin güvenliği için aşağıdaki önlemleri alıyoruz:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>End-to-end şifreleme</li>
                  <li>Güvenli sunucu altyapısı</li>
                  <li>Düzenli güvenlik denetimleri</li>
                  <li>Sınırlı erişim kontrolü</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Veri Paylaşımı</h2>
                <p className="text-gray-600 mb-4">
                  Kişisel verilerinizi üçüncü taraflarla paylaşmayız. İstisnai durumlar:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Yasal zorunluluklar</li>
                  <li>Kullanıcının açık rızası</li>
                  <li>Güvenlik tehditleri</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kullanıcı Hakları</h2>
                <p className="text-gray-600 mb-4">
                  KVKK kapsamında sahip olduğunuz haklar:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Verilerinize erişim hakkı</li>
                  <li>Veri düzeltme hakkı</li>
                  <li>Veri silme hakkı</li>
                  <li>Veri taşınabilirlik hakkı</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. İletişim</h2>
                <p className="text-gray-600">
                  Gizlilik politikamız hakkında sorularınız için:
                  <br />
                  E-posta: <a href="mailto:gizlilik@parabalans.com" className="text-parabalans-blue hover:underline">gizlilik@parabalans.com</a>
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
