$(document.body).ready(function() {
  
  // Bootstrap UI element: Tooltip basic
  // Initial 
$('[data-toggle="tooltip"]').tooltip()


  
  // Core Layout: Header sidebar basic
  // Aside minimize toggler 
$(".u-header-menu__toggler-btn").on("click", function(){
  $(".u-page").toggleClass("u-aside-minimize");
  $(this).children().toggleClass("ion-md-menu ion-md-close");
});



  // Core Component: Aside menu accordion
  // Aside menu item click & toggle
$(".u-aside-menu__item--has-submenu > .u-item__link").on("click", function(e) {
  e.preventDefault();
  var $all_ul_next = $(this).parent().parent().children();
  // Check aside item is opened
  if($(this).parent().hasClass("u-aside-menu__item--open")) {
    $(this).parent().removeClass("u-aside-menu__item--open");
    $(this).next().slideUp(200);
  } else {
    $(this).parent().siblings().removeClass("u-aside-menu__item--open");
    $(this).parent().siblings().children("ul").slideUp(200);
    $(this).parent().addClass("u-aside-menu__item--open");
    $(this).next().slideDown(200);
  }
});

  
  // Core Library: Perfect scrollbar
  var asideBrandHeight = $('#u_aside_brand').height();
var asideMenuNavHeight = $('#u_aside_menu_nav').height();
var asideMenuHeight = $(window).height() - asideBrandHeight;
$('#u_aside_menu').css('height', asideMenuHeight + 'px');
$('#u_aside_menu').css('overflow', 'hidden');

// Initial
var ps;
var optionPerfectScrollbar = {
  wheelSpeed: 0.5,
  swipeEasing: true,
  wheelPropagation: false,
  minScrollbarLength: 40,
  maxScrollbarLength: 300, 
};

if (asideMenuNavHeight > asideMenuHeight) {
  ps = new PerfectScrollbar('#u_aside_menu', optionPerfectScrollbar);
}

// Aside menu item click
$('#u_aside_menu_nav .u-aside-menu__item--has-submenu > .u-item__link').on('click', function() {
  setTimeout(function() {
    // Recalculate height aside menu nav
    asideMenuNavHeight = $('#u_aside_menu_nav').height();
    if (asideMenuNavHeight > asideMenuHeight) {
      if (ps) {
        ps.update();
      } else {
        ps = new PerfectScrollbar('#u_aside_menu', optionPerfectScrollbar);
      }
    } else {
      if (ps) {
        ps.update();
      }
    }
  }, 300);
});


});

