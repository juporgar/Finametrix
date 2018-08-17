const Multer = require('multer');
const path = require('path');


class uploadService {
    constructor() {
        this.storage = Multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, path.join(__dirname, 'public/files'));
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
    }

    up() {
        let storage = this.storage;
        let upload = Multer({
            storage
        });
        return upload;
    }

};

module.exports = uploadService;