import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   res.render("layout", { template: "home" });
});
router.get("/request", (req, res) => {
   res.render("layout", { template: "request" });
});

export default router;