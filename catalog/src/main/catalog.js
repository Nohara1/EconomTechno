import Handlebars from 'handlebars';
import productData from './product.json';

document.addEventListener('DOMContentLoaded', () => {
    const panelContent = document.querySelector('.b-panel__content');
    const h = document.querySelector('.h1');

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
    }

    function handleCategoryClick(event) {
        event.preventDefault();
        const selectedCategory = this.textContent.trim();
        const subCategory = '';

        
        const url = new URL(window.location.href);
        url.searchParams.set('category', selectedCategory);
        url.searchParams.set('subCategory', subCategory);
        // Обновление URL без перезагрузки страницы
        window.history.pushState({}, '', url);

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

    document.querySelectorAll('.menu__submenu-first a').forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });

    document.querySelectorAll('.menu__submenu-second a').forEach(link => {
        link.addEventListener('click', handleSubCategoryClick);
    });

    displayProducts(productData);

});