$(document).ready(function(){
	$('.icon').find('li').each(function(){
		var $picWidth = $('.pic').find('li').eq(0).width();
		var index = $(this).index();

		$(this).click(function(){
			$('.pic').animate({
				left:'-'+$picWidth*index+'px',
			});

			// $('.pic').find('li').eq($(this).index()).show();
			// $('.pic').find('li').eq($(this).index()).siblings().hide();
		})
	})

});