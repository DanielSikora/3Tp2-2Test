// console.log("Hello, world!");
const fs = require('fs');

fs.readFile("example.txt", 'utf-8', (err, data) => {
    if (err) {
        console.log('Błąd podczas odczytu pliku: ', err);
    } else {
        console.log(data);
    }
});

//nowa funkcja wyświtlanie czasu co sekundę\

let count = 1;

const interval = setInterval(() => {
    console.log(count);
    if (count === 5) {
        clearInterval(interval);
    }
    count++;
}, 1000);