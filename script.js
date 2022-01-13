//preloader
paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
};

// ------opening animation-----

const opening = gsap.timeline();

Pace.on('done', () => {
    document.querySelector('#preloader-text').style.animation = "none";

    ScrollTrigger.matchMedia({

        "(max-width: 630px) and (orientation: portrait)": () => {
            opening.to('#preloader-text', { yPercent: -90, ease: Power4.easeOut, duration: 1 })
                .to('#preloader-text', { opacity: 0, ease: Power4.easeOut, duration: .4 }, '<')
                .to('#preloader', { yPercent: 110, ease: Power4.easeOut, duration: 1.7 }, '-=.5')
                .from('#img-container', { scaleY: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.35')
                .from('#banner-text-wrapper h1', { xPercent: -25, opacity: 0, ease: Expo.easeOut, duration: 1.5,clearProps:"all" }, '-=1')
                .from('.img-content img', { xPercent: -80, opacity: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.25')
                .from('.locomotive-box h1', { yPercent: 50, opacity: 0, ease: Expo.easeOut, duration: 1.5, clearProps:"all" }, '-=1.85')
                .from('#text-separator', { scaleX: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.85')
                .from('#materials-box', { yPercent: 20, opacity: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.7')
                .from('.buy', { yPercent: 60, opacity: 0, ease: Expo.easeOut, duration: .7 ,clearProps:"all"}, '-=1.35')
                .from('#side-text-wrapper a', { xPercent: -50, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.25')
                .from('#imgs-boxs', { yPercent: 100, opacity: 0, ease: Expo.easeOut, duration: 1.5 , clearProps:"all"}, '-=1.9');
        },
        "(min-width: 631px)": () => {
            opening.to('#preloader-text', { yPercent: -80, ease: Power4.easeOut, duration: 1 })
                .to('#preloader-text', { opacity: 0, ease: Power4.easeOut, duration: .4 }, '<')
                .to('#preloader', { xPercent: 110, ease: Power4.easeOut, duration: 1.7 }, '-=.6')
                .from('#img-container', { scaleX: 0, ease: Power4.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.35')
                .from('#banner-text-wrapper h1', { xPercent: -25, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1')
                .from('.img-content img', { xPercent: -25, opacity: 0, ease: Expo.easeOut, duration: 1.5,clearProps:"all" }, '-=1.4')
                .from('.locomotive-box h1', { yPercent: 50, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.4')
                .from('#text-separator', { scaleX: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.4')
                .from('#materials-box', { yPercent: 20, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.4')
                .from('.buy', { yPercent: 60, opacity: 0, ease: Expo.easeOut, duration: .7 ,clearProps:"all"}, '-=1.3')
                .from('#side-text-wrapper a', { xPercent: 50, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.25')
                .from('#imgs-boxs', { yPercent: 100, opacity: 0, ease: Expo.easeOut, duration: 1.5 ,clearProps:"all"}, '-=1.6');
        }
    });

    setTimeout(() => {
        document.querySelector('#img-container').style.transition = '.5s ease';
    }, 2500);

});

let lastClick = 0;
const s1 = document.querySelector('.img-content:first-child img');
const s2 = document.querySelector('.img-content:last-child img');
const m1 = ['e','v','i','l',' ','o','t',' ','d','i','a','r','f','a'];
const m2 = ['e','v','i','l',' ','o','t',' ','d','e','r','i','t'];
const sArr = [s1, s2];
const mArr = [m1, m2];
const hm = document.querySelector('#hm');
const hmp = document.querySelector('#hmp');

const show = arr => {
    let str = arr.reverse().join('');
    hm.style.display = 'block';
    hmp.innerHTML = str;
    setTimeout(() => {
        hm.style.display = 'none';
        hmp.innerHTML = '';
    },10);
}

const showMobile = (e, arr) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    const time_between_taps = 200;
    if (time - lastClick < time_between_taps) {
            show([...arr]);
    }
    lastClick = time;
}

for (let i in sArr){
    sArr[i].addEventListener('dblclick', () => show([...mArr[i]]));
    sArr[i].addEventListener('touchstart', () => showMobile(e, [...mArr[i]]));
}

// -----swiper js-----
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// -----change shirt function----

const swiperSlide = document.querySelectorAll('.swiper-slide');

const imgContainer = document.querySelector('#img-container');

const materials = document.querySelectorAll('.materials');

const imgContainerWrapper = document.querySelector('#img-container-wrapper');
const imgContent = document.querySelectorAll('.img-content');
const headingLocomotive = document.querySelector('#heading-locomotive');
const locomotiveBox = document.querySelectorAll('.locomotive-box');

swiperSlide.forEach((sS, i) => {
    sS.addEventListener("click", () => {
        let swiperSlideClicked = document.querySelector('.clicked');
        if (swiperSlideClicked !== null) {
            swiperSlideClicked.classList.remove("clicked");
        }
        sS.classList.toggle('clicked');
        imgContainerWrapper.style.transform = `translateX(${imgContent[i].dataset.translateImg})`;
        headingLocomotive.style.transform = `translateY(${locomotiveBox[i].dataset.translateTitle})`;
        imgContainer.style.backgroundColor = `${imgContent[i].dataset.bgColor}`;
        let showed = document.querySelector('.show');
        if (showed !== null) {
            showed.classList.remove("show");
        }
        materials[i].classList.add('show');
    })
})