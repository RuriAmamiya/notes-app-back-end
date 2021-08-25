var mainslider;
var sliding=false;

$(document).ready(function(){
    var options={
        slides: '.slide', // Nama slide di slidecontainer
        swipe: false, // Handler swipe, wajib include touchSwipe
        transition: "slide", // Transisi slide=> slide dan fade
        slideTracker: true, // Menambah pelacakan slide
        slideTrackerID: 'slideposition', // Nama pelacakan slide
        slideOnInterval: false, // Interval slide
        interval: 9000, // Interval slide, jika slideOnInterval is enable/true
        animateDuration: 1000, // Durasi animasi
        animationEasing: 'ease', // Nilai yang diterima: linear ease in out snap easeOutCubic




        pauseOnHover: false, // Pause jika user mengarahkan kursor ke slide container
        magneticSwipe: true, // efek menempel pada slide ketika swipping/dragging
        neverEnding: true // aktifkan untuk membuat efek yang tidak pernah berhenti/neverending
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    /* yes, that's all! */

    $(".slider").on("beforeSliding", function(event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + prevSlide + "'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").hide();
        sliding = true;
    });
    
    $(".slider").on("afterSliding", function(event) {
        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='" + newSlide + "'] .slidecontent").fadeIn();
        sliding = false;
    });

    //**Control the slider by scrolling


    $(window).bind('mouseWheel', function(event) {
        if(!sliding){
            if(event.originalEvent.deltaY > 0) {
                mainslider.nextSlide();
            }
            else{
                mainslider.prevSlide();
            }
        }
    });

    $(".slide#satu").backstretch("images/image1.jpg");
    $(".slide#dua").backstretch("images/image2.jpg");
    $(".slide#tiga").backstretch("images/image3.jpg");
    $(".slide#empat").backstretch("images/image4.jpg");

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function(){
        $(this).css('margin-top', -$(this).height()/2);
    });
});