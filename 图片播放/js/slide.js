$(document).ready(function() {

	$('.icon').find('li').each(function(){
		$(this).click(function(){
			var $picWidth = $('.pic').find('li').eq(0).width();
			var index = $(this).index();
			$('.pic').animate({
				left:'-'+$picWidth*index+'px',
			});
			 // $('.pic').find('li').eq($(this).index()).show();
			 // $('.pic').find('li').eq($(this).index()).siblings().hide();
			})

	});
	var index = 0;
	$('#arrow1').click(function(){
		var $picWidth = $('.pic').find('li').eq(0).width();
		index += 1;
		if (index<5) {
			$('.pic').animate({
				left:'-'+$picWidth*index+'px',
			})
		}else{
			return false;
		}
		

	});
	
	$('#arrow2').click(function(){
		var $picWidth = $('.pic').find('li').eq(0).width();
		index -= 1;
		if (index>-1) {
			$('.pic').animate({
				left:'-'+$picWidth*index+'px',
			})
		}else{
			return false;
		}
		

	});
});

