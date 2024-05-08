// анимация сообщество

const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');

window.addEventListener('load', () => {
    setTimeout(() => {
        image1.style.opacity = '1';
        image1.style.transform = 'translateY(0)';
    }, 1000);
    
    setTimeout(() => {
        image2.style.opacity = '1';
        image2.style.transform = 'translateY(0)';
    }, 1500);
});

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    
    image1.style.transform = `translateX(${x * 0.01}px) translateY(${x * 0.01}px)`;
    
    image2.style.transform = `translateX(${-x * 0.01}px) translateY(${-x * 0.01}px)`;
});

const heading = document.querySelector('#heading');
window.addEventListener('load', () => {
    heading.style.opacity = '1';
    heading.style.transform = 'translateY(0)';
});

//для анимации изменения размера шрифта заголовка
const banner = document.querySelector('.banner h1');

// для увеличения размера шрифта
function increaseFontSize() {
    heading.style.fontSize = '72px'; // Увеличиваем размер шрифта до 72px
}

// Вызываем функцию через небольшую задержку (например, 1 секунду)
setTimeout(increaseFontSize, 1000); // Увеличение размера через 1 секунду

// Применяем анимацию изменения размера шрифта через CSS transition
heading.style.transition = 'font-size 0.5s ease'; // Анимация изменения размера шрифта






// Функция обновления отображения корзины
function updateCart() {
    const cartElement = document.querySelector('.user-profile');
    cartElement.innerHTML = '<h2>Корзина</h2>';

    if (shoppingCart.length === 0) {
        cartElement.innerHTML += '<p>Ваша корзина пуста.</p>';
    } else {
        shoppingCart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `${item.name} - $${item.price}`;
            cartElement.appendChild(cartItem);
        });

        const totalPrice = shoppingCart.reduce((total, item) => total + item.price, 0);
        cartElement.innerHTML += `<p>Итого: $${totalPrice.toFixed(2)}</p>`;
    }
}

// Функция поиска напитков (заглушка)
function searchDrinks() {
    const searchInput = document.getElementById('drinkSearch').value;
    alert(`Поиск: ${searchInput}`);
}

// Функция заполнения списка продуктов по выбранной категории
function populateProductList(category) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Очистить существующее содержимое

    // Симуляция данных о продуктах (замените на реальные данные из базы данных)
    const products = [
        { id: 1, name: 'Капучино', category: 'Кофе', price: 3.99 },
        { id: 2, name: 'Латте Макиато', category: 'Кофе', price: 4.49 },
        { id: 3, name: 'Зеленый чай', category: 'Чай', price: 2.99 },
        { id: 4, name: 'Круассан', category: 'Пирожные', price: 2.49 }
        // Добавьте больше продуктов по мере необходимости
    ];

    // Фильтрация продуктов по выбранной категории
    const filteredProducts = products.filter(product => product.category === category);

    // Отображение отфильтрованных продуктов
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Категория: ${product.category}</p>
            <p>Цена: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productList.appendChild(productItem);
    });
}


// Список фоновых изображений для тела страницы
const backgrounds = [
    'стаканы.jpg',
    'кофейня.webp',
    'стакан1.webp'
];

let currentBackgroundIndex = 0;

// Функция для изменения фонового изображения с анимацией
function changeBackground() {
    const body = document.body;
    body.style.transition = 'background-image 0.5s ease';
    body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}

// Изменение фонового изображения каждые 5 секунд (5000 миллисекунд)
setInterval(changeBackground, 3000); // вызываем функцию changeBackground каждые 5 секунд


//review


// Массив для хранения отзывов
let reviews = [];

// Функция для обновления отображения отзывов на странице
function displayReviews() {
    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.innerHTML = ''; // Очищаем содержимое контейнера перед обновлением

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p><strong>Оценка:</strong> ${review.rating}</p>
            <p><strong>Отзыв:</strong> ${review.text}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

// Функция для установки звездочной оценки
function setRating(value) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('active', starValue <= value);
    });

    const ratingContainer = document.querySelector('.stars');
    ratingContainer.setAttribute('data-rating', value);
}

// Функция для отправки отзыва
function submitReview() {
    const rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    const reviewText = document.getElementById('reviewText').value;

    if (rating === 0 || reviewText.trim() === '') {
        alert('Пожалуйста, оцените нас звездами и оставьте ваш отзыв.');
        return;
    }

    const review = {
        rating: rating,
        text: reviewText
    };

    reviews.push(review);
    displayReviews(); // Обновляем отображение отзывов
}

// Инициализация звездочной оценки
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            setRating(value);
        });
    });
});
