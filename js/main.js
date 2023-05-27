console.log("Welcome!");
console.log('Side Made By shinobiplug');

var loader = document.getElementById('preloader');

window.addEventListener('load', function() {
    loader.style.display = 'none'
})

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openIG() {
    window.open('https://instagram.com/shinobiplug_', '_blank')
}

function openTikTok() {
    window.open('https://tiktok.com/@shinobiplug_', '_blank')
}

function openYouTube() {
    window.open('https://www.youtube.com/@qb3014', '_blank')
}

function homepage() {
    const button = document.getElementById('button');
    button.setAttribute("data-sellix-product", "63b46e22dedc2");
}

function onlineshop() {
    const button = document.getElementById('button');
    button.setAttribute("data-sellix-product", "63b46eb81f729");
}