var click = 0;
function darkMode() {
    click++;
    if(click === 1){
        $(".container").css({background:'#000000'});
        $("body").css({background:'gray'});
        $("p").css({color: '#ffffff'});
        $("h3").css({color:'#ffffff'});
        $("h5").css({color:'#20b2aa'}); 
    }else if(click === 2){   
        $(".container").css({background:""});
        $("body").css({background:''});
        $("p").css({color: ''});
        $("h3").css({color:''});
        $("h5").css({color:''}); 
        click = 0;
    }
}
var click2 = 0;
function dilexicMode() {
    click2++;
    if(click2 === 1){
      var fuente = new FontFace('OpenDyslexic-Regular', 'url(./font/OpenDyslexic-Regular.otf)');
    $("h1,h2,h3,h4,h5,h6,ul,li,p").css({fontFamily:"OpenDyslexic-Regular"});
    }else if(click2 === 2){
    $("h1,h2,h3,h4,h5,h6,ul,li,p").css({fontFamily:""});
     click2 = 0;
    }
}