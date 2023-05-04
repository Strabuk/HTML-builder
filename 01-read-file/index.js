const { stdout } = process;
const path = require ('path');
const fs = require ('fs');
const streams = fs.createReadStream(path.join(__dirname, './text.txt'));
streams.on ('data', (el) => stdout.write(el));