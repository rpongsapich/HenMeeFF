var prefs = require("sdk/simple-prefs").prefs;
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.madoomee.com",
  contentScriptFile: [data.url("jquery-1.11.0.min.js"), data.url("feature_shortcuts.js")],
  contentStyleFile: [data.url("henmee.css")]
});