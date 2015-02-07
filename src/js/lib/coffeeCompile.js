(function() {
  $(document).ready(function() {
    $('.site-menu .top').click(function(e) {
      e.preventDefault();
      $('.site-wrapper').toggleClass('menu-on');
    });
  });

}).call(this);

(function() {
  $(document).ready(function() {
    var $container;
    $container = $('.isotope-grid');
    $container.children('li').addClass('isotope-item');
    $container.imagesLoaded(function() {
      $container.isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
      });
    });
  });

}).call(this);

(function() {
  'use-strict';
  $(document).ready(function() {
    $('.disable-anchors a').click(function(e) {
      e.preventDefault();
    });
    $('[data-href]').click(function(e) {
      console.log($(this).data('href'));
      document.location.replace($(this).data('href'));
    });
  });

}).call(this);

(function() {
  'use-strict';
  $(document).ready(function() {
    var $menuTrigger, $mobileNavDisplayTriggers, $mobileNavRefGlobal, $siteWrapper;
    $siteWrapper = $('.site-wrapper');
    $menuTrigger = $('.menu-trigger');
    $mobileNavDisplayTriggers = $('.mobile-nav-display-triggers');
    $menuTrigger.click(function(e) {
      e.preventDefault();
      $siteWrapper.toggleClass('menu-on');
    });
    $mobileNavRefGlobal = '';
    $mobileNavDisplayTriggers.on('click', '[href^=#]', function(e) {
      var $navRef, $navRefClass;
      $navRef = $(this).attr('href');
      $mobileNavRefGlobal = $navRef.slice(1);
      if ($navRef.length > 0) {
        e.preventDefault();
        $navRefClass = $navRef.slice(1);
        $siteWrapper.addClass('display ' + $navRefClass);
      }
    });
    $('.mobile-nav-display .back').click(function(e) {
      e.preventDefault();
      $siteWrapper.removeClass('display');
      $siteWrapper.removeClass($mobileNavRefGlobal);
    });
  });

}).call(this);

(function() {
  'use-strict';
  $(document).ready(function() {
    var scrollToController;
    scrollToController = new ScrollMagic();
    scrollToController.scrollTo(function(newpos) {
      TweenMax.to(window, 0.5, {
        scrollTo: {
          y: newpos
        }
      });
    });
    $(document).on('click', 'a[href^=#]', function(e) {
      var id;
      id = $(this).attr('href');
      if ($(id).length > 0 && !id.match(/nav/g) && !id.match(/carousel/g)) {
        e.preventDefault();
        scrollToController.scrollTo(id);
      }
    });
  });

}).call(this);

(function() {
  'use-strict';
  $(document).ready(function() {
    var myPlayer, playBtn, playFullScreen, videoIsFullscreen, videoPlaying, videocover;
    videocover = document.getElementById('videocover');
    playBtn = $('.play-video');
    playFullScreen = $('.play-video-full-screen');
    videoPlaying = false;
    videoIsFullscreen = false;
    if (videocover) {
      myPlayer = videojs('videocover');
      myPlayer.controls(false);
      myPlayer.currentTime(6);
      playBtn.click(function(e) {
        e.preventDefault();
        if (videoPlaying) {
          myPlayer.pause();
          $('.play-video i').removeClass('flaticon-pause31').addClass('flaticon-key9');
          videoPlaying = false;
        } else {
          myPlayer.play();
          $('.video-placeholder').addClass('hidden');
          $('.play-video i').removeClass('flaticon-key9').addClass('flaticon-pause31');
          videoPlaying = true;
        }
      });
      playFullScreen.click(function(e) {
        e.preventDefault();
        myPlayer.requestFullscreen();
        myPlayer.isFullscreen(true);
        myPlayer.controls(true);
        myPlayer.muted(false);
        myPlayer.play();
        myPlayer.currentTime(0);
      });
      myPlayer.on('fullscreenchange', function() {
        if (!myPlayer.isFullscreen()) {
          myPlayer.isFullscreen(false);
          myPlayer.controls(false);
          myPlayer.muted(true);
        }
      });
    }
  });

}).call(this);
