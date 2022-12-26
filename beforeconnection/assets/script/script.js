let btn = document.querySelector(".icon-menu");
let form = document.querySelector(".form");
let themechange = document.querySelector(".theme-toggler");
let body = document.querySelector("body");
let content = document.querySelector(".content");

     //====Changing-theme-====//
themechange.onclick = function(){
    body.classList.toggle("active");
    form.classList.toggle("active");


}


