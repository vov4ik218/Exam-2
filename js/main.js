
$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger,.nav').toggleClass('active');
        $('.burger span').toggleClass('hide');
        $('.burger::before').toggleClass('rotate');
    })
})