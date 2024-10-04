import { log } from "console";
import path from "path";
// console.log(path.basename("e:\\nodejs-tutor\\4. Path Modeul\\index.js")) // print file name with extension
// console.log(path.basename("e:\\nodejs-tutor\\4. Path Modeul\\index.js", ".js")) // print file name without extension
// console.log(path.dirname("e:\\nodejs-tutor\\4. Path Modeul\\index.js")) // print file name without extension
// console.log(path.extname("e:\\nodejs-tutor\\4. Path Modeul\\index.js"))// print extensionx
//console.log(path.normalize("e:\\nodejs-tutor\\4. Path Modeul\\index.js"))
// console.log(path.join('c:','/foo', '/bar', 'baz/asdf', 'app.js')); // create a path by joining
// console.log(path.join('c:','/foo', '/bar', 'baz/asdf', 'app.js','..')); //Go up a level
console.log(path.parse("e:\\nodejs-tutor\\4. Path Modeul\\index.js"));
console.log(path.parse("e:\\nodejs-tutor\\4. Path Modeul\\index.js").base);
console.log(path.parse("e:\\nodejs-tutor\\4. Path Modeul\\index.js").name);
console.log(path.parse("e:\\nodejs-tutor\\4. Path Modeul\\index.js").ext);