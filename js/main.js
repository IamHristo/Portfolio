var x = window.matchMedia("(max-width: 768px)")
$(document).ready(function() {
    if (!x.matches) {
        Motus.addAnimation(newAnimation);
        Motus.addAnimation(newAnimation1);
        Motus.addAnimation(certificatesHeaderAnimation);
        //Motus.addAnimation(CertificateAnimation1);
        //Motus.addAnimation(CertificateAnimation2);
        //Motus.addAnimation(CertificateAnimation3);
        Motus.addAnimation(dotAnimation);
        //Motus.addAnimation(projectsHeaderAnimation);
        //Motus.addAnimation(phoneAnimation);
        //Motus.addAnimation(phoneTextAnimation);
        //Motus.addAnimation(phoneClickAnimation);
        //Motus.addAnimation(mailzyAnimation);
        //Motus.addAnimation(mailzyTextAnimation);
        //Motus.addAnimation(LearnMoreAboutMeAnimation);
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