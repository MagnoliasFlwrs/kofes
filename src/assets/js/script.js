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
          spaceBetween: 30
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

const contactsSwiper = new Swiper('.contacts-img-swiper', {
slidesPerView: 2.3,
spaceBetween: 16,
freeMode: true,
breakpoints: {
    768: {
        slidesPerView: 2.5,
        spaceBetween: 20
    }
},
navigation: {
    nextEl: '.contacts-button-next',
    prevEl: '.contacts-button-prev',
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
const toServModalBtn = document.querySelectorAll('.to-serv-modal');
const applicationModal = document.querySelector('.modal-application');
const orderModal = document.querySelector('.modal-order');
const serviceModal = document.querySelector('.modal-services');
const okMessage = document.querySelector('.send-ok-content');
const overlay =  document.querySelector('.overlay');
const closeBtns = document.querySelectorAll('.close-inner');

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
    toServModalBtn.forEach(el => {
        el.addEventListener('click' , () => {
            serviceModal.classList.add('open-modal');
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
            if(e.target.closest('.modal-services')) {
                e.target.closest('.modal-services').classList.remove('open-modal');
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
        if(serviceModal) {
            serviceModal.classList.remove('open-modal');
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
const showMoreBtns = document.querySelectorAll('.show-more-btn');
const showMoreBody = document.querySelector('.show-more-body');
const aboutShowMoreBtn = document.querySelector('.about-show-more-btn');
const aboutShowMoreBody = document.querySelector('.about-show-more-body');

aboutShowMoreBtn?.addEventListener('click' , ()=> {
    aboutShowMoreBody.classList.toggle('active');
    aboutShowMoreBtn.classList.toggle('active');
    if (! aboutShowMoreBtn.classList.contains('active')) {
        aboutShowMoreBtn.innerHTML = 'Развернуть'
    }
    if (aboutShowMoreBtn.classList.contains('active')) {
        aboutShowMoreBtn.innerHTML = 'Свернуть'
    }
})
showMoreBtns?.forEach(el => {
    el.addEventListener('click' , (e) => {
        e.target.closest('.content').querySelector('.show-more-body').classList.toggle('active');
        el.classList.toggle('active');
        el.style.display="none";
    })
})



//custom-select

const customSelect =  document.querySelector('.customselect');
const customOptions = document.querySelectorAll('.customselect ul li');
const customSelectBody = document.querySelector('.custom-select-body');

customSelect?.addEventListener('click' , ()=> {
    customSelectBody.classList.toggle('open');
})
customOptions.forEach(el => {
    el.addEventListener('click' , ()=> {
        customSelect.querySelector('p').innerHTML = el.innerHTML;
        customSelect.dataset.current = el.dataset.value;
        // customSelectBody.classList.add('close');
    })
})


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }

  window.onload = () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('element-show');
                setTimeout(() => {
                    const contentArr = document.querySelectorAll('.anim-content');
                    if (contentArr) {
                        setTimeout(()=> {
                            contentArr.forEach(el => {
                                el.classList.add('show-content');
                            })
                        }, 2000)
                    }
                } , 1000)

                observer.unobserve(entry.target);
            }
        })
    }, options)
    let elements = document.querySelectorAll('.element-animation');
    console.log(elements)
    elements.forEach(i => {
        observer.observe(i)
    })
}
const animateBlocks =  document.querySelectorAll('.element-animation');

animateBlocks.forEach(el=> {
    let currentTitle =  el.querySelectorAll('.title-anim');
    let currentAnimContent = el.querySelectorAll('.anim-content');

    const timeline=gsap.timeline({
        scrollTrigger:{
          trigger: el,
          start: "top 80%",
        }
      })
      timeline.from(currentTitle,{
        y:150,
        opacity:0,
        delay:.3,
        duration:.6,
      }).from(currentAnimContent,{
        duration:.6,
        opacity:0,
    })
})


// smooth-scroll


let isSafari = (function() {
let ua = navigator.userAgent;
if (/safari/gi.test(ua) && !/chrome/gi.test(ua)) return true; else return false; })();
if (!isSafari) {
    SmoothScroll ({
        animationTime: 1000,
        stepSize: 150,
        accelerationDelta: 30,
        accelerationMax: 2,
        keyboardSupport: true,
        arrowScroll: 50,
        pulseAlgorithm: true,
        pulseScale: 5,
        pulseNormalize: 1,
        fixedBackground : true,
        touchpadSupport: true
    })
}
        
gsap.set('.btn-fill' ,  {
    y: "76%",
})
let btns = document.querySelectorAll('.btn');
console.log(btns)
btns.forEach((btn) => {
    btn.addEventListener('mouseenter' , ()=> {
        btn.classList.add('hover');
        if (btn.querySelectorAll('.btn-fill').length) {
            gsap.to(btn.querySelectorAll('.btn-fill') , .45, {
                startAt: {y: "76%"},
                    y: "0%",
                    ease: Power2.easeInOut,
            })
            btn.parentNode.classList.remove('not-active');
        }
    })
    btn.addEventListener('mouseleave' , ()=> {
        btn.classList.remove('hover');
        if (btn.querySelectorAll('.btn-fill')) {
            gsap.to(btn.querySelector('.btn-fill') , .45, {
                startAt: {y: "76%"},
                    y: "-76%",
                    ease: Power2.easeInOut,
            })
        }
        btn.parentNode.classList.remove('not-active');
    })
})




let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
