var util = require("./util");

exports['test Y.AceEditor completion'] = function() {
  // check AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.A", {
    "name":"AceEditor",
    "type":"fn(config: {})",
    "origin":"aui2.0.x"
  }, "AceEditor");
  
  // check methods of AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({}).", {
    "start":{"line":0,"ch":48},
    "end":{"line":0,"ch":48},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"ancestor","type":"fn(depth: number) -> widget.Widget","origin":"yui3"},
                   {"name":"blur","type":"fn()","origin":"yui3"},
                   {"name":"destroy","type":"fn(destroyAllNodes: bool)","origin":"yui3"},
                   {"name":"disable","type":"fn()","origin":"yui3"},
                   {"name":"enable","type":"fn()","origin":"yui3"},
                   {"name":"focus","type":"fn()","origin":"yui3"},
                   {"name":"getClassName","type":"fn(classnames?: string)","origin":"yui3"},
                   {"name":"getEditor","type":"fn()","origin":"aui2.0.x"},
                   {"name":"getSelection","type":"fn()","origin":"aui2.0.x"},
                   {"name":"getSession","type":"fn()","origin":"aui2.0.x"},
                   {"name":"getSkinName","type":"fn(skinPrefix?: string) -> string","origin":"yui3"},
                   {"name":"getString","type":"fn(key: string) -> string","origin":"yui3"},
                   {"name":"getStrings","type":"fn(key: string) -> string","origin":"yui3"},
                   {"name":"gotoLine","type":"fn(line: ?)","origin":"aui2.0.x"},
                   {"name":"hide","type":"fn()","origin":"yui3"},{"name":"insert","type":"fn(text: ?)","origin":"aui2.0.x"},
                   {"name":"isRoot","type":"fn() -> bool","origin":"yui3"},
                   {"name":"next","type":"fn(circular: bool) -> widget.Widget","origin":"yui3"},
                   {"name":"previous","type":"fn(circular: bool) -> widget.Widget","origin":"yui3"},
                   {"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"},
                   {"name":"show","type":"fn()","origin":"yui3"},
                   {"name":"toString","type":"fn() -> string","origin":"yui3"},
                   {"name":"BOUNDING_TEMPLATE","type":"string","origin":"yui3"},
                   {"name":"CONTENT_TEMPLATE","type":"string","origin":"yui3"},
                   {"name":"DEF_PARENT_NODE","type":"string","origin":"yui3"},
                   {"name":"DEF_UNIT","type":"string","origin":"yui3"},
                   {"name":"UI_EVENTS","type":"yui.Object","origin":"yui3"}
                  ]
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
    "completions":[{"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"}
                  ]
  });    

  util.assertCompletion("YUI().use('', function(Y) { var editor = new Y.AceEditor({}); editor.r", {
    "start":{"line":0,"ch":69},
    "end":{"line":0,"ch":70},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"}
                  ]
  }); 
}

// see https://github.com/angelozerr/tern-aui2.0.x/issues/8
exports['test Y.AceEditor Config Object Literal'] = function() {
  
  // Widget of YUI3 provides render, AceEditor inherits from this methods.
  // check methods of AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({", {
    "start":{"line":0,"ch":45},
    "end":{"line":0,"ch":45},
    "isProperty":true,
    "isObjectKey":true,
    "completions":[{"name":"height","type":"number","origin":"aui2.0.x"},
                   {"name":"highlightActiveLine","type":"bool","origin":"aui2.0.x"},
                   {"name":"mode","type":"string","origin":"aui2.0.x"},
                   {"name":"readOnly","type":"bool","origin":"aui2.0.x"},
                   {"name":"showPrintMargin","type":"bool","origin":"aui2.0.x"},
                   {"name":"tabSize","type":"number","origin":"aui2.0.x"},
                   {"name":"useSoftTabs","type":"bool","origin":"aui2.0.x"},
                   {"name":"useWrapMode","type":"bool","origin":"aui2.0.x"},
                   {"name":"value","type":"string","origin":"aui2.0.x"},
                   {"name":"width","type":"number","origin":"aui2.0.x"}
                  ]
  });    

}

if (module == require.main) require("test").run(exports);