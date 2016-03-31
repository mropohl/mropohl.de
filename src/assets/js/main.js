var main = function() {

    var mqVerySmall = window.matchMedia( "(max-width: 480px)" );
    var mqSmall = window.matchMedia( "(max-width: 768px)" );
    var mqMedium = window.matchMedia( "(max-width: 992px)" );
    var mqLarge = window.matchMedia( "(max-width: 1200px)" );
    var mqVeryLarge = window.matchMedia( "(min-width: 1200px)" );

    var indicatorClicked = 0;

    //---- Waypoints

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-text'),
        handler: function() {
            if(indicatorClicked == 0) {
                $(".ind-1").addClass("indicator-active");
                $(".ind-2").removeClass("indicator-active");
                $(".ind-3").removeClass("indicator-active");
                $(".ind-4").removeClass("indicator-active");
            }
        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('skills'),
        handler: function() {
            if(indicatorClicked == 0) {
                $(".ind-2").addClass("indicator-active");
                $(".ind-1").removeClass("indicator-active");
                $(".ind-3").removeClass("indicator-active");
                $(".ind-4").removeClass("indicator-active");
            }
        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-portrait1'),
        handler: function() {
            if(indicatorClicked == 0) {
                $(".ind-2").addClass("indicator-active");
                $(".ind-1").removeClass("indicator-active");
                $(".ind-3").removeClass("indicator-active");
                $(".ind-4").removeClass("indicator-active");
            }
        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-portrait2'),
        handler: function() {
            if(indicatorClicked == 0) {
                $(".ind-2").addClass("indicator-active");
                $(".ind-1").removeClass("indicator-active");
                $(".ind-3").removeClass("indicator-active");
                $(".ind-4").removeClass("indicator-active");
            }
        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-showcase1'),
        handler: function() {
            if(indicatorClicked == 0) {
                $(".ind-3").addClass("indicator-active");
                $(".ind-1").removeClass("indicator-active");
                $(".ind-2").removeClass("indicator-active");
                $(".ind-4").removeClass("indicator-active");
            }
        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-showcase2'),
        handler: function() {
            if(indicatorClicked == 0) {
                $(".ind-3").addClass("indicator-active");
                $(".ind-1").removeClass("indicator-active");
                $(".ind-2").removeClass("indicator-active");
                $(".ind-4").removeClass("indicator-active");
            }
        }
    })

    var waypoint = new Waypoint({
        element: document.getElementById('waypoint-contact'),
        handler: function() {
            if(indicatorClicked == 0) {
                $(".ind-1").removeClass("indicator-active");
                $(".ind-2").removeClass("indicator-active");
                $(".ind-3").removeClass("indicator-active");
                $(".ind-4").addClass("indicator-active");
            }
        }
    })

    //----------------------- Page Load Hero -----------------------//

    $(".hero-text").css({
        "opacity": 1,
        "transform": "scale(1)"
    });

    //----------------------- Indicator: Click -----------------------//

    $(".ind-1").click(function() {

        $("html, body").animate({
            scrollTop: $(".navbar-brand").offset().top
        }, 1000);

    });

    $(".ind-2").click(function() {

        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1000);

    });

    $(".ind-3").click(function() {

        $("html, body").animate({
            scrollTop: $(".showcase").offset().top - 50
        }, 1000);

    });

    $(".ind-4").click(function() {

        $("html, body").animate({
            scrollTop: $(".contact").offset().top + 50
        }, 1000);

    });

    //----------------------- Nav: Click -----------------------//

    $(".nav-1").click(function() {
        $("html, body").animate({
            scrollTop: $(".navbar-brand").offset().top
        }, 1000);
    });

    $(".nav-2").click(function() {
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });

    $(".nav-3").click(function() {
        $("html, body").animate({
            scrollTop: $(".showcase").offset().top
        }, 1000);
    });

    $(".nav-4").click(function() {
        $("html, body").animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });

    //----------------------- About Buttons Funktionen -----------------------//

    var windowHeight = $(window).height();

    $(".header").css({
        "height": windowHeight
    });

    hidePMobile();

    $(window).resize(function () {
        var windowHeight = $(window).height() + 60 ;
        hidePMobile();
        var widthWindow = $(window).width();
        console.log(widthWindow);

    });

    function hidePMobile() {

        if($(window).width() < 700) {
            $(".p-hide-mobile").hide();
            $(".btn-learnmore").text("Mehr Erfahren");
        }

        else {
            $(".p-hide-mobile").show();
            $(".btn-learnmore").text("Erfahrungen");
        }

    };

    //---- btn-learnmore

    $(".p-about-disabled").hide();

    $(".btn-learnmore").click(function() {

        $(".p-about-disabled").slideToggle();

        if($(window).width() < 700) {

            $(".p-hide-mobile").slideToggle();

        }

    });

    //---- btn-contact

    $(".btn-contact").click(function() {

        $("html, body").animate({
            scrollTop: $(".contact").offset().top
        }, 1000);

    });

    //----------------------- Scroll Funktionen -----------------------//

    $(window).scroll(function() {

        //----------------------- Variablen -----------------------//

        var scrollHeight = $(this).scrollTop();

        var windowWidth = $(window).width();


        function animSkills () {
            $(".ic-skill-hidden").addClass("ic-skill-showing");
            $(".p-skill-hidden").addClass("p-skill-showing");
            $(".bar-skill-hidden").addClass("bar-skill-showing");
            $(".bar-skill-blank-hidden").addClass("bar-skill-blank-showing");
            $(".p-skills").addClass("p-showing");
        };

        if(scrollHeight > $(".hero-text").offset().top ) {
            animSkills();
        }

        //----------------------- Animations about, portrait, text -----------------------//

        var portraitOpacity = Math.round(100 * scrollHeight * 0.002) / 100 - 1.6;
        var textOpacity = Math.round(100 * scrollHeight * 0.002) / 100 - 2.2;

        function animAbout() {
            $(".portrait").css({
                "opacity": portraitOpacity
            });

            $(".about-text").css({
                "opacity": textOpacity
            });
        };

        if($(".hero-text").offset().top < scrollHeight && windowWidth > 500) {

            window.requestAnimationFrame(animAbout);

        }

        //----------------------- Animations Social -----------------------//

        if($(".portrait").offset().top < scrollHeight) {

            $(".ic-social").each(function(i) {

                setTimeout(function() {

                    $(".ic-social").eq(i).css({
                        "transform": "scale(1.0)"
                    });
                }, 300* (i+1)); //---- ENDE timeOut
            }); //---- ENDE each

            $(".link-social").each(function(i) {

                setTimeout(function() {

                    $(".link-social").eq(i).css({
                        opacity: 1
                    });
                }, 300* (i+1)); //---- ENDE timeOut
            }); //---- ENDE each
        }

        //------------ Animations Thumbs ------------//

        var figureHeight;

        if(mqVeryLarge.matches) {
            figureHeight = Math.round(scrollHeight * 0.45) -1000;
        }

        if(mqLarge.matches) {
            figureHeight = Math.round(scrollHeight * 0.45) -1020;
        }

        if(mqMedium.matches) {
            figureHeight = Math.round(scrollHeight * 0.45) -1590;
        }

        if(mqSmall.matches) {
            figureHeight = Math.round(scrollHeight * 0.45) -1550;
        }

        if(mqVerySmall.matches) {
            figureHeight = Math.round(scrollHeight * 0.45) -1570;
        }

        var figureOpacity = Math.round(100 * scrollHeight * 0.00095) / 100 - 1.4;
        var pthumbOpacity = Math.round(100 * scrollHeight * 0.00095) / 100 - 1.7;

        function animThumbs() {
            $(".p-showcase").css({
                "transform": "translateY("+figureHeight+"px)",
                "opacity": pthumbOpacity
            });

            $(".fig1").css({
                "transform": "translateY("+figureHeight+"px)",
                "opacity": figureOpacity
            });
        }

        if(figureHeight < 1000 && figureHeight > -3800) {

            window.requestAnimationFrame(animThumbs);

        }



    }); //----ENDE Scroll Funktion

} //----ENDE Main Funktion

$(document).ready(main);
