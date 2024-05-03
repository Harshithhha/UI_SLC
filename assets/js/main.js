/*=============== SHOW MENU ===============*/
const navigateMenu = document.getElementById('navigate-menu'),
      navigateToggle = document.getElementById('navigate-toggle'),
      navigateClose = document.getElementById('navigate-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navigateToggle){
    navigateToggle.addEventListener('click', () =>{
        navigateMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navigateClose){
    navigateClose.addEventListener('click', () =>{
        navigateMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navigateLink = document.querySelectorAll('.navigate__link')

function linkAction(){
    const navigateMenu = document.getElementById('navigate-menu')
    // When we click on each navigate__link, we remove the show-menu class
    navigateMenu.classList.remove('show-menu')
}
navigateLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navigate__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navigate__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_section__header, .section__title`,{delay: 600})
sr.reveal(`.home_section__footer`,{delay: 700})
sr.reveal(`.home_section__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .items__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.tutor__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.tutor__img, .discount__img`,{origin: 'right'})
sr.reveal(`.runn__img`,{origin: 'top'})
sr.reveal(`.runn__data`)