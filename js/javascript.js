window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navBar = document.getElementById("header");
    var togglerIcon = document.getElementById("toggler-icon");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navBar.style.backgroundColor = "#002f4b";
        togglerIcon.style.color = "white";
        navBar.style.top = "0";
    } else {
        navBar.style.backgroundColor = "rgb(0 0 0 / 23%)";
        togglerIcon.style.color = "#002f4b";
        navBar.style.top = "auto";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoadingScreen, 3000); // Simulate loading time
    repeatAnimation(); // Start the repeated animation
});

function hideLoadingScreen() {
    var loadingBage = document.getElementById("loading_page");
    var loadingScreen = document.getElementById("loading-screen");
    
    if (loadingBage !== null) {
        loadingBage.classList.toggle("hidden");
    }
    if (loadingScreen !== null) {
        loadingScreen.classList.toggle("hidden");
    }
    
    var mainContent = document.getElementById("main-content");
    if (mainContent !== null) {
        mainContent.style.display = "block";
        document.body.style.overflow = "auto";
    }
}

function repeatAnimation() {
    setInterval(function () {
        var loadingBage = document.getElementById("loading_page");
        
        if (loadingBage !== null) {
            loadingBage.classList.remove("animate__rubberBand");
            void loadingBage.offsetWidth; // Trigger reflow to restart animation
            loadingBage.classList.toggle("animate__rubberBand");
        }
    }, 900); // Repeat every 3 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("videoModal");
    var playButton = document.getElementById("play_button");
    var closeButton = document.getElementById("close-button");

    playButton.onclick = function() {
        modal.style.display = "block";
    }

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function () {
        this.nextElementSibling.classList.add('active');
    });

    input.addEventListener('blur', function () {
        if (this.value === '') {
            this.nextElementSibling.classList.remove('active');
        }
    });
});