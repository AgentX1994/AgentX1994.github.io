
$(document).ready(function () {
 	$('#main-header').hide().fadeIn('slow');
 	$('#projects').hide();
 	$('#education,#interests').hide().slideDown('slow', function () {
 		$('#projects').slideDown('slow');
 	});
})