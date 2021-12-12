var x = window.matchMedia("(max-width: 768px)")
$(document).ready(function() {
    if (!x.matches) {
        Motus.addAnimation(newAnimation);
        Motus.addAnimation(newAnimation1);
        Motus.addAnimation(certificatesHeaderAnimation);
        Motus.addAnimation(dotAnimation);
    }
});

$(window).scroll(function() {
    //console.log($(window).scrollTop());
    var scrollValue = $(window).scrollTop();
    var winWdith = $(window).width();
    var height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progressBar = (scrollValue / height1) * 100;
    $("#dot").css('width', progressBar + '%');
    console.log(parseInt(progressBar));
});


const newAnimation = new Motus.Animation({
    $el: document.getElementById('position'),
    //endPoint: [-10],
    startPoint: 0,
    endPoint: 350,
    keyframes: {
        50: {
            translateX: '-100px'
        },
        100: {
            translateX: '-200px',
            translateY: '400px'

        }
    }

});

const newAnimation1 = new Motus.Animation({
    $el: document.getElementById('name'),
    //endPoint: [-10],
    startPoint: 10,
    endPoint: 500,
    keyframes: {
        50: {
            translateX: '50px'
        },
        100: {
            translateX: '150px'

        }
    }

});


const certificatesHeaderAnimation = new Motus.Animation({
    $el: document.getElementById('certificatesHeader'),
    startPoint: 250,
    endPoint: 1000,
    keyframes: {
        50: {
            translateX: '50px'
        },
        100: {
            translateX: '150px'

        }
    }

});

const dotAnimation = new Motus.Animation({
    $el: document.getElementById('dot'),
    startPoint: 0,
    endPoint: 2500,
    keyframes: [
        {},
        { backgroundColor: 'red' },
        { backgroundColor: '#0F0' },
    ]
});

function flipDiv() {
    document.getElementById("position").style.transition = "2s";
    document.getElementById("position").style.transform = "rotateY(180deg)";
}

function showLogin() {
    var button = document.getElementById('SingInProfileButton');
    if (button.innerText == "Sing in") {
        var modal = document.getElementById('id01');
        modal.style.display = 'block';
        modal.style.opacity = '100';
        modal.style.zIndex = '10000';
        console.log("Show login");
    } else {
        var modal = document.getElementById('id02');
        modal.style.display = 'block';
        modal.style.opacity = '100';
        modal.style.zIndex = '10000';
        console.log("Show profile");
    }
}

function HideLogin() {
    var modal1 = document.getElementById('id01');
    var modal2 = document.getElementById('id02');
    var button = document.getElementById('SingInProfileButton');
    console.log("Hide login");
    console.log(modal1.style.display);
    console.log(modal2.style.display);
    modal1.setAttribute('style', 'display: none !important;');
    modal2.setAttribute('style', 'display: none !important;');
    console.log(modal1.style.display);
    console.log(modal2.style.display);
    button.innerText = 'Profile';
    //modal.setProperty(propertyName, value, priority);
}

function showLoginHide() {
    var modal = document.getElementById('id01');
    HideLogin();
    var modal = document.getElementById("id01");
    $('.alert').show();
    setTimeout(function() { $(".alert").fadeTo(1000, 0.4).slideUp(800); }, 3000);
    $(modal).fadeTo(1000, 0);
}

function showProfileHide() {
    var modal = document.getElementById('id02');
    HideLogin();
    console.log(document.getElementsByClassName("alert")[0].innerText);
    document.getElementsByClassName("alert")[0].innerText = "Data changed successfully!";
    document.getElementsByClassName("alert")[0].style.opacity = "100";
    $('.alert').show();
    setTimeout(function() { $(".alert").fadeTo(1000, 0.4).slideUp(800); }, 3000);
    $(modal).fadeTo(1000, 0);
}

function showAlert() {

    var form = document.getElementById("login-form");

    function myFunction() {
        if (form.checkValidity()) {
            var modal = document.getElementById("id01");
            $('.alert').show();
            setTimeout(function() { $(".alert").fadeTo(1000, 0.4).slideUp(800); }, 3000);
            $(modal).fadeTo(1000, 0);
        }
    }
}