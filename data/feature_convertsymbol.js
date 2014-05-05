self.on("message", function(opt){
if(opt){
    $('td.comment').html(function(i,h){
        return h.replace(/&amp;#(\d+);/gm, '<span class="lth_symbols">&#$1;</span>');
    });
}});