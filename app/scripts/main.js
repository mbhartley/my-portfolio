
$('.js-wfm-did').click(function(){
	$('.js-hidden-did-wfm').toggle(600);
	$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 'slow');
	return false;
})

$('.js-wfm-learned').click(function(){
	$('.js-hidden-learned-wfm').toggle(600);
	$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 'slow');
	return false;
})

$('.js-hgm-did').click(function(){
	$('.js-hidden-did-hgm').toggle(600);
	$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 'slow');
	return false;
})

$('.js-hgm-learned').click(function(){
	$('.js-hidden-learned-hgm').toggle(600);
	$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 'slow');
	return false;
})

$('.js-cc-did').click(function(){
	$('.js-hidden-did-cc').toggle(600);
	$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 'slow');
	return false;
})

$('.js-cc-learned').click(function(){
	$('.js-hidden-learned-cc').toggle(600);
	$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 'slow');
	return false;
})