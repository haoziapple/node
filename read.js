`use strict`

var fs = require('fs');

// 异步读文件
fs.readFile('main.js', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('同步读文件');

var data =fs.readFileSync('hello.js', 'utf-8');

console.log(data);

