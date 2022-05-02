import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   res.render("layout", { template: "home" });
});

router.get("/request", (req, res) => {
   res.render("layout", { template: "request" });
});

router.get("/page_followed", (req, res) => {
   res.render("layout", { template: "page_followed" });
});

router.get("/post", (req, res) => {
   res.render("layout", { template: "post" });
});

export default router;