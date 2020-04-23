const multer = require('multer')
const path = require('path')
module.exports = app => {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
           
            cb(null,path.join(__dirname,'/../../upload'));
        },
        filename: function (req, file, cb) {
            let houz = file.originalname.split('.').pop()
            cb(null,`file-${Date.now()}.${houz}`)
        }
    });
    var uploadfiles = multer({
        storage: storage
    });this.name
    // const upload = multer({ dest: __dirname + '/../../upload' })
    app.post('/admin/api/upload', uploadfiles.single('file'), (req, res) => {
        const file = req.file
        file.url = `https://node.12380ch.com/upload/${file.filename}`
        res.send(file)
    })
    
}