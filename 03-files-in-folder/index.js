const path = require ('path');
const fs = require ('fs');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, ( error, files) => {
 if (error) throw error;
 for (const file of files) {
  if (file.isFile()) {
   fs.stat(path.join(__dirname, './secret-folder', file.name), (error, stats) => {
    if (error) throw error;
    let basename = path.basename(file.name);
    let extname = path.extname(file.name);
    let sizefile = (stats.size / 1024).toFixed(3) + ' kb';
    basename = basename.replace(extname, '');
    extname = extname.slice(1);

    console.log(basename, '-', extname, '-', sizefile);
   })
  }
 }
});
