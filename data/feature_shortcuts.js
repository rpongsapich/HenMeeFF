self.on("message", function(opt){
if(opt){
	var XID = document.cookie.match(/xid=\d+/gi).toString().substr(4);
	if(parseInt(XID) && $('table.main[width="800"]').length) {
		$('body').prepend('<div id="henmee-nav-menu"></div>');
		$('table.main:first a').appendTo('#henmee-nav-menu');
		$('body').css('padding-top', '53px' );
		
		$('#henmee-nav-menu')
			.append('<br>')
			.append("<a href=\"/userdetails.php?id="+XID+"\">My Details</a>")
			.append("<a href=\"/friends.php\">My Friends</a>")
			.append("<a href=\"/mytorrents.php\">My Torrents</a>&bull;")
			.append("<a href=\"/bookmark.php\">Bookmarks</a>&bull;")
			.append("<a href=\"/userhistory.php?action=viewcomments&id="+XID+"\">Torrent Comments</a>")
			.append("<a href=\"/userhistory.php?action=viewnewposts&id="+XID+"\">Forum Posts</a>")
			.append("<a href=\"/userhistory.php?action=viewmarkets&id="+XID+"\">Market Posts</a>&bull;")
			.append("<a href=\"/inbox.php\">Inbox</a>")
			.append("<a href=\"/inbox.php?out=1\">Sent Box</a>&bull;")
			.append("<a href=\"/logout.php\">Log Out</a>")
		;
		
		$('#henmee-nav-menu a:contains("Forums")').addClass('hm-toggle-menu').append("&nabla;<ul class=\"hmdownmenu\" id=\"hmForumsMenu\"/>");
		$('#henmee-nav-menu a:contains("Markets")').addClass('hm-toggle-menu').append("&nabla;<ul class=\"hmdownmenu\" id=\"hmMarketsMenu\"/>");
		$('#hmForumsMenu')
			.append('<li><a href="/forums.php?action=viewforum&forumid=101">ประกาศ</a></li>')
			.append('<li><a href="/forums.php?action=viewforum&forumid=100">ยุทธภพ~มีภัยร่วมปรึกษา</a></li>')
			.append('<li><a href="/forums.php?action=viewforum&forumid=102">ชุมนุมจอมยุทธ~Talk</a></li>')
			.append('<li><a href="/forums.php?action=viewforum&forumid=149">The Bid</a></li>')
			.append('<li><a href="/forums.php?action=viewforum&forumid=150">ครัว 5 ล้าน</a></li>')
			.append('<li><a href="/forums.php?action=viewforum&forumid=141">กวางจีบกวาง</a></li>')
			.append('<li><a href="/forums.php?action=viewforum&forumid=142">ถ่ายรูป ~เพื่อนชาวแผ~ กิจกรรม</a></li>')
			.append('<li><hr/></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=148">ห้องปรับทุกข์</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=143">Drama of Newerth</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=121">Games Online World</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=145">ประเวศร์ยิม ณ. แผ</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=134">-Red Zone-</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=127">~ Sport Over All ~</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=123">Casino Ok</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=107">ห้องอนิเม</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=108">ห้องหนัง</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=109">ห้องเพลง</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=110">ห้องเกมส์</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=111">ห้องคอมพ์</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=113">หอคัมภีร์เส้าหลิน</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=128">Discovery Channel</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=129">Hobby and Lifestyle</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=130">สุขภาพ และ ความงาม</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=106">BitTorrent link</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=133">International Talk</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=124">กระทรวงศึกษาธิการ</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=140">สาระน่ารู้แบบกวางๆ</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=104">Free Download</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=136">Project / Programming /Science & Development</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=135">สายสัมพันธ์์ชาวแซ่บ #1</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=137">การเงิน การลงทุน ทั่วไทยกว้างไกลทั่วโลก</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=138">ชาวแผผผผผ ตะลุยกิน</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=139">หอแห่งตำนาน ~</a></li>')
			.append('<li class="float"><a href="/forums.php?action=viewforum&forumid=146">เฉพาะกิจ น้ำท่วม</a></li>')
		;
		
		$("#hmMarketsMenu")
			.append('<li><a href="/markets.php?action=viewforum&forumid=32">list + ชื่อบัญชีคนโกง</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=33">review @ mini review</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=1">ประกาศ ทั่วไป</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=25">ประมูล.com ( กวาง )</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=34">Private Server ต่างๆและ IPTV สำหรับชาว LOL </a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=2">กล้องและอุปกรณ์ถ่ายภาพ</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=3">กีฬา</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=4">ของเก่า ของเล่น ของสะสม ,Video Game</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=5">คอมพิวเตอร์</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=6">เครื่องใช้ไฟฟ้า</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=7">เครื่องดนตรี</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=8">เครื่องสำอางค์</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=10">เสื้อผ้าและเครื่องประดับ</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=11">ท่องเที่ยวและตั๋ว บัตร</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=30">พระเครื่อง เช่า-บูชา เครื่องรางของขลัง ชนิดต่างๆ</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=12">โทรศัพท์และการสื่อสาร</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=13">ธุรกิจและอุตสาหกรรม</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=14">เพลงหนังดนตรีและบันเทิง</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=15">เฟอร์นิเจอร์และของแต่งบ้าน</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=16">แม่และเด็ก</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=17">รถและยานพาหนะ</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=18">ศิลปะ หัถกรรม ของที่ระลึก</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=19">สัตว์เลี้ยงและต้นไม้</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=20">หนังสือ</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=21">อุปกรณ์เครื่องเขียน ของใช้สำนักงาน</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=22">อาหารและสุขภาพ</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=26">ตลาดแรงงาน</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=23">อสังหาริมทรัพย์</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=24">อื่นๆ</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=27">Co-location Dedicated Server Hosting</a></li>')
			.append('<li><a href="/markets.php?action=viewforum&forumid=29">สอบถามเสนอแนะปัญหาต่างๆ</a></li>')
		;

		$('table.main:first').parent().parent().remove();

		$(".hm-toggle-menu")
			.on("mouseenter", function(){
				$(".hmdownmenu", this).show();
			})
			.on("mouseleave", function(){
				$(".hmdownmenu", this).hide();
			})
		;
	};
}});