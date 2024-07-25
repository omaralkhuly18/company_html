window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navBar = document.getElementById("header");
    var togglerIcon = document.getElementById("toggler-icon");
    var screenWidth = window.innerWidth;

    if (screenWidth >= 230 && screenWidth <= 994) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navBar.style.backgroundColor = "#002f4b";
            navBar.style.top = "0";
            togglerIcon.style.color = "white";
        } else {
            navBar.style.backgroundColor = "#00000014";
            navBar.style.top = "auto";
            togglerIcon.style.color = "#002f4b";
        }
    } else {
        // Reset navbar styles when outside the specified screen width range
        navBar.style.backgroundColor = "#00000014";
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

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("videoModal");
    var playButton = document.getElementById("play_button");
    var closeButton = document.getElementById("close-button");
    var navBarNone = document.getElementById("header");
    var scrollButtons = document.getElementById("scroll");
    const outlineSection = document.getElementById("outline_section");

    if (playButton !== null) {
        playButton.onclick = function () {
            modal.style.display = "block";
            outlineSection.style.overflow = "hidden";
            navBarNone.style.display = "none";
            scrollButtons.style.zIndex = "0";
        }
    }

    if (closeButton !== null) {
        closeButton.onclick = function () {
            modal.style.display = "none";
            outlineSection.style.overflow = "auto";
            navBarNone.style.display = "block";
            scrollButtons.style.zIndex = "3000";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('scroll');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

document.addEventListener('DOMContentLoaded', function () {
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // يمكنك إضافة أي منطق إضافي هنا
        });
    });
});
