var util = require("./util");

exports['test Y.AceEditor completion'] = function() {
  // check AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.A", {
    "name":"AceEditor",
    "type":"fn(config: yui.Object)",
    "origin":"aui2.0.x"
  }, "AceEditor");
  
  // check methods of AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({}).getE", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":52},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"getEditor","type":"fn()","origin":"aui2.0.x"}]
  });  
}

// see https://github.com/angelozerr/tern-aui2.0.x/issues/7
exports['test Y.AceEditor extends Widget completion'] = function() {
  
  // Widget of YUI3 provides render, AceEditor inherits from this methods.
  // check methods of AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({}).r", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":49},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[
      {"name":"readOnly","type":"bool","origin":"aui2.0.x"},
      {"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"},
      {"name":"rendered","type":"bool","origin":"yui3"}
    ]
  });  
  
  
}

if (module == require.main) require("test").run(exports);