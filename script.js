const navbar = document.querySelector('.navbar');
const span  = document.getElementsByTagName('span');
const gallery = document.querySelector('.gallery');


window.addEventListener('scroll', function() {
    const scroll = this.scrollY;
    // console.log(gallery.offsetTop);
    if (scroll > gallery.offsetTop - 100) {
        // console.log('oke');
        navbar.classList.add('translate');
        span[0].style.color = '#FFBD12';
    }else {
        span[0].style.color = 'white';
        navbar.classList.remove('translate');
    }
})