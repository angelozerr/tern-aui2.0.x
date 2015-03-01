# tern-aui2.0.x

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-aui2.0.x.png)](http://travis-ci.org/angelozerr/tern-aui2.0.x)

[tern-aui2.0.x](https://github.com/angelozerr/tern-aui2.0.x) is a plugin which adds support for [AlloyUI 2.0.x](http://alloyui.com/versions/2.0.x/) to the JavaScript code intelligence system [Tern](http://ternjs.net/).

Please read [Features](https://github.com/angelozerr/tern-aui2.0.x/wiki/Features) to see the whole feature of this tern plugin.

## Demo

You can see demo with CodeMirror (inside Web Browser) [demos/aui.html](https://github.com/angelozerr/tern-aui2.0.x/blob/master/demos/aui.html) :

![CodeMirror & Y Modules](https://github.com/angelozerr/tern-aui2.0.x/wiki/images/CodeMirror_CompletionForYModules.png)

If you wish to use Eclipse as IDE, see Eclipse support for [AlloyUI support](https://github.com/angelozerr/tern.java/wiki/Tern-&-AlloyUI-support).

![Eclipse & Y Modules](https://github.com/angelozerr/tern-aui2.0.x/wiki/images/Eclipse_CompletionForYModules.png)

## <a name="installation"></a> Installation

`tern-aui2.0.x` works with the NodeJS [tern-server(http://ternjs.net/doc/manual.html#server), and within a browser. It depends on :

 * brower and ecma5 JSON Type Definitions coming from the tern.
 * [yui3](https://github.com/angelozerr/tern-yui3) tern plugin.

### Short version

After installing Tern according the setup instructions of your desired [editor
plugin]([tern-editor]: http://ternjs.net/doc/manual.html#editor), go to the place where the [Tern package](https://www.npmjs.org/package/tern) was
installed (or the [Tern repo](https://github.com/marijnh/tern) was cloned) and run

```
$ npm install tern-aui2.0.x
```

Or, if you're not sure where Tern was installed, you can try
```
$ npm install -g tern-aui2.0.x
```

### Long version

See [INSTALL.md](INSTALL.md) for instructions tailored to each editor.

## <a name="configuration"></a> Configuration

### With Node.js

In order for Tern to load the tern-aui2.0.x plugin once it is installed, you must
include `aui2.0.x` in the `plugins` section of your [Tern configuration
file][tern-config]. The configuration file can be either a file named
`.tern-project` in your project's root directory, or `.tern-config` in your home
directory.

You must also explicitly disable the default `doc_comment` plugin, which will
interfere with tern-aui2.0.x.

Here is a minimal example `.tern-project` configuration file:

```json
{
  "libs": ["ecma5","browser"],
  "plugins": {
    "yui3": {},
    "aui2.0.x": {}
  }
}
```

Note that [yui3](https://github.com/angelozerr/tern-yui3) tern plugin must be declared before `aui2.0.x`

<a name="project-dir"></a>
#### "Project directory" and `.tern-project` vs `.tern-config`

Tern looks for `.tern-project` first, walking up the directory tree, and uses
its location as the "project directory". If no `.tern-project` is found, your
`.tern-config` is loaded instead, and *the working directory of the Tern server
process is used as the "project directory"*.

### With WebBrowser (CodeMirror)

See [demos/aui.html](https://github.com/angelozerr/tern-aui2.0.x/blob/master/demos/aui.html)

## How to generate aui2.0.x?

### Introduction

TODO

## Structure

The basic structure of the project is given in the following way:

* `aui2.0.x.js` the tern plugin.
* `demos/` demos with `aui2.0.x` tern plugin which use CodeMirror.
