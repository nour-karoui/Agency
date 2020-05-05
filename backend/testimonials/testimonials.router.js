const express = require('express');
const Testimonial = require('./testimonials.model');
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


router.post('',
  (req, res, next) =>{
  const url = req.protocol + '://' + req.get('host');
  const testimonial = new Testimonial({
    name: req.body.name,
    origin: req.body.origin,
    comment: req.body.comment,
    country: req.body.country
  });
  testimonial.save();
  res.status(201).json({
    message: 'added with success',
    testimonials: testimonial
  });
});


router.get('', (req, res, next) =>{

  Testimonial.find()
    .then((documents) => {
      res.status(200).json({
        message: 'testimonials sent successfully',
        testimonials: documents
      });
    });
});

router.delete('/:id',
  (req, res) => {
    Testimonial.remove({
      _id: req.params.id
    }, function (err) {
      if (err)
        res.send(err);
      res.json({ 'success': 'Deleted successfully' })
    });
  });


router.delete('', (req, res, next) => {
  Testimonial.deleteMany()
    .then(() => {
      res.status(200).json({
        message: 'all deleted'
      });
    });
});

module.exports = router;
