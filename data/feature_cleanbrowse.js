self.on("message", function(opt){
if(opt){
	function checksum(s) { 
		var i;
		var chk = 0x12345678;
		for (i = 0; i < s.length; i++) {
			chk += (s.charCodeAt(i) * (i + 1));
		}
		return chk.toString(16);
	}

	$('img[alt="pet"]').remove();
	$('img[src="pic/xl.gif"]').remove();
	$('img[src="pic/xr.gif"]').remove();
	$('a[href^="details.php"] b').html(function(index, content){
		var brk = content.match(/\[[^\]]+\]/g);
		if(brk) {
			var tags = $('<ul></ul>');
			$(tags).addClass('henmee_browse_tags_ul');
			for (i=0; i<brk.length; i++) {
				var cs = checksum(brk[i].replace(/\[|\]/g, ''));
				//console.log(cs);
				$('<li></li>').addClass('henmee_browse_tags_li').attr('tag',cs).text(brk[i].replace(/\[|\]/g, '')).on('click', function(){
					var tag = $(this).attr('tag');
					if($(this).hasClass('btlihilight')) {
						$('.btlihilight').removeClass('btlihilight');
					} else {
						$('.btlihilight').removeClass('btlihilight');
						$('.henmee_browse_tags_li[tag="'+tag+'"]').toggleClass('btlihilight');
					}
				}).appendTo($(tags));
				content = content.replace(brk[i], '');
			}
			content = content.replace(/^[ -]*/g, '');
			content = content.replace(/[ -]*$/g, '');
			content = content.replace(/720p/i, '<span class="torrent_720p">720p</span>');
			content = content.replace(/1080p/i, '<span class="torrent_1080p">1080p</span>');
			$(this).parent().parent().append(tags);
			return content;
		}
		//console.log(brk);
	});
}});