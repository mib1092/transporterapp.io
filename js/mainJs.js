$(document).ready(function(){
    // for video-block on Home Page
    $('.video-box').click(function(){
        $('.video-box').html('</iframe><iframe width="100%" height="100%" src="https://www.youtube.com/embed/V6-0kYhqoRo?autoplay=1&loop=1&playlist=V6-0kYhqoRo" frameborder="0" allowfullscreen></iframe>');
    });

    // for FAQ section
    flag = true;
    $(".question-head").on('click', function(){
        if (flag == true) {
            $(this).addClass('open');
            flag = false;
        } else {
            $(this).removeClass('open');
            flag = true;
        }
        $(this).siblings('.question-answer').slideToggle();
    });
});