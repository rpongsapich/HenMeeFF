var prefs = require("sdk/simple-prefs").prefs;
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var tabs = require("sdk/tabs");

pageMod.PageMod({
  include: "*.madoomee.com",
  contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_shortcuts.js")],
  contentStyleFile: [data.url("henmee.css")],
  onAttach: function(worker){
      worker.postMessage(prefs.feature_shortcuts);
  }  
});

pageMod.PageMod({
	include: ["http://madoomee.com/browse.php*", "http://madoomee.com:69/browse.php*"],
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_cleanbrowse.js")],
	contentStyleFile: [data.url("henmee.css")],
	onAttach: function(worker){
	  worker.postMessage(prefs.feature_cleanbrowse);
	}  
});

pageMod.PageMod({
	include: ["http://madoomee.com:69/forums.php?action=viewtopic*", "http://madoomee.com/forums.php?action=viewtopic*"],
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_autoresize.js")],
	contentStyleFile: [data.url("henmee.css")],
	onAttach: function(worker) { worker.postMessage(prefs.feature_autoresize); }
});

pageMod.PageMod({
  include: "*.madoomee.com",
  contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_opennewtab.js")],
  contentStyleFile: [data.url("henmee.css")],
  onAttach: function(worker){
      worker.postMessage(prefs.feature_opennewtab);
  }  
});

pageMod.PageMod({
	include: ["http://madoomee.com/userhistory.php*", "http://madoomee.com:69/userhistory.php*"],
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_hidehistory.js")],
	contentStyleFile: [data.url("henmee.css")],
	contentStyle: ".hm_hist_comment_toggle { background-image: url(" + data.url("historyupdown.png") + ")}",
	onAttach: function(worker) { worker.postMessage(prefs.feature_hidehistory); }
});

pageMod.PageMod({
  include: "*.madoomee.com",
  contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_antidoublepost.js")],
  contentStyleFile: [data.url("henmee.css")],
  onAttach: function(worker){ worker.postMessage(prefs.feature_antidoublepost); }  
});

pageMod.PageMod({
	include: ["http://madoomee.com:69/forums.php?action=viewtopic*", "http://madoomee.com/forums.php?action=viewtopic*"],
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_convertsymbol.js")],
	contentStyleFile: [data.url("henmee.css")],
	onAttach: function(worker) { worker.postMessage(prefs.feature_convertsymbol); }
});

pageMod.PageMod({
	include: ["http://madoomee.com:69/forums.php?action=viewtopic*", "http://madoomee.com/forums.php?action=viewtopic*"],
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_titlefix.js")],
	contentStyleFile: [data.url("henmee.css")],
	onAttach: function(worker) { worker.postMessage(prefs.feature_titlefix); }
});

pageMod.PageMod({
	include: ["http://madoomee.com:69/forums.php?action=viewtopic*", "http://madoomee.com/forums.php?action=viewtopic*"],
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_reveallinks.js")],
	contentStyleFile: [data.url("henmee.css")],
	contentStyle: ".hm_reveal_link { background-image: url(" + data.url("link-icon.gif") + ")}",
	onAttach: function(worker) { 
		worker.postMessage(prefs.feature_reveallinks); 
	}
});

pageMod.PageMod({
	include: "*.madoomee.com",
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_fixlolthailinks.js")],
	contentStyleFile: [data.url("henmee.css")],
	onAttach: function(worker) { worker.postMessage(prefs.feature_fixlolthailinks); }
});

pageMod.PageMod({
	include: ["http://madoomee.com:69/forums.php?action=viewtopic*", "http://madoomee.com/forums.php?action=viewtopic*"],
	contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_quickreply.js")],
	contentStyleFile: [data.url("henmee.css")],
	onAttach: function(worker) { 
		worker.postMessage(prefs.feature_quickreply); 
	}
});