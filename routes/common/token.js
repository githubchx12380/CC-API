const jwt = require('jsonwebtoken')
const model = require('./model')
module.exports = (req,res,next) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    if(!token){
        console.log(1)
        return  res.status(401).send({message:'请先登录'})
    }
    
    const {id} = jwt.verify(token,req.app.get('selects'))
    
    // locals:
    if(!id){
        console.log(req.app.get);
        
        console.log(2)
        return res.status(401).send({message:'请先登录'})
    }
    model.SelectIid(id,(err,data) => {
        if(err){
            console.log(3)
            return res.status(401).send({message:'请先登录'})
        }
        next()
    })
}