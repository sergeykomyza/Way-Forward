// ================================================== ПЕРЕМЕННЫЕ
const header = document.querySelector('.header')
// ================================================== ПРОКРУТКА, ШАПКА
document.addEventListener('DOMContentLoaded', function () {
    // СКРОЛЛ К НУЖНОЙ СЕКЦИИ ПО КЛИКУ НА ПУНКТАХ МЕНЮ
    $('.menu__link').click(function () {
        var scroll_elem = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scroll_elem).offset().top
        }, 1000);
    });
    // ДОБАВЛЯЕМ АКТИВНЫЙ КЛАСС ШАПКЕ
    function headerActiveToggle() {
        const scrollSize = window.pageYOffset
        scrollSize > 1 ? header.classList.add('active') : header.classList.remove('active')
    }
    window.addEventListener('load', headerActiveToggle) // ПРИ ПЕРЕЗАГРУЗКЕ СТРАНИЦЫ ЕСЛИ СТРАНИЦА УЖЕ ПРОСКРОЛЛЕНА
    window.addEventListener('scroll', headerActiveToggle) // ПРИ СКРОЛЛЕ
});

// ================================================== GAMBURGER
const gamburger = document.querySelector('.gamburger');
const firstLine = gamburger.querySelectorAll('span')[0];
const middleLine = gamburger.querySelectorAll('span')[1];
const lastLine = gamburger.querySelectorAll('span')[2];
gamburger.addEventListener('click', function(){
    middleLine.classList.toggle('open');
    firstLine.classList.toggle('open');
    lastLine.classList.toggle('open');
});

// ================================================== МАСКА ДЛЯ ИНПУТОВ (https://github.com/RobinHerbots/Inputmask)
$(document).ready(function () {
    $(".phone").inputmask({
        mask: "+7 999 999 99 99",
        clearIncomplete: true
    });
    $('.email').inputmask({
        mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
        clearIncomplete: true
    //     greedy: false,
    //     onBeforePaste: function (pastedValue, opts) {
    //         pastedValue = pastedValue.toLowerCase();
    //         return pastedValue.replace("mailto:", "");
    //     },
    //     definitions: {
    //         '*': {
    //             validator: "[0-9A-Za-z-а-я-]",
    //             casing: "lower"
    //         }
    //     }
    });
    $(".date").inputmask({
        mask: "99/99/9999",
        clearIncomplete: true,
        'placeholder': 'dd/mm/yyyy'
    });
});

// ================================================== СЛАЙДЕРЫ (https://kenwheeler.github.io/slick/)
document.addEventListener('DOMContentLoaded', function () {
    $('.slider-sales__carousel').slick({
        fade: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        variableWidth: false,
        prevArrow: '<button type="button" class="prev"><img src="../img/arrow-slider-button.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="../img/arrow-slider-button.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".prev").on("click", function () {
        $('.slider-sales__carousel').slick("slickPrev")
    });
    $(".next").on("click", function () {
        $('.slider-sales__carousel').slick("slickNext")
    });
    // пользовательская навигация
    // var dot = $(".dots__item");
    // $('.slider').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //     dot.removeClass("dots__item--active").eq(nextSlide).addClass("dots__item--active")
    // });
    // dot.on("click", function () {
    //     var i = dot.index(this);
    //     $('.slider').slick("slickGoTo", i)
    // });

// ============================================
$('.slider-orientation__carousel').slick({
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    // prevArrow: '<button type="button" class="prev"><img src="../img/arrow-slider-button.svg"></button>',
    // nextArrow: '<button type="button" class="next"><img src="../img/arrow-slider-button.svg"></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button type="button" class="prev"><img src="../img/arrow-slider-button.svg"></button>',
                nextArrow: '<button type="button" class="next"><img src="../img/arrow-slider-button.svg"></button>',
            }
        }
    ]
});
$(".prev").on("click", function () {
    $('.slider-sales__carousel').slick("slickPrev")
});
$(".next").on("click", function () {
    $('.slider-sales__carousel').slick("slickNext")
});
// пользовательская навигация
// var dot = $(".dots__item");
// $('.slider').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
//     dot.removeClass("dots__item--active").eq(nextSlide).addClass("dots__item--active")
// });
// dot.on("click", function () {
//     var i = dot.index(this);
//     $('.slider').slick("slickGoTo", i)
// });

});
// ================================================== HOVER ON MENU
    const menuItem = document.querySelectorAll('.menu__item')
    menuItem.forEach(item => {
        const subMenu = item.querySelector('.submenu')
        item.addEventListener('mouseover', function(){
            subMenu.classList.add('active')
        })
        item.addEventListener('mouseout', function(){
            setTimeout(function(){
                subMenu.classList.remove('active')
            }, 1000)
        })
    })

// ================================================== TABS
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
    function hideContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showContent(i) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    header.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });

    hideContent();
    showContent(0); // в скобках указываем индекс таба, который хотим видеть активным

}

tabs('.tabs__header', '.tabs__button', '.tabs__content', 'active');
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 

// ================================================== КАРТА, ОТЛОЖЕННАЯ ЗАГРУЗКА (ЧТОБЫ УЛУЧШИТЬ ПОКАЗАТЕЛИ - PageSpeed Insights)
// document.addEventListener('DOMContentLoaded', function () {
//     setTimeout(function() {
//         var headID = document.getElementsByTagName("body")[0];         
//         var newScript = document.createElement('script');
//         newScript.type = 'text/javascript';
//         newScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
//         headID.appendChild(newScript);
//     }, 3000);
//     setTimeout(function() {
//         var myMap = new ymaps.Map('map', {
//             center: [48.570612, 39.341628],
//             zoom: 16
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//             MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//                 '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//             ),
//             myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//                 hintContent: 'г. Луганск, кв. Лиховида 1',
//                 balloonContent: 'г. Луганск, кв. Лиховида 1'
//             }, {
//                 iconLayout: 'default#image',
//                 iconImageHref: 'img/logo_sign.png',
//                 iconImageSize: [40, 45],
//                 iconImageOffset: [-5, -38]
//             })
//         myMap.geoObjects
//             .add(myPlacemark)
//     }, 4000);
// });