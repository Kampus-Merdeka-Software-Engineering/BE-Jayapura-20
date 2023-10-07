const express = require('express');
const router = express.Router();
const controller = require("./controller/index");
const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: async(req, file, cb) => {
        const date = new Date();
        const ext = path.extname(file.originalname);
        const filename =  `${date.getTime()}${ext}`;
        cb(null, filename);
    },
});


/* route init */
router.get('/daerah', controller.daerah)
router.get('/filter', controller.filter)
router.post('/review', [
    multer({
        storage: diskStorage,
    }).fields([{ name: "image"}]),
], 
controller.addReview)

module.exports = router;
