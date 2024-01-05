import productData from '../../../catalog/src/main/product.json';

document.addEventListener('DOMContentLoaded', () => {
    const productName = document.querySelector('.h1');
    const productImage = document.querySelector('.product__image');
    const productDescription = document.querySelector('.preview-characteristics__wrapper');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    

    const product = productData.find(product => product.id == productId);

    productName.textContent = product.name;
    productImage.src = product.image;
    productImage.alt = product.name;
    productDescription.textContent = product.description2;
})