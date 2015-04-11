var util = require("./util");

exports['test YUI Module Completion'] = function() {
	util.assertCompletion("YUI().use('an'", {
	    "start":{"line":0,"ch":10},
	    "end":{"line":0,"ch":14},
	    "isProperty":false,
	    "isObjectKey":false,
	    "completions":[{"name":"'anim'","type":"anim","origin":"yui3","displayName":"anim"}]
	}, null, 1);
	
	// Test completion with '-' inside module name like async-queue 
    util.assertCompletion("YUI().use('as'", {
      "start":{"line":0,"ch":10},
      "end":{"line":0,"ch":14},
      "isProperty":false,
      "isObjectKey":false,
      "completions":[{"name":"'async-queue'","type":"async_queue","origin":"yui3","displayName":"async-queue"}]
    }, null, 1);	
}

exports['test AlloyUI Module Completion'] = function() {
  util.assertCompletion("YUI().use('aui-ace-e'", {
      "start":{"line":0,"ch":10},
      "end":{"line":0,"ch":21},
      "isProperty":false,
      "isObjectKey":false,
      "completions":[{"name":"'aui-ace-editor'","type":"_yui.aui_ace_editor","origin":"aui2.0.x","displayName":"aui-ace-editor"}]
  }, null, 1);
  
}

if (module == require.main) require("test").run(exports);