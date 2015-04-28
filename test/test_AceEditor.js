var util = require("./util");

// See http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html

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
    "completions":[{"name":"addAttr","type":"fn(name: string, config: ?, lazy: bool)","origin":"yui3"},
                   {"name":"addAttrs","type":"fn(cfgs: yui.Object, values: yui.Object, lazy: bool)","origin":"yui3"},
                   {"name":"addTarget","type":"fn(o: event_custom.EventTarget)","origin":"yui3"},
                   {"name":"after","type":"fn(type: string, fn: fn(), context?: yui.Object, arg?: ?) -> event_custom.EventHandle","origin":"yui3"},
                   {"name":"ancestor","type":"fn(depth: number) -> widget.Widget","origin":"yui3"},
                   {"name":"attrAdded","type":"fn(name: string) -> bool","origin":"yui3"},
                   {"name":"before","type":"fn()","origin":"yui3"},{"name":"blur","type":"fn()","origin":"yui3"},
                   {"name":"bubble","type":"fn(evt: event_custom.CustomEvent) -> bool","origin":"yui3"},
                   {"name":"destroy","type":"fn(destroyAllNodes: bool)","origin":"yui3"},
                   {"name":"detach","type":"fn(type: string, fn: fn(), context: yui.Object) -> event_custom.EventTarget","origin":"yui3"},
                   {"name":"detachAll","type":"fn(type: string)","origin":"yui3"},
                   {"name":"disable","type":"fn()","origin":"yui3"},
                   {"name":"enable","type":"fn()","origin":"yui3"},{"name":"fire","type":"fn(type: string, arguments: yui.Object) -> bool","origin":"yui3"},
                   {"name":"focus","type":"fn()","origin":"yui3"},
                   {"name":"get","type":"fn(name: string)","origin":"yui3"},
                   {"name":"getAttrs","type":"fn(attrs: [string]) -> yui.Object","origin":"yui3"},
                   {"name":"getClassName","type":"fn(classnames?: string)","origin":"yui3"},
                   {"name":"getEditor","type":"fn()","origin":"aui2.0.x"},
                   {"name":"getEvent","type":"fn(type: string, prefixed: string) -> event_custom.CustomEvent","origin":"yui3"},
                   {"name":"getSelection","type":"fn()","origin":"aui2.0.x"},
                   {"name":"getSession","type":"fn()","origin":"aui2.0.x"},
                   {"name":"getSkinName","type":"fn(skinPrefix?: string) -> string","origin":"yui3"},
                   {"name":"getString","type":"fn(key: string) -> string","origin":"yui3"},
                   {"name":"getStrings","type":"fn(key: string) -> string","origin":"yui3"},
                   {"name":"getTargets","type":"fn()","origin":"yui3"},
                   {"name":"gotoLine","type":"fn(line: ?)","origin":"aui2.0.x"},
                   {"name":"hide","type":"fn()","origin":"yui3"},
                   {"name":"init","type":"fn(config: ?)","origin":"yui3"},
                   {"name":"insert","type":"fn(text: ?)","origin":"aui2.0.x"},
                   {"name":"isRoot","type":"fn() -> bool","origin":"yui3"},
                   {"name":"modifyAttr","type":"fn(name: string, config: ?)","origin":"yui3"},
                   {"name":"name","type":"string","origin":"yui3"},
                   {"name":"next","type":"fn(circular: bool) -> widget.Widget","origin":"yui3"},
                   {"name":"on","type":"fn(type: string, fn: fn(), context?: yui.Object, arg?: ?) -> event_custom.EventHandle","origin":"yui3"},
                   {"name":"once","type":"fn(type: string, fn: fn(), context?: yui.Object, arg?: ?) -> event_custom.EventHandle","origin":"yui3"},
                   {"name":"onceAfter","type":"fn(type: string, fn: fn(), context?: yui.Object, arg?: ?) -> event_custom.EventHandle","origin":"yui3"},
                   {"name":"parseType","type":"fn(type: string, pre?: string) -> yui.Array","origin":"yui3"},
                   {"name":"previous","type":"fn(circular: bool) -> widget.Widget","origin":"yui3"},
                   {"name":"publish","type":"fn(type: string, opts: yui.Object) -> event_custom.CustomEvent","origin":"yui3"},
                   {"name":"removeAttr","type":"fn(name: string)","origin":"yui3"},
                   {"name":"removeTarget","type":"fn(o: event_custom.EventTarget)","origin":"yui3"},
                   {"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"},
                   {"name":"reset","type":"fn(name: string)","origin":"yui3"},
                   {"name":"set","type":"fn(name: string, value: ?, opts: yui.Object)","origin":"yui3"},
                   {"name":"setAttrs","type":"fn(attrs: yui.Object, opts: yui.Object)","origin":"yui3"},
                   {"name":"show","type":"fn()","origin":"yui3"},
                   {"name":"subscribe","type":"fn()","origin":"yui3"},
                   {"name":"toString","type":"fn() -> string","origin":"yui3"},
                   {"name":"unsubscribe","type":"fn()","origin":"yui3"},
                   {"name":"unsubscribeAll","type":"fn(type: string)","origin":"yui3"},
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
    "completions":[{"name":"removeAttr","type":"fn(name: string)","origin":"yui3"},
                   {"name":"removeTarget","type":"fn(o: event_custom.EventTarget)","origin":"yui3"},
                   {"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"},
                   {"name":"reset","type":"fn(name: string)","origin":"yui3"}
                  ]
  });    

  util.assertCompletion("YUI().use('', function(Y) { var editor = new Y.AceEditor({}); editor.r", {
    "start":{"line":0,"ch":69},
    "end":{"line":0,"ch":70},
    "isProperty":true,
    "isObjectKey":false,
    "completions":[{"name":"removeAttr","type":"fn(name: string)","origin":"yui3"},
                   {"name":"removeTarget","type":"fn(o: event_custom.EventTarget)","origin":"yui3"},
                   {"name":"render","type":"fn(parentNode: yui.Object)","origin":"yui3"},
                   {"name":"reset","type":"fn(name: string)","origin":"yui3"}
                  ]
  }); 
}

// See https://github.com/angelozerr/tern-aui2.0.x/issues/8
//     https://github.com/angelozerr/tern-aui2.0.x/issues/18
exports['test Y.AceEditor Config Object Literal'] = function() {
  
  // Widget of YUI3 provides render, AceEditor inherits from this methods.
  // check object literal properties of AceEditor
  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({", {
    "start":{"line":0,"ch":45},
    "end":{"line":0,"ch":45},
    "isProperty":true,
    "isObjectKey":true,
    "completions":[{"name":"boundingBox","type":"string","origin":"yui3"},
                   {"name":"contentBox","type":"string","origin":"yui3"},
                   {"name":"disabled","type":"bool","origin":"yui3"},
                   {"name":"focused","type":"bool","origin":"yui3"},
                   {"name":"height","type":"number","origin":"aui2.0.x"},
                   {"name":"highlightActiveLine","type":"bool","origin":"aui2.0.x"},
                   {"name":"id","type":"string","origin":"yui3"},
                   {"name":"mode","type":"string","origin":"aui2.0.x"},
                   {"name":"readOnly","type":"bool","origin":"aui2.0.x"},
                   {"name":"render","type":"bool","origin":"yui3"},
                   {"name":"rendered","type":"bool","origin":"yui3"},
                   {"name":"showPrintMargin","type":"bool","origin":"aui2.0.x"},
                   {"name":"srcNode","type":"string","origin":"yui3"},
                   {"name":"strings","type":"yui.Object","origin":"yui3"},
                   {"name":"tabIndex","type":"number","origin":"yui3"},
                   {"name":"tabSize","type":"number","origin":"aui2.0.x"},
                   {"name":"useSoftTabs","type":"bool","origin":"aui2.0.x"},
                   {"name":"useWrapMode","type":"bool","origin":"aui2.0.x"},
                   {"name":"value","type":"string","origin":"aui2.0.x"},
                   {"name":"visible","type":"bool","origin":"yui3"},
                   {"name":"width","type":"number","origin":"aui2.0.x"}
                  ]
  });    

  util.assertCompletion("YUI().use('', function(Y) { new Y.AceEditor({b", {
    "start":{"line":0,"ch":45},
    "end":{"line":0,"ch":46},
    "isProperty":true,
    "isObjectKey":true,
    "completions":[{"name":"boundingBox","type":"string","origin":"yui3"}                   
                  ]
  }); 
}

if (module == require.main) require("test").run(exports);