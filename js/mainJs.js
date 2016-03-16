$(document).ready(function(){
    // for burger menu
    $(".btn-toggle").on('click', function(){
        $(this).parent().siblings('.toggle-box').slideToggle();
    });

    // for video-block on Home Page
    $('.video-box').click(function(){
        $('.video-box').html('</iframe><iframe width="100%" height="100%" src="https://www.youtube.com/embed/V6-0kYhqoRo?autoplay=1&loop=1&playlist=V6-0kYhqoRo" frameborder="0" allowfullscreen></iframe>');
    });

    // for FAQ section
    $(".question-head").on('click', function(){
        $(this).siblings('.question-answer').slideToggle();
        $(this).toggleClass('open');
    });
});