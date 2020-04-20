
const express = require('express')

const app = express()



app.use(require('cors')())  //跨域
app.use(express.json())
app.use(express.urlencoded({ extended: false }))  //body-parser
app.use('/',express.static('./web/.nuxt'))
app.use('/admin',express.static('./admin')) 
app.use('/upload',express.static('./upload'))  //发放图片

app.set('selects','qweoiqweoiqpeipqiwoe')
require('./routes/admin/router')(app)
require('./routes/web/router')(app)
require('./routes/common/midden')(app)

app.listen(3001,() => {
    console.log('http://localhost:3001')
})
