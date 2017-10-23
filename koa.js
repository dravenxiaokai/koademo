const koa = require('koa')

var app = new koa()

app
    .use(function* () {
        this.body = {
            name: 'aaa'
        }
    })
    .listen(3000, 'localhost', () => {
        console.log('starting on port: ', 3000)
    })