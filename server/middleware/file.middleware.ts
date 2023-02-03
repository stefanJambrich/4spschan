import multer, { diskStorage } from 'multer';

const storage = diskStorage({
    destination(req, file, callback) {
        callback(null, './public');
    },
    filename(req, file, callback) {
        callback(null, file.originalname);
    }
});

/**
 * , fileFilter: (req, file, cb) => {
        console.log(file.originalname)
        file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/gif"
            ? cb(null, true)
            : cb(null, false);
    }
 */

export const upload = multer({
    storage: storage, limits: { fileSize: 10000000, files: 1 }
});