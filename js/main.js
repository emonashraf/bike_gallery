$(document).ready(function () {
    $('.testimonial-corousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

   
// Navbar Shrink
    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });
    // // Navbar Collapse
    // $(".nav-link").on("click", function () {
    //     $(".navbar-collapse").collapse("hide");
    // });

// blog slider
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:false,
    responsiveClass:true,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
})
    // $("#slider-range").slider({
    //     range: true,
    //     min: 0,
    //     max: 500,
    //     values: [75, 300],
    //     slide: function (event, ui) {
    //         $('#range-values').text(`
    //             $${ui.values[0]} - $${ui.values[1]}
    //         `)
    //     }
    // });

    // $("#amount").text(`
    //     ${$("#slider-range").slider("values", 0)} - ${$("#slider-range").slider("values", 1)}
    // `);
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
          $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      $( "#amount" ).val("Price:" + "  " + "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});














