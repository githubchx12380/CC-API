module.exports = app => {
    const express = require('express')
    const router = express.Router({ mergeParams: true })
    const handle = require('./handle')
    const auth = require('../common/token')
    app.use('/admin/api', router)
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        req.model = req.params.resource
        next()
    }, router)
  
   
   
    router.get('/',auth, handle.GetSqltable)
          .get('/:id', auth,handle.GetSqltableId)
          .post('/', auth,handle.PostSqltable)
          .put('/:id',auth,handle.PutSqltable)
          .delete('/:id',auth, handle.DeleteSqltable) //增删改查
          .get('/chrome/detail/select', auth,handle.chromeSelect)
          .post('/user/pad',auth,handle.userpsd)  //新增管理员
          .put('/user/istra/:id',auth,handle.useristra)
    app.post('/admin/api/user/login',handle.userLogin)
}