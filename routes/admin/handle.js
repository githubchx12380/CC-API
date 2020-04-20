const model = require('../common/model')

exports.GetSqltable = (req,res) => {
   let table = req.model
   
   model.selectTable(table,null,(err,data) => {
       if(err){
           res.send(err)
       }else{
           res.send(data)
       }
   })
}
exports.GetSqltableId = (req,res) => {
    let table = req.model
    let id = req.params.id
    model.selectTable(table,id,(err,data) => {
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

exports.PostSqltable = (req,res) => {
    model.InsertData(req.model,req.body,function (err,data) {
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}
exports.PutSqltable = (req,res) => {
    let obj = req.body
    let str = req.model
  
    model.UpdateTable(str,obj,(err,data) => {
         if(err){
             res.send(err)
         }else{
             res.send(data)
         }
    })
}
exports.DeleteSqltable = (req,res) => {
    let id = req.params.id
    let list = req.model
    model.deleteID(list,id,data => {
        res.send(data)
    })
}




exports.chromeSelect = async (req,res) => {
    let obj = req.query
    let Detaillength = await model.DetailLength('chrome_detail',null)
    let len = Detaillength[0].len
    model.chromeSelectsAdmin(obj,(err,data) => {
        if(err){
            res.send(err)
        }else{
            res.send({data,len})
        }
    })
}

exports.userpsd = (req,res) => {
    let obj = req.body
    model.userinfo(obj,(err,data) => {
        if(err){
            res.send(err)
        }else{
            res.send(data)
            // console.log(data)
        }
    })
}

exports.userLogin = (req,res) => {
    let obj = req.body
    model.loginverify(req,obj,(err,data) => {
        if(err){
            return res.status(301).send(err)
        }else{
            res.send(data)
        } 
    })
}

exports.useristra = (req,res) => {
    let obj = req.body
    model.updatepsd(obj,(err,data) => {
        if(err){
            res.send(err)
        }else{
            res.send(data)
        } 
    })
}