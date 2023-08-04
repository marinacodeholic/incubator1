const http = require('http')

let requestsCount = 0;

const server = http.createServer(    (request, response)=> {requestsCount++

    switch (request.url) {
        case '/students':
            response.write('STUDENTS3')
            break;
        case '/':
            response.write('HOME')
            break;
        case '/courses':
            response.write('FRONT+BACK')
            break;
        default:
            response.write('404 not found')
    }
    response.write(' IT-KAMASUTRA: ' + requestsCount)
response.end()
})
server.listen(2023)
