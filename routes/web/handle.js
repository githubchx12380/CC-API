const model = require('../common/model')
exports.categoryData = (req,res) => {    
    model.selectTable(req.model,null,(err,data) => {
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

exports.chromeViews = async (req,res) => {
   let obj = req.query
   const detailLength = await model.DetailLength('chrome_detail',obj.id)
   let len = detailLength[0].len
   let pagelen = Math.ceil(len / obj.pagesize)
   
   model.chromeSelects(obj,(err,data) => {
       if(err){
           res.send(err)
       }else{
    
           res.send({len,pagelen,data})
       }
   })
}

exports.inputLike = (req,res) => {
    let obj = req.body
    model.chromeSelects(obj, async (err,data) => {
        if(err){
            res.send(err)
        }else{
            const detailLength = await model.DetailLength('chrome_detail',null,obj.val)
            let len = detailLength[0].len
            let pagelen = Math.ceil(len / obj.pagesize)
            res.send({len,pagelen,data})
        }
    })
}


exports.detailData = (req,res) => {
    let id = req.params.id
    model.detailDetaSelect(id,(err,data) => {
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
}

exports.newindex = async (req,res) => {
    const news = await  model.newindexs()
    const hot = await model.hotData()
    res.send({news,hot})
}