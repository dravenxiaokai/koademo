const koa = require('koa')

var app = new koa()

app.use(function* () {
    this.body = {
        name: 'aaa'
    }
})

app.listen(3000, 'localhost', () => {
    console.log('starting on port: ', 3000)
})
app.listen(3001, 'localhost', () => {
    console.log('starting on port: ', 3001)
})