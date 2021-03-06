//config multer
const multer = require("multer");
const storage = multer.diskStorage ({
    destination: function (req, file, cb){
        cb (null, path.join(__dirname, "../../public/images/user-images/"))
    },
    filename: function (req, file, cb){
        cb (null, "usuario" + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer ({ storage });

module.exports = upload;