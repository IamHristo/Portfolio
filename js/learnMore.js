var x = window.matchMedia("(max-width: 768px)")
$(document).ready(function() {
    if (!x.matches) {
        Motus.addAnimation(LearnMoreAboutMeAnimation);
        console.log("test");
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
    $el: document.getElementById('LearnMoreAboutMe'),
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