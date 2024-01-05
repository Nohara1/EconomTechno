document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.products__card');
    productCards.forEach((element) =>{
        element.addEventListener('click', () =>{
            const productId = element.dataset.id;
            console.log(productId);
            window.location.href = `productCard.html?id=${productId}`;
        })
    })
});
