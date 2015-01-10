var fs = require("fs");
var aui2tern = require("../aui2tern");

var filepath =  __dirname + '/../../aui2.0.x.js';
make_plugin(filepath);

function make_plugin(fpath) {
  var filename = __dirname+"/../data/api.json";
  var api = JSON.parse(fs.readFileSync(filename, "utf8"));
  var def = aui2tern.AUI.generate(api);

  var rbuff = fs.readFileSync(__dirname+"/template.js", "utf8");
  var wbuff = rbuff.replace(/'!def'/, function() { return JSON.stringify(def, null, ' ');});
  fs.writeFile(fpath, wbuff, "utf8", function (err) {
      if ( err ) {
          console.error("Failed write plugin : "+err);
          process.exit(1);
      }
      console.info("Finished make plugin : "+fpath);
  });
}