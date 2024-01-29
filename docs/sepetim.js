// Ürün bilgileri için bir dizi oluştur
const products = [
    {
        id: 1,
        name: 'Ürün 1',
        price: 19.99,
        image: 'resimler/ürün1.png',
        description: 'Bu ürün hakkında detaylı bilgi...'
    },
    {
        id: 2,
        name: 'Ürün 2',
        price: 29.99,
        image: 'resimler/ürün2.png',
        description: 'Bu ürün hakkında detaylı bilgi...'
    },
    {
        id: 3,
        name: 'Ürün 3',
        price: 39.99,
        image: 'resimler/ürün3.png',
        description: 'Bu ürün hakkında detaylı bilgi...'
    },
    // Diğer ürünler
];

// Sepetin içeriğini saklamak için bir dizi oluştur
let cartItems = [];

// Sepeti depolama
function storeCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Sepeti yükleme
function loadCartItems() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
        cartItems = JSON.parse(storedItems);
    }
}

// Sepete ürün ekleme
function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cartItems.push(product);
        storeCartItems();
    }
}

// Sepetin toplam fiyatını hesaplama
function calculateTotalPrice() {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return total.toFixed(2);
}

// Sepetin içeriğini gösterme
function renderCartItems() {
    const sepetListesi = document.getElementById('sepetListesi');
    sepetListesi.innerHTML = '';

    cartItems.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-price">$${item.price}</p>
            <p class="card-description">${item.description}</p>
        `;
        sepetListesi.appendChild(cardDiv);
    });
}

// Sepetin toplam fiyatını gösterme
function renderTotalPrice() {
    const toplamFiyat = document.getElementById('toplamFiyat');
    toplamFiyat.innerHTML = `Toplam Fiyat: $${calculateTotalPrice()}`;
}

// Sepeti onaylama
function onaylaSepet() {
    alert('Sepetiniz onaylandı!');
    cartItems = [];
    storeCartItems();
    renderCartItems();
    renderTotalPrice();
}

// Sayfa yüklendiğinde sepeti yükle ve göster
window.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
    renderCartItems();
    renderTotalPrice();

    // Sepeti onayla butonuna tıklandığında onaylaSepet fonksiyonunu çağır
    const sepetiOnayla = document.getElementById('sepetiOnayla');
    sepetiOnayla.addEventListener('click', onaylaSepet);
});
