module.exports = app => {
    const express = require('express')
    const router = express.Router({mergeParams:true})
    const handle = require('./handle')
    app.use(router)
    app.use('/move/:resource', async (req, res, next) => {
        req.model = req.params.resource
        next()
    }, router)
    router.get('/',handle.categoryData) //chrome分类
          .get('/chrome/views',handle.chromeViews) //视图数据赛选
          .post('/inputLike',handle.inputLike)  //input搜索
          .get('/detail/:id',handle.detailData)
          .get('/newindex',handle.newindex) //最新收录
           
}