window.onscroll = function () { scrollFunction() };

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

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoadingScreen, 5000); // Simulate loading time
    repeatAnimation(); // Start the repeated animation
});

function hideLoadingScreen() {
    var loadingBage = document.getElementById("loading_page");
    var loadingScreen = document.getElementById("loading-screen");
    loadingBage.classList.add("hidden");
    loadingScreen.classList.add("hidden");
    var mainContent = document.getElementById("main-content");
    if(mainContent !== null){
        mainContent.style.display = "block";
        document.body.style.overflow = "auto";
    }
}

function repeatAnimation() {
    setInterval(function () {
        var loadingBage = document.getElementById("loading_page");
        loadingBage.classList.remove("animate__rubberBand");
        void loadingBage.offsetWidth; // Trigger reflow to restart animation
        loadingBage.classList.add("animate__rubberBand");
    }, 900); // Repeat every 3 seconds
}