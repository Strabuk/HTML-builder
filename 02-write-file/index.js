const { stdout, stdin, exit } = process;
const path = require ('path');
const fs = require ('fs');
const streams = fs.createWriteStream(path.join(__dirname, 'text.txt'));
stdout.write ('Здравствуйте, введите пожалуйста текст...\n');
stdin.on ('data', insertText);
process.on('SIGINT', closeApplication);

function insertText(text) {
 if (text.toString().trim() === 'exit') {
  closeApplication();
 } else {
  streams.write(text);
 }
};

function closeApplication() {
 stdout.write('До свидания.');
 exit();
};
