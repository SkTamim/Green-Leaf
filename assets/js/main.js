console.log('Hello!');

// Menu toggle button functioning
let toggle_button = document.querySelector('.menu_toggle_button');
let menu_container = document.querySelector('.mobile_menu_container');
let menu_icon = document.getElementById('menu_icon');


toggle_button.addEventListener('click', () =>{
    if(menu_container.style.display =='flex'){
        menu_container.style.display ='none';
        menu_icon.classList.replace('fa-times', 'fa-bars')
    }else{
        menu_container.style.display ='flex';
        menu_icon.classList.replace('fa-bars','fa-times')
    }
});

// Back to top button functioning
let backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200){
     backToTop.style.display = "flex";
    }else{
     backToTop.style.display = "none";
    }
  });