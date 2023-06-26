var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const marksController = require("../controllers/marksController");

router.post("/add-student", async (req, res) => {
  data = req.body;
  data.user_id = uuidv4();
  marksController.create(data, (err, studentResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: studentResponse,
    });
  });
});

router.post("/update-student", (req, res) => {
  let data = req.body;
  marksController.findOneAndUpdate(
    { user_id: req.body.user_id },
    data,
    (err, updatedStudent) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedStudent,
      });
    }
  );
});

router.get("/find-student/:id", (req, res) => {
  marksController.find({ user_id: req.params.id }, (err, studentDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: studentDetails,
    });
  });
});

router.post("/delete-student", (req, res) => {
  marksController.findOneAndRemove(
    { user_id: req.body.user_id },
    (err, deletedStudent) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedStudent,
      });
    }
  );
});

router.get("/find-all-students", (req, res) => {
  marksController.find({}, (err, allStudentDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allStudentDetails,
    });
  });
});

module.exports = router;
