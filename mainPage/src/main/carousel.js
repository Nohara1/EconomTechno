import Swiper from 'swiper';
import popularData from './popular.json';

document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.swiper-container', {
        slidesPreView: 3,
        spaceBetween: 30,
        loop: 3000,
    });

    const  slides = document.querySelectorAll('.slide');
    let i = 0;

    slides.forEach((slide) => {
        const description = document.createElement('p');
        const name = document.createElement('a');
        const price = document.createElement('span');

        price.classList.add('slide-price');
        name.classList.add('slide-name');
        description.classList.add('slide-description');

        name.href = '#';
        name.innerText = popularData[i].name;
        description.innerText = popularData[i].description;
        price.innerText = popularData[i].price

        slide.appendChild(name);
        slide.appendChild(description);
        slide.appendChild(price);

        i++;
    })
});

