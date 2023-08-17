const burger = document.querySelector('.burger');

function activateBurger() {
    burger.addEventListener('click' , ()=> {
        burger.classList.toggle('active');
    })
}
activateBurger();