const path = require ('path');
const fs = require ('fs');

fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', error => {
  if (error) throw err;
  console.log('create document');
 }
);

fs.readdir(path.join(__dirname, 'styles'), (error, files) => {
 if (error) throw error;
 for ( const file of files) {
  let extname = path.extname(file);
  if ( extname === '.css') {
   fs.readFile(path.join(__dirname, 'styles', file), (error, data) => {
    if (error) throw error;
    fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'), data, error => {
     if (error) throw error;
    });
   });
  };
 };
});