let btn = document.querySelector(".icon-menu");
let sidebar = document.querySelector(".sidebar");
let icon = document.querySelector(".icon");
let themechange = document.querySelector(".theme-toggler");
let body = document.querySelector("body");
let content = document.querySelector(".content");
btn.onclick = function(){
    sidebar.classList.toggle("active");

    content.classList.toggle("active");

}

themechange.onclick = function(){
    body.classList.toggle("active");

}
