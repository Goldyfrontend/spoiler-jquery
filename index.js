$(document).ready(function() {
	$('.block-spoiler__title').click(function(event) {
		
		//Делаем открытым только один блок one
		if($('.block-spoiler').hasClass('one')) {
			$('.block-spoiler__title').not($(this)).removeClass('active');
			$('.block-spoiler__text').not($(this).next()).slideUp(300);
		};
		$(this).toggleClass('active').next().slideToggle(300);
	});
});  