var x = window.matchMedia("(max-width: 768px)")
$(document).ready(function() {
    if (!x.matches) {
        Motus.addAnimation(dotAnimation);
        Motus.addAnimation(phoneAnimation);
        Motus.addAnimation(phoneTextAnimation);
        Motus.addAnimation(mailzyAnimation);
        Motus.addAnimation(mailzyTextAnimation);
        Motus.addAnimation(LearnMoreAboutMeAnimation);
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

const LearnMoreAboutMeAnimation = new Motus.Animation({
    $el: document.getElementById('LearnMoreAboutMyProjects'),
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

const phoneAnimation = new Motus.Animation({
    $el: document.getElementById('phoneSimulator'),
    //endPoint: [-10],
    startPoint: 50,
    endPoint: 350,
    keyframes: {
        50: {
            translateX: '50px',
            translateY: '50px'
        },
        100: {
            translateX: '150px',
            translateY: '100px'

        }
    }
});

const phoneTextAnimation = new Motus.Animation({
    $el: document.getElementById('phoneSimulatorText'),
    //endPoint: [-10],
    startPoint: 50,
    endPoint: 350,
    keyframes: {
        50: {
            translateX: '0px',
        },
        100: {
            translateX: '-50px',

        }
    }
});

function changeScreen(sourceName, elementId) {
    //alert("You clicked the coffee cup!");
    document.getElementById(elementId).src = "images/" + sourceName + ".png";
    switch (elementId) {
        case 'phoneSimulator':
            var n = str.search("Screen");
            //document.getElementById("pageName").innerHTML = pageName;
            break;

        case 'mailzySimulator':
            if (sourceName == 'mailzyLoginScreen') {
                document.getElementById("mailzySimulator").useMap = '#image-map';
            } else {
                document.getElementById("mailzySimulator").useMap = '#image-map1';
                Motus.addAnimation(mailzyAnimation1);
            }
            break;
    }
}

const mailzyTextAnimation1 = new Motus.Animation({
    $el: document.getElementById('mailzySimulator'),
    keyframes: {
        50: {
            translateX: '50px',
            translateY: '-50px'
        },
        100: {
            translateX: '150px',
            translateY: '-100px'
        }
    }
});

const mailzyAnimation = new Motus.Animation({
    $el: document.getElementById('mailzySimulator'),
    //endPoint: [-10],
    startPoint: 550,
    endPoint: 1000,
    keyframes: {
        50: {
            translateX: '-50px',
            translateY: '50px'
        },
        100: {
            translateX: '-150px',
            translateY: '100px'
        }
    }
});

const mailzyTextAnimation = new Motus.Animation({
    $el: document.getElementById('mailzySimulatorText'),
    //endPoint: [-10],
    startPoint: 550,
    endPoint: 1000,
    keyframes: {
        50: {
            translateX: '15px',
            translateY: '100px'
        },
        100: {
            translateX: '290px',
            translateY: '200px'
        }
    }
});