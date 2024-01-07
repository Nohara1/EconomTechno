import productData from '../../../catalog/src/main/product.json';

document.addEventListener('DOMContentLoaded', () => {
    const productName = document.querySelector('.h1');
    const productImage = document.querySelector('.product__image');
    const productDescription = document.querySelector('.preview-characteristics__wrapper');
    const urlParams = new URLSearchParams(window.location.search);
    const table = document.querySelector('.table__main');
    const productId = urlParams.get('id');
    const product = productData.find(product => product.id == productId);
    const array = Object.entries(product.characteristics);

    
    
    for (const [key, value] of array){
        const row = document.createElement('tr');
        const characteristic = document.createElement('td');
        const characteristicValue = document.createElement('td');

        characteristic.textContent = key;
        characteristicValue.textContent = value;
        
        row.style.height = '35px'
        characteristic.style.border = '0.5px solid grey';
        characteristicValue.style.border = '0.5px solid grey'
        row.classList.add('table__row');
        characteristic.classList.add('table__key');

        table.appendChild(row);
        row.appendChild(characteristic);
        row.appendChild(characteristicValue);
        
    }

    productName.textContent = product.name;
    productImage.src = product.image;
    productImage.alt = product.name;
    productDescription.textContent = product.description2;
})