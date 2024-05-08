$(document).ready(function() {
    $('#show-recipes').click(function() {
        $('.recipe-popup').html('<p>Извинитесь, это конфиденциальная информация, мы не можем поделиться с вами рецептом. Но вы можете заказать наши напитки с оставкой на дом!</p>');
    });

    $('.more-info').click(function() {
        var coffeeName = $(this).prev().attr('alt');
        $('.cart').append('<p>' + coffeeName + '</p>');
    });

    var isDarkTheme = false;
    $('#change-theme').click(function() {
        if (!isDarkTheme) {
            $('body').addClass('dark-theme');
            isDarkTheme = true;
        } else {
            $('body').removeClass('dark-theme');
            isDarkTheme = false;
        }
    });

    $('.coffee-image').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });

    // Изменить цвет кнопок
    $('.more-info').css({
        'background-color': '#00704a', 
        'color': '#ffffff', 
        'font-size': '16px', 
        'border-radius': '5px', 
        'padding': '10px 20px', 
        'border': 'none' 
    });

    // Изменить цвет фона контейнера
    $('.container').css('background-color', '#ffffff');

    // Изменить цвет текста в корзине
    $('.cart').css('color', '#000000');

    // Изменить тему сайта
    $('#change-theme').click(function() {
        $('body').toggleClass('dark-theme');
        if ($('body').hasClass('dark-theme')) {
            $('.more-info').css({
                'background-color': '#000000',
                'color': '#ffffff'
            });
            $('.container').css('background-color', '#00704a');
            $('.cart').css('color', '#00704a');
        } else {
            $('.more-info').css({
                'background-color': '#00704a',
                'color': '#ffffff'
            });
            $('.container').css('background-color', '#ffffff');
            $('.cart').css('color', '#000000');
        }
    });
});
