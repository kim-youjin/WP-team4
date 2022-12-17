const router = require("express").Router();
const Lecture = require("../models/Lecture");

router.post("/", (req, res) => {
  const lecture = new Lecture();
  lecture.title = req.body.title;
  lecture.tutor = req.body.tutor;
  lecture.detail = req.body.detail;

  lecture.save((err, result) => {
    if (err) res.json(err);
    res.json(result);
  });
});

// 전체 클래스 출력
router.get("/", (req, res) => {
    Lecture.find({})
      .exec((err, lectures) => {
        if (err) return res.json(err);
        res.json(lectures);
      });
  });

// 특정 클래스 출력
router.get("/:lecture_id", (req, res) => {
    Lecture.findOne({ _id: req.params.lecture_id }, (err, result) => {
      if (err) res.json(err);
      res.json(result);
    });
  });

module.exports = router;