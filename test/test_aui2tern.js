var util = require("./util"), assert = require('assert');

var yuiDef = util.generateDef();

// Test with http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html

exports['test _yui.aui_ace_editor.A.AceEditor'] = function() {
  var AceEditor = yuiDef["!define"]["_yui"]["aui_ace_editor"]["A"]["AceEditor"];
  assert.notEqual(AceEditor, null, 'cannot find _yui.aui_ace_editor.A.AceEditor');
  assert.equal(AceEditor["!type"], "fn(config: +yui.Object)");
  // extends Widget of YUI3
  assert.equal(AceEditor["prototype"]["!proto"], "widget.Widget.prototype");
}

/*exports['test app.App'] = function() {
  var App = yuiDef["!define"]["app"]["App"];
  assert.notEqual(App, null, 'cannot find app.App');
  assert.equal(App["!type"], "fn(config?: +yui.Object) -> +app.App");
  // extends Base
  assert.equal(App["prototype"]["!proto"], "app.App.Base.prototype");
  // showContent
  var Content = App["Content"]
  assert.notEqual(Content, null, 'cannot find App.Content');
  // Test with callback of showContent
  assert.equal(Content["prototype"]["showContent"]["!type"], "fn(content: +HTMLElement, options?: +yui.Object, callback?: fn(view: +app.View)) -> !this");
}

exports['test test.EventTarget'] = function() {
  var EventTarget = yuiDef["!define"]["test"]["Test"]["EventTarget"];
  assert.notEqual(EventTarget, null, 'cannot find Test.EventTarget');
  assert.equal(EventTarget["!type"], "fn()");
}*/

if (module == require.main) require("test").run(exports);