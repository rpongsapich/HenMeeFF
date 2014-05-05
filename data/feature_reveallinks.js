self.on("message", function(opt){
if(opt){
	$('td.comment').prepend('<div class="hm_all_links"></div>');
	$('td.comment').each(function(i, n){
		var ix = this.innerHTML.indexOf("<br>------------------------<br>");
		if(ix>=0){
			var comment = '<div>'+this.innerHTML.substring(0, ix)+'</div>';
		} else {
			var comment = '<div>'+this.innerHTML+'</div>';
		}
		var div = $('.hm_all_links', this);
		
		$('a', $(comment)).each(function(){
			if(this.href.indexOf('userdetails.php') > -1) { 
				return; 
			} else {
				$('<a></a>')
					.addClass('hm_reveal_link')
					.attr('href', this.href)
					.attr('target', '_blank')
					.appendTo(div)
				;
				//$(div).append('<a class="hm_reveal_link" href="'+this.href+'" target="_blank" />');
			}
		});
 	});    
}});