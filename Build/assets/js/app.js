$(document).ready(function(){

  // VARS
  var tim = 0;


  // FUNCTIONS
  // reload after 5mins of inactivity
  function reload() {
    tim = setTimeout("location.reload(true);",300000);   // 5 minutes
  }

  // Cancel reload
  function canceltimer() {
    window.clearTimeout(tim);  // cancel the timer on each mousemove/click
    reload();  // and restart it
  }

  // Animation of list and background
  function wamscroll() {
    //Height from top
    var wamtop = ($('.scrollarea ul').offset().top - $('.active').offset().top);
    wamtop = (wamtop * -1);
    $('.scrollarea').animate({ scrollTop: wamtop }, 300);
    wampos = $('.active').data('position');
    if($('.active').next().length) {
      $('.top').hide();
    } else {
      $('.top').show();
    }
    $('.bookofdead').removeClass().addClass('bookofdead ' + wampos);
    canceltimer();
  }


  // SET LISTENERS
  $('.top').click(function() {
    $('.active').removeClass('active');
    $('.scrollarea li:first-child').addClass('active');
    wamscroll();
  });
  $('.up').click(function() {
    if($('.active').prev().length) {
      $('.active').removeClass('active').prev().addClass('active');
      wamscroll();
    }
  });
  $('.down').click(function() {
    if($('.active').next().length) {
      $('.active').removeClass('active').next().addClass('active');
      wamscroll();
    }
  });

  $('.scrollarea li').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    wamscroll();
  });

  $(document).keydown(function(e){
    if (e.keyCode == 38) {
      if($('.active').prev().length) {
        $('.active').removeClass('active').prev().addClass('active');
        wamscroll();
      }
    }
    if (e.keyCode == 40) {
      if($('.active').next().length) {
        $('.active').removeClass('active').next().addClass('active');
        wamscroll();
      }
    }
  });

  // DO STUFF
  $('.scrollarea li:first-child').addClass('active');
  $('.bookofdead').addClass('position1')
  $('.top').hide();
  reload();



});
