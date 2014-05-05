self.on("message", function(opt){
if(opt){
	$('a[href]').each(function(){
		this.href = this.href.replace('http://lolthai.com/', 'http://madoomee.com:69/');
	});
}});