const multer = require('multer')
module.exports = app => {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null,__dirname + '/../../upload');
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
        file.url = `http://localhost:3000/upload/${file.filename}`
        res.send(file)
    })
    
}