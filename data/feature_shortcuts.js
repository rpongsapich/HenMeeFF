if($('table.main[width="800"]').length) {
	$('body').prepend('<div id="henmee-nav-menu-container"></div>');
	$('#henmee-nav-menu-container').append('<ul id="henmee-nav-menu"></ul>')
	$('table.main:first a').appendTo('#henmee-nav-menu').wrap('<li></li>');
	$('body').css('padding-top', $('#henmee-nav-menu-container').height() );
}