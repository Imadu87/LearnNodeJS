// FileSystem
// const fs = require('fs');

// use for synchronous
// code are blocking here
// fs.writeFileSync('01_basic.txt', "Hello from Node.js")

// use for async
// the last console is run before the file created
// here the code is non blocking
// fs.writeFile('01_basic.txt', "Hello from Node Js", (err) => {
//     if (err) throw err;
//     console.log("File created Successfully")
// })

// console.log("This runs before file created")

// writeFileSync is synchronous and blocking
// writeFile is asynchronous and non-blocking

// File read karna
// fs.readFile('01_basic.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data, "readFile")
// })
// console.log("readFile")

// // File read karna synchronous
// const data = fs.readFileSync('01_basic.txt', 'utf-8');
// console.log(data, "readFileSync")
// const stringData = data.toString()
// console.log(stringData, "stringData")

// file append karna
// fs.appendFileSync('01_basic.txt', '\nNew line added!');
// console.log('File updated!');

// ------------------ Mini Project ------------------------
const fs = require("fs");
const path = require("path");

// file path
const filePath = path.join(__dirname, "01_basic.txt");
const newFile = path.join(__dirname, "02_basic.txt");

// create file
fs.writeFile(filePath, "Hello from Node js", (err) => {
  if (err) throw err;
  console.log("File created Successfully");
});
console.log("File System Mini Project");

// update file
fs.appendFile(filePath, "\nNew Line Added", (err) => {
  if (err) throw err;
  console.log("File updated Successfully");
});

// read File
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// delete some file
// fs.unlink(filePath, (err) => {
//   if (err) throw err;
//   console.log("File Deleted Successfully")
// });

// Buffer Example 
// fs.readFile(filePath, (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })
// usecase of buffer: images, audio, pdf etc

// stream example 
// const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
// readStream.on('data', (chunk) => {
//   console.log('Stream chunk:', chunk);
// });
// readStream.on('end', () => {
//   console.log('Finished reading with stream!');
// });
// usecase of stream: large files (videos, logs)
