$('#page-top').click(function(){
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

$(document).ready(function () {
$(".navbar-nav li a").click(function(event) {
$(".navbar-collapse").collapse('hide');
});
});