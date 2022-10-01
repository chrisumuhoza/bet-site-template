let btn = document.querySelector(".icon-menu");
let sidebar = document.querySelector(".sidebar");
let header = document.querySelector(".header");
let icon = document.querySelector(".icon");
let themechange = document.querySelector(".theme-toggler");
let body = document.querySelector("body");
let content = document.querySelector(".content");

        //====Toggle Sidebar====//
btn.onclick = function(){
    sidebar.classList.toggle("active");

    content.classList.toggle("active");

    header.classList.toggle("active");

}
        //====Changing-theme-====//
themechange.onclick = function(){
    body.classList.toggle("active");

}


