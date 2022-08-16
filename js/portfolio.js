$(function(){
    $(document).on('scroll', function(){        
        if($(window).scrollTop() > 100){
            $("header").addClass("down");
        }else{
            $("header").removeClass("down");
        }
    })
});

$(document).ready(function($) {
    $(".scroll-home").click(function(event){      
            event.preventDefault();
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
    $(".scroll-aboutme").click(function(event){      
            event.preventDefault();
            window.scrollTo({ top: 507, left: 0, behavior: 'smooth' });
    });
    $(".scroll-skills").click(function(event){      
            event.preventDefault();
            window.scrollTo({ top: 907, left: 0, behavior: 'smooth' });
    });
    $(".scroll-timeline").click(function(event){      
            event.preventDefault();
            window.scrollTo({ top: 1814, left: 0, behavior: 'smooth' });
    });
    $(".scroll-project").click(function(event){      
            event.preventDefault();
            window.scrollTo({ top: 2721, left: 0, behavior: 'smooth' });
    });
    $(".scroll-contact").click(function(event){      
            event.preventDefault();
            window.scrollTo({ top: 3628, left: 0, behavior: 'smooth' });
    });
});

