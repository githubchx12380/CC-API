const mysql = require('mysql')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')


const connetion = mysql.createConnection({
    host:"127.0.0.1",
    user:'root',
    password:'root',
    database:'myblog'
})
exports.selectTable = (table,id,callback) => {
    let sql = `select * from ${table}`
    if(id){
        sql += ` where ${table}_id = ${id}`
    }
    connetion.query(sql,(err,result) => {
        if(err){
            callback({code:302,msg:'请传入正确的表名称'})
        }else{
            callback(null,result)
        }
    })
}
exports.UpdateTable = (str,obj,callback) => {
    let id = str + '_id'
    let sql = `update ${str} set ? where ${id} = ${obj[id]}`
    connetion.query(sql,obj,(err,result) => {
        if(err){
            callback({code:302,msg:'修改失败'})
        }else{
            callback(null,{code:200,meg:'修改成功'})
        }
    })
}

exports.InsertData = (list,obj,callback) => {
    let sql = 'INSERT into '+ list +' set ?'
    connetion.query(sql,obj,(err,result) => {
        if(err){
            callback(err)
            return
        }else if(result.affectedRows === 1){
            callback({code:200,msg:'新增成功'})
        }
    })
}


exports.deleteID = (list,id,callback) => {
    var sql = `DELETE FROM ${list} where ${list}_id=${id}`
    connetion.query(sql,(err,result) => {
        if(err){
            callback({code:404})
        }else{
            callback({code:200,success:true})
        }
    })
}





//详情页总长度查询
exports.DetailLength = (str,id,value) => {
    return new Promise((resolve,reject) => {
       let sql = `SELECT COUNT(*) len FROM ${str} WHERE 1=1`
       if(id){
           sql += ` and chrome_category_id = ${id}`
       }
       if(value){
           sql += ` and chrome_name like "%${value}%"`
       }
        connetion.query(sql,(err,result) => {
            if(err){
                reject({code:403,msg:'详情页长度查询失败'})
            }else{
                resolve(result)
            }
        })
    })
}
//admin
exports.chromeSelectsAdmin = (obj,callback) => {
    let sql = `SELECT * FROM chrome_detail,chrome_category WHERE chrome_detail.chrome_category_id = chrome_category.chrome_category_id order by date desc limit ${obj.page * obj.pagesize},${obj.pagesize}`
    connetion.query(sql,(err,result) => {
        if(err){
            callback({code:403,msg:'插件查询失败'})
        }else{
            callback(null,result)
        }
    })
}
//插件关联查询
exports.chromeSelects = (obj,callback) => {
    let sql = `SELECT * FROM chrome_detail,chrome_category WHERE chrome_detail.chrome_category_id = chrome_category.chrome_category_id`
    if(obj.val){
        sql += ` and chrome_name like "%${obj.val}%"`
    }else{
        sql += ` and chrome_detail.chrome_category_id = ${obj.id}`
    }
    if(obj.pagesize){
        sql += ` order by date desc limit ${obj.page * obj.pagesize},${obj.pagesize}`
    }
    connetion.query(sql,(err,result) => {
        if(err){
            callback({code:403,msg:'插件查询失败'})
        }else{
            callback(null,result)
        }
    })
}
exports.detailDetaSelect = (id,callback) => {
    let sql = `select * from chrome_detail,chrome_category where chrome_detail.chrome_category_id = chrome_category.chrome_category_id and chrome_detail_id = ${id}`
    connetion.query(sql,(err,result) => {
        if(err){
            callback({code:404,msg:'请传入正确的id'})
        }else{
            callback(null,result)
        }
    })
}


exports.newindexs = () => {
    let sql = 'select * from chrome_detail,chrome_category where chrome_detail.chrome_category_id = chrome_category.chrome_category_id order by date desc limit 0,5'
    return new Promise((resolve,reject) => {
       connetion.query(sql,(err,result) => {
           if(err){
               reject({code:402,msg:'new查询失败'})
           }else{
               resolve(result)
           }
       }) 
    } )
}


exports.hotData = () => {
    let sql = `SELECT  *  FROM  chrome_detail,chrome_category WHERE chrome_detail.chrome_category_id = chrome_category.chrome_category_id ORDER BY RAND() LIMIT 5`
    return new Promise((resolve,reject) => {
        connetion.query(sql,(err,result)=> {
            if(err){
                reject({code:402,msg:'随机查询失败'})
            }else{
                resolve(result)
            }
        })
    })
}

//管理员
exports.userinfo = (obj,callback) => {
   let hash = bcrypt.hashSync(obj.password,salt)
   obj = {
       username:obj.username,
       password:hash
   }
   console.log('hash:',hash)
   let sql = `insert into user set ?`
   connetion.query(sql,obj,(err,result) => {
       if(err){
           callback(err)
       }else if(result.affectedRows === 1){
        callback(null,result)
     }
   })
}


exports.loginverify = (req,obj,callback) => {
    let sql = `SELECT * FROM user where username='${obj.username}'`
    connetion.query(sql, (err,result) => {
        if(result.length == 0){
           callback({code:301,message:'用户名不存在'}) 
           return
        }
            const psd = bcrypt.compareSync(obj.password,result[0].password)
        if(!psd){
           callback({code:302,message:'密码错误'})
           return
        }
            const token = jwt.sign({id:result[0].user_id},req.app.get('selects'))
            const name = result[0].username
            callback(null,{token,name})
    })
}

//token效验
exports.SelectIid = (id,callback) => {
        var sql  = `SELECT * FROM user where user_id=${id}`
    connetion.query(sql,(err,result) => {
        if(err){
            callback({code:404,message:"错误"})
        }else{
            callback(null,result)
        }
    })
}


exports.updatepsd = (obj,callback) => {
    let hash = bcrypt.hashSync(obj.password,salt)
    let sql = `update user set ? where user_id=${obj.user_id}`
    obj = {
        username:obj.username,
        password:hash
    }
    
    connetion.query(sql,obj,(err,result) => {
        if(err){
            callback(err)
            console.log(err);
            
        }else if(result.affectedRows === 1){
            console.log(result);
            
         callback(null,result)
      }
    })
 }
 
