import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   res.render("layout", { template: "home" });
});


export default router;