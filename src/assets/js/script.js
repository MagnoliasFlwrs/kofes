const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBurger = document.querySelector('.mobile-head svg');

function activateBurgerMenu() {
    burger.addEventListener('click' , ()=> {
        burger.classList.add('active');
        mobileMenu.classList.add('active');
        setTimeout(burger.classList.remove('active') , 1000);
    })
}
function closeBurgerMenu() {
    closeBurger.addEventListener('click' , ()=> {
        mobileMenu.classList.remove('active');
    })
}
activateBurgerMenu();
closeBurgerMenu() ;

const mobileDropdownLinks = document.querySelectorAll('.mobile-dropdown-item');

function activateMobileDropdown() {
    mobileDropdownLinks.forEach(el => {
        el.addEventListener('click' , (e)=> {
            el.classList.toggle('mob-dropdown-open');
            el.nextElementSibling.classList.toggle('open-mob-submenu');
        })
    })
}
activateMobileDropdown();

// header animation

const headerAnimLinks = document.querySelectorAll('.link-text');
headerAnimLinks.forEach(el => {
    el.dataset.text =  el.innerHTML;
})

const swiper = new Swiper('.staff-swiper', {
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 16,
    speed: 2000,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
   });
