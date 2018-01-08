
// Preloader fadeout and fadein
$(document).ready(function(){
	$('#ar_dots').delay(1500).fadeOut(300,function(){
		$('#ar_bg_left').animate({left:'-50%'},300);
		$('#ar_bg_right').animate({right:'-50%'},300,function(){
			$('#ar_preloader').fadeOut(10);
		});
	});
});
