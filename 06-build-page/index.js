//Create project directory

fs.mkdir(path.join(__dirname, 'project-dist'), { recursive: true }, error => {
    if (error) throw error;
   });

//Create style css file in project directory

   fs.writeFile(path.join(__dirname, 'project-dist', 'style.css'), '', error => {
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
      fs.appendFile(path.join(__dirname, 'project-dist', 'style.css'), data, error => {
       if (error) throw error;
      });
     });
    };
   };
  });

//Create index html file in project directory

fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), '', error => {
    if (error) throw err;
    console.log('create document');
   }
  );
     fs.readFile(path.join(__dirname, 'template.html'), (error, data) => {
      if (error) throw error;
      fs.appendFile(path.join(__dirname, 'project-dist', 'index.html'), data, error => {
       if (error) throw error;
      });
     });

// copy assets directory

fs.mkdir(path.join(__dirname, '.project-dist/assets'), { recursive: true }, error => {
    if (error) throw error;
   });

   fs.readdir(path.join(__dirname, '.project-dist/assets'), (error, files) => {
    if (error) throw error;
    for ( const file of files) {
     fs.unlink(path.join(__dirname, '.project-dist/assets', file), error => {
      if (error) throw error;
     });
    };
   });

   fs.readdir(path.join(__dirname, 'assets'), (error, files) => {
    if (error) throw error;
    for ( const file of files) {
    fs.copyFile(path.join(__dirname, 'assets', file), path.join(__dirname, '.project-dist/assets', file), error => {
     if (error) throw error;
    });
    };
   });