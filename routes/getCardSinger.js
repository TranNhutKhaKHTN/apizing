var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/1/4/0/c140ebb6799391799b29a8eabae217f5.jpg",
      care: 101,
      singer: "Đạt G"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/9/c/e/6/9ce68f7d32102e37837bf3d87c82895c.jpg",
      care: 81,
      singer: "B Ray"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/4/84ffbc3c35a04d698f157a129e68d51a_1499686528.jpg",
      care: 77,
      singer: "Khắc Việt"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/a/3/3/c/a33cb5d2cb3d43a2854c6377ce21d3a7.jpg",
      care: 77,
      singer: "Hòa Minzy"
    }
  ]
  res.send({
    data: data
  });
});

module.exports = router;
