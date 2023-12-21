import Swal from 'sweetalert2';
import stockData from './stock.json';


document.addEventListener('DOMContentLoaded', function(){
    const stonck = document.querySelectorAll('.catalog-stock__list');
    
    stonck.forEach((list, index) =>{
        list.addEventListener('click',() => {
            Swal.fire({
                width: 800,
                background: '#FFFFF0',
                color: '#CD5C5C',
                title: stockData[index].name,
                text: stockData[index].description,
                confirmButtonText: 'Закрыть',
                customClass: {
                    confirmButton: 'modal__button'
                }
              });
        })
    })
})