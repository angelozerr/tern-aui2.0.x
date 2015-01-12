var util = require("./util");

exports['test Y.AceEditor completion'] = function() {
  // check AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.A", {
    "name":"AceEditor",
    "type":"fn(config: Object)",
    "origin":"aui2.0.x"
  }, "AceEditor");
  
  // check methods of AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({}).getE", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":52},
    "isProperty":true,
    "completions":[{"name":"getEditor","type":"fn()","origin":"aui2.0.x"}]
  });  
}

if (module == require.main) require("test").run(exports);