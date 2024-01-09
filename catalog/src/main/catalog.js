import Handlebars from 'handlebars';
import productData from './product.json';

document.addEventListener('DOMContentLoaded', () => {
    const panelContent = document.querySelector('.b-panel__content');
    const h = document.querySelector('.h1');
    const sidebarItem = document.querySelectorAll('.filters-menu__item');
    const subMenuFirst = document.querySelectorAll('.menu__submenu-first a');
    const subMenuSecond = document.querySelectorAll('.menu__submenu-second a');
    
    function redirectToProduct(productId) {
        window.location.href = `productCard.html?id=${productId}`;
    }
  
    function filterProductsByCategory(selectedCategory) {
        return productData.filter(product => product.category === selectedCategory);
    }

    function filterProductsBySubCategory(selectedSubCategory) {
        return productData.filter(product => product.subCategory === selectedSubCategory);
    }

    function displayProducts(filteredProducts) {
        const source = document.getElementById('category-template').innerHTML;
        const template = Handlebars.compile(source);
        const html = template({ categories: filteredProducts });

        panelContent.innerHTML = html;

        const updatedProductCards = document.querySelectorAll('.products__card');
        updatedProductCards.forEach(element => {
            element.addEventListener('click', () => {
                const productId = element.dataset.id;
                redirectToProduct(productId);
            });
        });
    }

    function handleCategoryClick(event) {
        event.preventDefault();
        const selectedCategory = this.textContent.trim();

        h.textContent = this.textContent.trim();

        const filteredProducts = filterProductsByCategory(selectedCategory);
        displayProducts(filteredProducts);
    }

    function handleSubCategoryClick(event) {
        event.preventDefault();
        const selectedSubCategory = this.textContent.trim();
        const filteredProducts = filterProductsBySubCategory(selectedSubCategory);
        displayProducts(filteredProducts); 
    }

    sidebarItem.forEach(link =>{
        link.addEventListener('click', handleSubCategoryClick)
    })

    subMenuFirst.forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });

    subMenuSecond.forEach(link => {
        link.addEventListener('click', handleSubCategoryClick);
    });
    displayProducts(productData);
});
