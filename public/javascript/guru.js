let modal = document.querySelector('.modal-guru');
let buttons = document.querySelectorAll('table td button');

buttons.forEach(item=>{
    item.onclick = () => {
        modal.classList.toggle('active')
    }
})

modal.addEventListener('click' , function(e) {
    if (e.target == modal) {
        modal.classList.remove('active')
    }
})