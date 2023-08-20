const http = require('http');

let requestCount = 0;

const server = http.createServer((request, response) => {
    requestCount++;


    switch (request.url) {
        case '/':
        case '/students':
            response.write('courses ');
        break;
        case 'courses':
            response.write('FRONT BACK ');
            break;
        default:
            response.write('404 ')
    }
    response.write('IT-KAMASUTRA: ' + requestCount);
    response.end();
})

server.listen(2023)

/*
let counter = 0;

setInterval(() => {
    counter++
    console.log(counter);

}, 1000);*/
