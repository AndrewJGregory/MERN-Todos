const express = require("express");
const router = express.Router();

router.get("/:id", function(req, res, next) {
  res.send({ id: req.params.id });
});

module.exports = router;
