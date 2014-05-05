self.on("message", function(opt){
if(opt){
	var H1 = $('h1:first').clone();
	$('a', H1).remove();
	var title = $(H1).text();
	document.title = title.substr(2);
}});