/* eslint-disable prettier/prettier */

const path = require('path');
const fs = require('fs');

const args = process.argv.slice(2);

const copy = args => {
  const customAppName = args[0] || 'exampleTool'
  const destFolder = path.resolve(__dirname, 'dist');
  const srcFolder = path.resolve(__dirname, 'buildTemplates');
  const filesToCopy = ['exampleTool.xml', 'exampleToolIcon.png'];

  filesToCopy.forEach(file => {
    const srcPath = path.resolve(srcFolder, file);
    const destPath = path.resolve(destFolder, file);
    const fileExtension = file.split('.')[1];
    fs.copyFileSync(srcPath, destPath);
    fs.renameSync(destPath, `${destFolder}/${customAppName}.${fileExtension}`);
  });
};

copy(args);
