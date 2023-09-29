const express = require("express");
const taskcontroller = require("../../controller/taskcontroller");
const router = express.Router();


router.post("/taskcreate" , taskcontroller.create);
router.get("/gettasks", taskcontroller.gettasks);
router.delete("/deletetask/:id" ,taskcontroller.deltask);

module.exports = router;