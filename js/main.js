wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();


$(function(){


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 1) {
            //clearHeader, not clearheader - caps H
            $('.bac-nav').removeClass('nav-top')
            $(".bac-nav").addClass("nav-not-top");
            $(".bac-nav").addClass("shadow-lg");
        } else {
            $(".bac-nav").addClass("nav-top");
            $('.bac-nav').removeClass('nav-not-top')
            $('.bac-nav').removeClass('shadow-lg')
        }
    }); //missing );
})

