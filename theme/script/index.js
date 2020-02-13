$(document).ready(function() {
	$(window).scroll(function() {
		$('.navbar').css('background-color', 'rgba(26,56,112,' + (($(window).scrollTop() / 500) + 0.3) + ')');
		if($(window).scrollTop() > $(window).height() / 2) {
			$('.go-top').css({'visibility': 'visible', 'opacity': '1'});
		} else {
			$('.go-top').css({'visibility': 'hidden', 'opacity': '0'});
		}
	});
	$('.go-bottom').click(function() {
		$("html,body").animate({
			scrollTop: $(window).height()
		},1e3);
	});
	$('.go-top').click(function() {
		$("html,body").animate({
			scrollTop: 0
		},1e3);
	});
});
$(document).ready(function() {
	$('.img-slide-1').css({'background-image': 'url("theme/asset/slide/slide-1.jpg")'});
	$('.img-slide-2').css({'background-image': 'url("theme/asset/slide/slide-2.jpg")'});
	$('.img-slide-3').css({'background-image': 'url("theme/asset/slide/slide-3.jpg")'});
	$('.background' ).css({'background-image': 'url("theme/asset/background/uniba.jpg")'});
});