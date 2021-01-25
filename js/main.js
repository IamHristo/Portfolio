var x = window.matchMedia("(max-width: 768px)")
$(document).ready(function(){
  if(!x.matches){
    Motus.addAnimation(newAnimation);
    Motus.addAnimation(newAnimation1);
    Motus.addAnimation(certificatesHeaderAnimation);
    //Motus.addAnimation(CertificateAnimation1);
    //Motus.addAnimation(CertificateAnimation2);
    //Motus.addAnimation(CertificateAnimation3);
    Motus.addAnimation(dotAnimation);
    Motus.addAnimation(projectsHeaderAnimation);
    Motus.addAnimation(phoneAnimation);
    Motus.addAnimation(phoneTextAnimation);
    //Motus.addAnimation(phoneClickAnimation);
    Motus.addAnimation(mailzyAnimation);
    Motus.addAnimation(mailzyTextAnimation);
  }
});

$(window).scroll(function(){
  //console.log($(window).scrollTop());
  var scrollValue = $(window).scrollTop();
  var winWdith = $(window).width();
  var height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var progressBar = (scrollValue / height1) * 100;   
  $("#dot").css('width',progressBar+'%');
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

const CertificateAnimation1 = new Motus.Animation({
  $el: document.getElementById('firstCertificate'),
  startPoint: 600,
  endPoint: 1300,
  keyframes: {
    10: {
      translateY: '150px',
      scale: [1.9],
      rotate: ['15deg'],
    },
    40: {
      rotate: ['0deg'],
      scale: [1.2]    
    }
  }

});

const CertificateAnimation2 = new Motus.Animation({
  $el: document.getElementById('secondCertificate'),
  startPoint: 600,
  endPoint: 1300,
  keyframes: {
    10: {
      translateY: '150px',
      scale: [1.9],
      rotate: ['15deg'],
    },
    40: {
      rotate: ['0deg'],
      scale: [1.2]    
    }
  }

});

const CertificateAnimation3 = new Motus.Animation({
  $el: document.getElementById('thirdCertificate'),
  startPoint: 600,
  endPoint: 1300,
  keyframes: {
    10: {
      translateY: '150px',
      scale: [1.9],
      rotate: ['15deg'],
    },
    40: {
      rotate: ['0deg'],
      scale: [1.2]    
    }
  }

});

const dotAnimation = new Motus.Animation({
  $el: document.getElementById('dot'),
  startPoint: 0,
  endPoint: 2500,
  keyframes: [
    {},
    {backgroundColor: 'red'},
    {backgroundColor: '#0F0'},
  ]
});



const projectsHeaderAnimation = new Motus.Animation({
  $el: document.getElementById('projectsHeader'),
  startPoint: 1000,
  endPoint: 1800,
  keyframes: {
    50: {
      translateX: '-100px'
    },
    100: {
      translateX: '-250px'
      
    }
  }

});


const phoneAnimation = new Motus.Animation({
  $el: document.getElementById('phoneSimulator'),
  //endPoint: [-10],
  startPoint: 1000,
  endPoint: 1800,
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
  startPoint: 1000,
  endPoint: 1800,
  keyframes: {
    50: {
      translateX: '-15px',
      translateY: '150px'
    },
    100: {
      translateX: '-30px',
      translateY: '300px'
      
    }
  }

});





function changeScreen(sourceName, elementId) {
  //alert("You clicked the coffee cup!");
  document.getElementById(elementId).src = "images/" + sourceName + ".png";
  switch(elementId){
    case 'phoneSimulator':
      var n = str.search("Screen");
      var pageName = str.slice(5, n);
      //document.getElementById("pageName").innerHTML = pageName;
    break;

    case 'mailzySimulator':
      if(sourceName == 'mailzyLoginScreen'){
        document.getElementById("mailzySimulator").useMap = '#image-map';
        document.getElementById("mailzySimulatorText").style.visibility = "visible";
      }
      else{
        document.getElementById("mailzySimulator").useMap = '#image-map1';
        document.getElementById("mailzySimulatorText").style.visibility = "hidden";
      }
    break;
  }
  

}



const mailzyAnimation = new Motus.Animation({
  $el: document.getElementById('mailzySimulator'),
  //endPoint: [-10],
  startPoint: 1400,
  endPoint: 2200,
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
  startPoint: 1400,
  endPoint: 2200,
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

function flipDiv(){
  document.getElementById("position").style.transition = "2s";
  document.getElementById("position").style.transform = "rotateY(180deg)";
}
  
    

  