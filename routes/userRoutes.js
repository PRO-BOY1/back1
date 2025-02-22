import express from "express";

const router = express.Router();

// Example route: Get user info
router.get("/profile", (req, res) => {
    res.json({ message: "User profile route working!" });
});

export default router;
