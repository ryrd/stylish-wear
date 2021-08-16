//preloader
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
};

// ------opening animation-----

let opening = gsap.timeline();

Pace.on('done', function () {
    document.querySelector('#preloader-text').style.animation = "none";


    ScrollTrigger.matchMedia({

        "(max-width: 630px) and (orientation: portrait)": function () {
            opening.to('#preloader-text', { yPercent: -90, ease: Power4.easeOut, duration: 1 })
                .to('#preloader-text', { opacity: 0, ease: Power4.easeOut, duration: .4 }, '<')
                .to('#preloader', { yPercent: 110, ease: Power4.easeOut, duration: 1.7 }, '-=.5')
                .from('#img-container', { scaleY: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.35')
                .from('#banner-text-wrapper h1', { xPercent: -25, opacity: 0, ease: Expo.easeOut, duration: 1.5,clearProps:"all" }, '-=1')
                .from('.img-content img', { xPercent: -80, opacity: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.25')
                .from('.locomotive-box h1', { yPercent: 50, opacity: 0, ease: Expo.easeOut, duration: 1.5, clearProps:"all" }, '-=1.85')
                .from('#text-separator', { scaleX: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.85')
                .from('#materials-box', { yPercent: 20, opacity: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.7')
                .from('#side-text-wrapper a', { xPercent: -50, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.25')
                .from('#imgs-boxs', { yPercent: 100, opacity: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.9');
        },
        "(min-width: 631px)": function () {
            opening.to('#preloader-text', { yPercent: -80, ease: Power4.easeOut, duration: 1 })
                .to('#preloader-text', { opacity: 0, ease: Power4.easeOut, duration: .4 }, '<')
                .to('#preloader', { xPercent: 110, ease: Power4.easeOut, duration: 1.7 }, '-=.6')
                .from('#img-container', { scaleX: 0, ease: Power4.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.35')
                .from('#banner-text-wrapper h1', { xPercent: -25, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1')
                .from('.img-content img', { xPercent: -25, opacity: 0, ease: Expo.easeOut, duration: 1.5,clearProps:"all" }, '-=1.4')
                .from('.locomotive-box h1', { yPercent: 50, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.4')
                .from('#text-separator', { scaleX: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.4')
                .from('#materials-box', { yPercent: 20, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.4')
                .from('#side-text-wrapper a', { xPercent: 50, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.25')
                .from('#imgs-boxs', { yPercent: 100, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.6');
        }
    });

    setTimeout(
        function () {
            document.querySelector('#img-container').style.transition = '.5s ease';
        }
        , 2500);

});

let lastClick = 0;
let s1 = document.querySelector('.img-content:first-child img');
let s2 = document.querySelector('.img-content:last-child img');
let m1 = ['e','v','i','l',' ','o','t',' ','d','i','a','r','f','a'];
let m2 = ['e','v','i','l',' ','o','t',' ','d','e','r','i','t'];

function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

function show(m){
    let rts = reverseArr(m);
    let str = rts.join('');
    document.getElementById('hm').style.display = 'block';
    document.getElementById("hmp").innerHTML = str;
    setTimeout(
            function(){
                    document.getElementById('hm').style.display = 'none';
                    document.getElementById("hmp").innerHTML = '';
                    rts = reverseArr(m);
            }
    ,10);
}

s1.addEventListener('dblclick', () => show(m1));
s1.addEventListener('touchstart', function (e) {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    const time_between_taps = 200;
    if (time - lastClick < time_between_taps) {
        show(m1);
    }
    lastClick = time;
});

s2.addEventListener('dblclick', () => show(m2));
s2.addEventListener('touchstart', function (e) {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    const time_between_taps = 200;
    if (time - lastClick < time_between_taps) {
        show(m2);
    }
    lastClick = time;
});

// -----swiper js-----
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// -----change shirt function----

let swiperSlide = document.querySelectorAll('.swiper-slide');

let imgContainerWrapper = document.querySelector('#img-container-wrapper');
let imgContent = document.querySelectorAll('.img-content');
let headingLocomotive = document.querySelector('#heading-locomotive');
let locomotiveBox = document.querySelectorAll('.locomotive-box');

let imgContainer = document.querySelector('#img-container');

let materials = document.querySelectorAll('.materials');

for (let i = 0; i < swiperSlide.length; i++) {

    swiperSlide[i].addEventListener("click", function () {
        let swiperSlideClicked = document.querySelector('.clicked');
        if (swiperSlideClicked !== null) {
            swiperSlideClicked.classList.remove("clicked");
        }
        swiperSlide[i].classList.toggle('clicked');
        imgContainerWrapper.style.transform = `translateX(${imgContent[i].dataset.translateImg})`;
        headingLocomotive.style.transform = `translateY(${locomotiveBox[i].dataset.translateTitle})`;
        imgContainer.style.backgroundColor = `${imgContent[i].dataset.bgColor}`;
        let showed = document.querySelector('.show');
        if (showed !== null) {
            showed.classList.remove("show");
        }
        materials[i].classList.add('show');
    })

}