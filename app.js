// bugerMenu
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

// imageSlider
document.querySelectorAll('.about .controls .controls-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .image-container .image').src = src;
    }
});