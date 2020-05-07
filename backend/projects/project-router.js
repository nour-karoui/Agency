const express = require('express');
const Project = require('./project-model');
const multer = require('multer');
const router = express.Router();

const MIME_TYPE_MAP = {
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

const upload = multer({storage: storage});

router.post('', upload.single('projectImage'), (req, res, next) =>{
  const url = req.protocol + '://' + req.get('host');
  console.log(req.file.path);
  const project = new Project({
    name: req.body.name,
    date: new Date(req.body.date),
    isVideo: req.body.isVideo,
    imagePath: url + '/images/' + req.file.filename,
    videoPath: req.body.videoPath
  });
  console.log(project);
  project.save();
  res.status(201).json({
    message: 'added with success'
  });
});

router.get('', (req, res, next) =>{
  Project.find()
    .then((documents) => {
      res.status(200).json({
        message: 'projects sent successfully',
        projects: documents
      });
    });
});

router.delete('', (req, res, next) => {
  Project.deleteMany()
    .then(() => {
      res.status(200).json({
        message: 'all deleted'
      });
    });
});

module.exports = router;
