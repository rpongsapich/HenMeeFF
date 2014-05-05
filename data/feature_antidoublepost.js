self.on("message", function(opt){
if(opt){
	$('.submitted').removeClass('submitted');
    $('form').on('submit', function(){
        $('[type="submit"]', this).attr('disabled', 'disabled');
        if(!$(this).hasClass('submitted')) { $(this).addClass('submitted'); return true; }
        return false;
    });
}});