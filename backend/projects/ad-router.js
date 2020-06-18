const express = require('express');
const Ad = require('./ad-model');
const multer = require('multer');
const router = express.Router();

/*const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid Mime Type');
    if (isValid) {
      error = null;
    }
    cb(error, "uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname;
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name);
  }
});

const upload = multer({storage: storage});*/

router.post('', (req, res, next) =>{
  videoPath = req.body.videoPath.split('=', 2);
  const ad = new Ad({
    name: req.body.name,
    date: new Date(req.body.date),
    description: req.body.description,
    videoPath: 'https://www.youtube.com/embed/' + videoPath[1]
  });
  ad.save();
  res.status(201).json({
    message: 'added with success',
    ad: ad
  });
});

router.get('', (req, res, next) =>{
  console.log(req.query);
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.currentpage;
  const postQuery = Ad.find();
  if(pageSize && currentPage) {
    postQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  postQuery
    .then((documents) => {
      res.status(200).json({
        message: 'ads sent successfully',
        ads: documents
      });
    });
});

router.delete('', (req, res, next) => {
  Ad.deleteMany()
    .then(() => {
      res.status(200).json({
        message: 'all deleted'
      });
    });
});

module.exports = router;
