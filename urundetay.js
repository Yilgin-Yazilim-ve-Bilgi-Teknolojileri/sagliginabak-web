// URL parametrelerini al
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Parametreleri kullanarak ürün detaylarını al
const ürünAdı = urlParams.get('ad');
const ürünAçıklama = urlParams.get('açıklama');
const ürünFiyat = urlParams.get('fiyat');

// Ürün detaylarını sayfada görüntüle
const ürünAdıElement = document.querySelector('.ürün-adı');
const ürünAçıklamaElement = document.querySelector('.ürün-açıklama');
const ürünFiyatElement = document.querySelector('.ürün-fiyat');

ürünAdıElement.textContent = ürünAdı;
ürünAçıklamaElement.textContent = ürünAçıklama;
ürünFiyatElement.textContent = ürünFiyat;
