window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navBar = document.getElementById("header");
    var togglerIcon = document.getElementById("toggler-icon");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navBar.style.backgroundColor = "#002f4b";
        togglerIcon.style.color = "white"; 
        navBar.style.top = "0";
    } else {
        navBar.style.backgroundColor = "#00000014";
        togglerIcon.style.color = "#002f4b";
        navBar.style.top = "auto";
    }
}