
// Preloader fadeout and fadein
$(document).ready(function(){
	$('#ar_dots').delay(3000).fadeOut(300,function(){
		$('#ar_bg_left').animate({left:'-50%'},600);
		$('#ar_bg_right').animate({right:'-50%'},600,function(){
			$('#ar_preloader').fadeOut(20);
		});
	});
});
