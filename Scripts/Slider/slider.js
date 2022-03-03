jQuery(document).ready(function ($) {

 
  
	var slideCount = $('#slider div img').length;
	var slideWidth = $('#slider div img').width();
	var slideHeight = $('#slider div img').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider div').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider div img:last-child').prependTo('#slider div');

    function moveLeft() {
        $('#slider div').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider div img:last-child').prependTo('#slider div');
            $('#slider div').css('left', '');
        });
    };

    function moveRight() {
        $('#slider div').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider div img:first-child').appendTo('#slider div');
            $('#slider div').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
