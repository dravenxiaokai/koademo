const koa = require('koa')

var app = new koa()
app.keys = ['im a new secret', 'i like koa']

app
    .use(function* () {
        // this.throw(404,'name required')
        var controller = this.request.path
        if (controller == '/test' || controller == '/test/') {
            this.body = {
                test: 'ok'
            }
        } else if (controller == '/index' || controller == '/index/') {
            this.body = 'hello koajs'
            console.log(this.request.query)
        } else {
            this.throw(404, '当前内容并未找到')
        }
        console.log(this.request.url)
        // this.cookies.set('name', 'weibo', {
        //     signed: true
        // })
        // console.log(this.cookies.get('name'))
        console.log(this.request.path)
    })
    .listen(3000, 'localhost', () => {
        console.log('starting on port: ', 3000)
    })