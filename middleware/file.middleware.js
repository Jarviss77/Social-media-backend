import multer from "multer";

export async function uploadimage(req, res, next){
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "public/assets/images");
        },
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    });
    const upload = multer({storage: storage});
    upload.single("Picture")
    next();
}

export async function uploadContent(req, res, next){
    const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "public/assets/stories");
        },
        filename: function(req, file, cb){
            cb(null, file.originalname);
        }
    });
    const upload = multer({storage: storage});
    upload.single("Story")
    next();
}


