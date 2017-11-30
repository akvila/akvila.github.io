$(document).ready(function() {
    $(".toggle-icon").click(function() { 
    $(this).toggleClass("pushed");    
    $(".leftWrapper").toggleClass("pushed");
    });
    
    $(".rightToggle-icon").click(function() { 
    $(this).toggleClass("pushed");    
    $(".rightWrapper").toggleClass("pushed");
    });
    
    $('.first.circle').circleProgress({
    value: 0.80,
    size: 80,
    fill: {
      gradient: ["#F2672C"]
    }
    });
    
    $('.second.circle').circleProgress({
    value: 0.70,
    size: 80,
    fill: {
      gradient: ["#F1C026"]
    }
    });
    
    $('.third.circle').circleProgress({
    value: 0.20,
    size: 80,
    fill: {
      gradient: ["#30AADD"]
    }
    });
    
});
