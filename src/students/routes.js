const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", controller.getstudents);
router.get("/:id", controller.getstudentsbyid);
router.post("/", controller.addstudent);
router.delete("/:id", controller.deletestudent);
router.put("/:id", controller.updatestudent);

module.exports = router;
