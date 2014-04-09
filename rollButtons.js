function setWidthAddSpan(elem) {
	$(elem).width($(elem).width());
	$(elem).html('<span>' + $(elem).html() + '</span>');
}
function rollText(elem) {
	$(elem).not(":has('.cloned')").append($(elem).children('span').clone().addClass('cloned').css('margin-left', '130%'));
	$(elem).children('span').not('.cloned').addClass('original');
	$(elem).children('.original').animate({marginLeft: '-130%'}, 200);
	$(elem).children('.cloned').animate({marginLeft: '30%'}, 200);
}
$(window).load(function() {
	$('button').each(function() {
		setWidthAddSpan($(this));
	});
	
	$('button').hover(function() {
		rollText($(this));
	});
});