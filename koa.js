const koa = require('koa')

var app = new koa()
app.keys =['im a new secret','i like koa']

app
    .use(function* () {
        this.body = {
            name: 'aaa'
        }
        console.log(this.request.url)
        this.cookies.set('name', 'weibo', {
            signed: true
        })
    })
    .listen(3000, 'localhost', () => {
        console.log('starting on port: ', 3000)
    })