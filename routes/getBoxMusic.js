var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/0/b/5/b/0b5b01aacf59238e378c87329363062c.jpg",
      title: "Nhạc Trữ Tình Remix"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/f/2/c/ef2c26ac46d060be57748c6acfbe1b06.jpg",
      title: "Sến Remix"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/0/6/c/906c05e4a8efd526b5938f3b39ec7e66.jpg",
      title: "Nhạc Trữ Tính Sôi Động"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/5/d/f/55df6ee22b76f326f9cbeb70c0cb7aa8.jpg",
      title: "Bolero Remix"
    }
  ]
  res.send({
    data: data
  });
});

module.exports = router;
