const menuToggle = document.getElementById('menu-toggle');
const navigationMenu = document.getElementById('navigation-menu');
menuToggle.addEventListener('click', function(){

    navigationMenu.classList.toggle('show');
 
    // if(navigationMenu.style.display == 'none'){
    //     navigationMenu.style.display = 'block';
    // }else {
    //     navigationMenu.removeAttribute('style');
    // }
});
