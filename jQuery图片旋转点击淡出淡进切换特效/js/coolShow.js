(function($) {
	$.fn.coolShow=function(options){
		var defaults={
			imgSrc:'',
			speed:50
		};
		var action={
			init:function(){
				$('#handBar').find('span').on('click',function(){
					$(this).stop();
					$('#coolShow b').remove();
					for (var i = 0;i<($("#coolShow").height()/10);i++) {
						$('#coolShow').append('<b></b>');
										}
				  var psn=0;
				  var imgId=$(this).children().data('img');



										)
			}
		}
	}
})