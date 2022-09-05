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
        if(document.getElementById('nav_list').style.display === 'block') {
            document.getElementById('nav_list').style.display = 'none';
        };
        event.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
    $(".scroll-aboutme").click(function(event){
        if(document.getElementById('nav_list').style.display === 'block') {
            document.getElementById('nav_list').style.display = 'none';
        };
        if($(window).width() > 735) {
            event.preventDefault();
            window.scrollTo({ top: 507, left: 0, behavior: 'smooth' });
        } else {
            event.preventDefault();
            window.scrollTo({ top: 357, left: 0, behavior: 'smooth' });
        };
    });
    $(".scroll-skills").click(function(event){      
        if(document.getElementById('nav_list').style.display === 'block') {
            document.getElementById('nav_list').style.display = 'none';
        };
        if($(window).width() > 767) {
            event.preventDefault();
            window.scrollTo({ top: 907, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 767 && $(window).width() > 735) {
            event.preventDefault();
            window.scrollTo({ top: 921, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 735 && $(window).width() > 510) {
            event.preventDefault();
            window.scrollTo({ top: 774, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 510 && $(window).width() > 390) {
            event.preventDefault();
            window.scrollTo({ top: 993, left: 0, behavior: 'smooth' });
        } else {
            event.preventDefault();
            window.scrollTo({ top: 917, left: 0, behavior: 'smooth' });
        }
    });
    $(".scroll-timeline").click(function(event){
        if(document.getElementById('nav_list').style.display === 'block') {
            document.getElementById('nav_list').style.display = 'none';
        };
        if($(window).width() > 767) {
            event.preventDefault();
            window.scrollTo({ top: 1814, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 767 && $(window).width() > 735) {
            event.preventDefault();
            window.scrollTo({ top: 1828, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 735 && $(window).width() > 510) {
            event.preventDefault();
            window.scrollTo({ top: 1681, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 510 && $(window).width() > 390) {
            event.preventDefault();
            window.scrollTo({ top: 1900, left: 0, behavior: 'smooth' });
        } else {
            event.preventDefault();
            window.scrollTo({ top: 1824, left: 0, behavior: 'smooth' });
        }
    });
    $(".scroll-project").click(function(event){
        if(document.getElementById('nav_list').style.display === 'block') {
            document.getElementById('nav_list').style.display = 'none';
        };
        if($(window).width() > 767) {
            event.preventDefault();
            window.scrollTo({ top: 2721, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 767 && $(window).width() > 735) {
            event.preventDefault();
            window.scrollTo({ top: 2735, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 735 && $(window).width() > 510) {
            event.preventDefault();
            window.scrollTo({ top: 2588, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 510 && $(window).width() > 390) {
            event.preventDefault();
            window.scrollTo({ top: 2807, left: 0, behavior: 'smooth' });
        } else {
            event.preventDefault();
            window.scrollTo({ top: 2731, left: 0, behavior: 'smooth' });
        }
    });
    $(".scroll-contact").click(function(event){      
        if(document.getElementById('nav_list').style.display === 'block') {
            document.getElementById('nav_list').style.display = 'none';
        };
        if($(window).width() > 767) {
            event.preventDefault();
            window.scrollTo({ top: 3628, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 767 && $(window).width() > 735) {
            event.preventDefault();
            window.scrollTo({ top: 3642, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 735 && $(window).width() > 510) {
            event.preventDefault();
            window.scrollTo({ top: 3495, left: 0, behavior: 'smooth' });
        } else if($(window).width() <= 510 && $(window).width() > 390) {
            event.preventDefault();
            window.scrollTo({ top: 3714, left: 0, behavior: 'smooth' });
        } else {
            event.preventDefault();
            window.scrollTo({ top: 3638, left: 0, behavior: 'smooth' });
        }
    });
});

function OpenCloseNav() {
        if(document.getElementById('nav_list').style.display === 'block') {
                document.getElementById('nav_list').style.display = 'none';
        } else {
                document.getElementById('nav_list').style.display = 'block';
        };
};