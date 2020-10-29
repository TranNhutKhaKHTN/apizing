var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/a/8/6/2/a8626a5671f5a01250a074c4c8140cae.jpg",
      song: "Hoa Hải Đường",
      singer: "Jack",
      rank: 1,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/Jack%20-%20Hoa%20H%E1%BA%A3i%20%C4%90%C6%B0%E1%BB%9Dng%20-%20Official%20Music%20Video.mp3?alt=media&token=8bd7c113-48b0-487a-96c8-f8ab5f785413"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/c/7/0/cc709844d6aa6d3bf943bb91cf7ba662.jpg",
      song: "Họa Mây (Cố Gian Tình 2)",
      singer: "X2X",
      rank: 2,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/HO%E1%BA%A0%20M%C3%82Y%20(C%E1%BB%90%20GIANG%20T%C3%8CNH%202)%20-%20X2X%20Band%20ft.%20DinhLong%20-%20OFFICIAL%20MUSIC%20VIDEO.mp3?alt=media&token=80a02623-e035-4f9c-b26c-ced17c080f65"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/1/5/1/0151bcc5dc64312a9b6d9d2245aab54c.jpg",
      song: "Ai Mang Cô Đơn Đi",
      singer: "K-ICM, APJ",
      rank: 3,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/AI%20MANG%20C%C3%94%20%C4%90%C6%A0N%20%C4%90I%20-%20K-ICM%20FT.%20APJ%20-%20OFFICIAL%20AUDIO.mp3?alt=media&token=107273cb-9773-4be3-91b1-c13a6f8dfa85"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/9/e/b/7/9eb73a8fb45aba1b72c816cff2799ce3.jpg",
      song: "Sầu Hồng Gai",
      singer: "G5R Squad",
      rank: 4,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/S%E1%BA%A6U%20H%E1%BB%92NG%20GAI%20-%20JOMBIE%20x%20TKAN%20-%20OFFICIAL%20MUSIC%20VIDEO.mp3?alt=media&token=3d4e0625-eb88-4948-8fae-d19db25a15c8"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg",
      song: "Đánh Mất Em",
      singer: "Quang Đăng Trần",
      rank: 5,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/%C4%90%C3%81NH%20M%E1%BA%A4T%20...%20EM%20(MV%20OFFICIAL)%20-%20QUANG%20%C4%90%C4%82NG%20TR%E1%BA%A6N%20X%20ProD.%20DUY%20NGUY%E1%BB%86N%20-%20DUSK%20MUSIC.mp3?alt=media&token=441dea50-b759-480c-b2f4-6ef2faab87b0"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/8/1/e/f81efd92fa9a3d52eb37f3b867ab9d32.jpg",
      song: "Bông Hoa Đẹp Nhất",
      singer: "Quân A.P",
      rank: 6,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/QU%C3%82N%20A.P%20-%20B%C3%94NG%20HOA%20%C4%90%E1%BA%B8P%20NH%E1%BA%A4T%20%5BOFFICIAL%20LYRICS%20VIDEO%5D.mp3?alt=media&token=ddeb4211-29b5-4a5f-bbdc-f2b3b632be66"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg",
      song: "Bỏ Lỡ Một Người",
      singer: "Lê Bảo Bình",
      rank: 7,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/B%E1%BB%8E%20L%E1%BB%A0%20M%E1%BB%98T%20NG%C6%AF%E1%BB%9CI%20-%20L%C3%8A%20B%E1%BA%A2O%20B%C3%8CNH%20-%20OFFICIAL%20MUSIC%20VIDEO.mp3?alt=media&token=faf500b0-df15-4e02-96ef-511ac1b0c9d3"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/4/9/b/749ba06d29317d07bdbd2617808b8a7f.jpg",
      song: "Khác Biệt To Lớn",
      singer: "Trịnh Thăng Bình, Liz Kim Cương",
      rank: 8,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/gi%E1%BB%AFa%20ch%C3%BAng%20ta%20c%C3%B3%20KH%C3%81C%20BI%E1%BB%86T%20TO%20L%E1%BB%9AN%20-%20TR%E1%BB%8ANH%20TH%C4%82NG%20B%C3%8CNH%20x%20LIZ%20KIM%20C%C6%AF%C6%A0NG%20-%20OFFICIAL%20MUSIC%20VIDEO.mp3?alt=media&token=afa5fc70-7052-49de-8e36-019a6cdb41b2"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/e/e/b/feebaec84a211ff8c46a2d803f7a646c.jpg",
      song: "Chắc Vì Mình Chưa Tốt",
      singer: "Thanh Hưng",
      rank: 9,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/Ch%E1%BA%AFc%20V%C3%AC%20M%C3%ACnh%20Ch%C6%B0a%20T%E1%BB%91t%20-%20Thanh%20H%C6%B0ng%20(Lyrics%20Video).mp3?alt=media&token=8e2fc95a-e869-4d69-beb0-1cab758d1fc0"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/a/5/1/5a5164496ababbca1496193ec8b8afb1.jpg",
      song: "Bigcityboy",
      singer: "Binz, Touliver",
      rank: 10,
      link: "https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/TOULIVER%20x%20BINZ%20-%20-BIGCITYBOI-%20(Official%20Music%20Video).mp3?alt=media&token=f11842d6-927c-4d66-8fd5-d7250f1940a9"
    },
  ]
  res.send({
    data: data
  });
});

module.exports = router;
