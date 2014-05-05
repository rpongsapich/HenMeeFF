self.on("message", function(opt){
if(opt){
	$('table.main:first + p').after('<form action="?action=post" method="post" id="hm_quickreply"></form>');
	var topicid = document.URL.match(/topicid\=(\d+)/);
	topicid = topicid[1];
	$('#hm_quickreply')
		.append('<h2>Quick Reply</h2>')
		.append('<input type="hidden" name="topicid" value="'+topicid+'" />')
		.append('<div><textarea name="body" style="width:100%"></textarea></div>')
		.append('<div style="text-align:center"><input type="submit" value="Submit" /></div>')
	;
}});