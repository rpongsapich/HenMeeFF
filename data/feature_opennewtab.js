self.on("message", function(opt){
if(opt){
	$('a[href^="details.php"]').attr('target', '_blank');
	$('td.comment a').attr('target', '_blank');
	if(/forums.php$/.test(document.URL) || /markets.php$/.test(document.URL)) {
		$('a[href^="?action=viewtopic"]').attr('target', '_blank');
	}
	if(/action\=viewforum/.test(document.URL)) {
		$('a[href^="?action=viewtopic"]').attr('target', '_blank');
	}
	
	if(/details.php/.test(document.URL)) {
		//details page
		$('table[width="750"] tr td:nth-child(2) a, .text a').attr('target', '_blank');
	}
	
	if(/userhistory.php/.test(document.URL)) {
		// post history page
		$('p.sub a').attr('target', '_blank');
	}
}});