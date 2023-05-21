"use strict";

const NAVBAR = document.getElementById('navbar')

const showNavbar = () => {
    NAVBAR.classList.add('animate_navbar_show');
    NAVBAR.classList.remove('animate_navbar_hidden');
}

const hideNavbar = () => {
    NAVBAR.classList.remove('animate_navbar_show');
    NAVBAR.classList.add('animate_navbar_hidden');
    setTimeout(()=>{
        NAVBAR.classList.remove('animate_navbar_hidden');
    },700);
}

window.document.addEventListener('scroll', ()=>{
    if(window.scrollY < 131){
        if(NAVBAR.classList.contains('w-screen')){
            NAVBAR.classList.add('md:relative')
            NAVBAR.classList.add('2xl:max-w-6xl')
            NAVBAR.classList.add('md:top-5')
            NAVBAR.classList.remove('md:fixed')
            NAVBAR.classList.remove('w-screen')
            NAVBAR.classList.remove('md:top-0')
            NAVBAR.classList.remove('md:max-w-full')
        }
    }
    else{
        if(! NAVBAR.classList.contains('w-screen')){
            NAVBAR.classList.remove('md:relative')
            NAVBAR.classList.remove('2xl:max-w-6xl')
            NAVBAR.classList.remove('md:top-5')
            NAVBAR.classList.add('md:fixed')
            NAVBAR.classList.add('w-screen')
            NAVBAR.classList.add('md:top-0')
            NAVBAR.classList.add('md:max-w-full')
        }
    }

});