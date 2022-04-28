$(document).ready(function() {
  $('.skitter-large').skitter({
    theme:'clean',
    dots:true,
    preview: true,
    });
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:3,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    dotsEach:true
  });

  $(document).ready(function(){
    $('.terminal').typewriting("Image Slider using jQuery", {

    // default: 150
    "typing_interval": 200,

    // default: 0.7s
    "blink_interval": "1s",

    // default: black
    "cursor_color": "#00fd55"

  });
  });

  
});
