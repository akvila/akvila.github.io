$(document).ready(function() {
    $(".icon").click(function() { 
    $(this).toggleClass("pushed");    
    $(".nav-open").toggleClass("pushed");
    });
    
    $("#carousel").waterwheelCarousel({
    });
    
    $(function () {
    $(".porfolio").excoloSlider();
    });

});