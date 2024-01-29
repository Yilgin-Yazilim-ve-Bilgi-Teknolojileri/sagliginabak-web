// Tüm ürünleri seç
const ürünler = document.querySelectorAll('.ürün');

// Her bir ürün için tıklama olayı ekle
ürünler.forEach(ürün => {
  const detayButonu = ürün.querySelector('.ürün-detay-buton');
  
  detayButonu.addEventListener('click', () => {
    // Tıklanan ürünün detaylarına gönder
    const ürünAdı = ürün.querySelector('.ürün-adı').textContent;
    const ürünAçıklama = ürün.querySelector('.ürün-açıklama').textContent;
    const ürünFiyat = "100 TL"; // Örnek olarak sabit bir fiyat ekledim, gerçek fiyatı burada belirleyebilirsiniz
    
    // Detay sayfasına yönlendirme
    const detayURL = `üründetay.html?ad=${encodeURIComponent(ürünAdı)}&açıklama=${encodeURIComponent(ürünAçıklama)}&fiyat=${encodeURIComponent(ürünFiyat)}`;
    window.location.href = detayURL;
  });
});
