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
const teamSwiper = new Swiper('.team-swiper', {
    slidesPerView: 1.3,
    spaceBetween: 16,
    freeMode: true,
    breakpoints: {
        768: {
          slidesPerView: 2.2,
          spaceBetween: 20
        }
    },
    navigation: {
        nextEl: '.team-button-next',
        prevEl: '.team-button-prev',
      },
   });


//    accordeon

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
  e.preventDefault();
  let currentBox = e.target.closest(".box");
  let currentContent = e.target.nextElementSibling;
  currentBox.classList.toggle("active");
  if (currentBox.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}

// form mask
function addMaskFromInputCallBackForm(path, maskValue) {
  function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
      else if (elem.createTextRange) {
          let range = elem.createTextRange();
          range.collapse(true);
          range.moveEnd("character", pos);
          range.moveStart("character", pos);
          range.select();
      }
  }

  function mask(event) {
      let matrix = maskValue,
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) val = def;

      this.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
      });

      if (event.type === "blur") {
          if (this.value.length === 2) this.value = "";
      } else setCursorPosition(this.value.length, this);
  }

  let input = document.querySelector(path);

  if (input) {

      input.addEventListener("input", mask, false);

      input.addEventListener("focus", mask, false);

      input.addEventListener("blur", mask, false);
  }



}
console.log(window.location.host)

addMaskFromInputCallBackForm('.input-wrap input[name="form-tel"]', '+7(___) ___-__-__');
addMaskFromInputCallBackForm('.input-wrap input[name="modal-cons-tel"]', '+7(___) ___-__-__');
addMaskFromInputCallBackForm('.input-wrap input[name="modal-appl-tel"]', '+7(___) ___-__-__');



// modals

const toApplicationBtn = document.querySelectorAll('.to-application');
const toOrderBtn = document.querySelectorAll('.to-order');
const applicationModal = document.querySelector('.modal-application');
const orderModal = document.querySelector('.modal-order');
const okMessage = document.querySelector('.send-ok-content');
const overlay =  document.querySelector('.overlay');
const closeBtns = document.querySelectorAll('.close-inner')

function showModals() {
    toApplicationBtn.forEach(el => {
        el.addEventListener('click' , () => {
            applicationModal.classList.add('open-modal');
            overlay.classList.add('open');
        })
    })
    toOrderBtn.forEach(el => {
        el.addEventListener('click' , () => {
            orderModal.classList.add('open-modal');
            overlay.classList.add('open');
        })
    })
}
function closeModals() {
    closeBtns.forEach(el => {
        el.addEventListener('click' , (e)=> {
            if(e.target.closest('.modal-application')) {
                e.target.closest('.modal-application').classList.remove('open-modal');
                overlay.classList.remove('open')
            }
            if(e.target.closest('.modal-order')) {
                e.target.closest('.modal-order').classList.remove('open-modal');
                overlay.classList.remove('open')
            }
        })
    })
    overlay.addEventListener('click' , ()=> {
        if(applicationModal) {
            applicationModal.classList.remove('open-modal');
            overlay.classList.remove('open')
        }
        if(orderModal) {
            orderModal.classList.remove('open-modal');
            overlay.classList.remove('open')
        }
    })
}
showModals();
closeModals();

// form animation

const inputs = document.querySelectorAll('input');

inputs.forEach(el=> {
    el.addEventListener('change' , () => {
        if (el.value) {
            el.classList.add('input-vs-value');
        } else {
            el.classList.remove('input-vs-value');
        }
    })
    
})

// show more
const showMoreBtn = document.querySelector('.show-more-btn');
const showMoreBody = document.querySelector('.show-more-body');

showMoreBtn.addEventListener('click' , ()=> {
    showMoreBody.classList.add('active');
    showMoreBtn.style.display="none";
})