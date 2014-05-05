self.on("message", function(opt){
if(opt){
    var P = $('p.sub:first').parent();
    $('table.main', P).hide();
    $('> p.sub', P).wrap('<div class="hm_hist_comment_toggle" />');
    
    $('body').on('click', '.hm_hist_comment_toggle', function(){
        $(this).next('table.main').toggle();
        $(this).toggleClass('down');
    });
}});