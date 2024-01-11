document.addEventListener('DOMContentLoaded', function(){
    const burgerOpen = document.querySelector('.menu__burger');
    const burgerMenu = document.querySelector('.menu__burger-item');
    const menuSpanItem = document.querySelector('.menu__span-item');

    burgerOpen.addEventListener('click', () =>{
        burgerMenu.classList.toggle('active');
        
    });
    menuSpanItem.addEventListener('click', function() {
        this.classList.toggle('close');
    });
})