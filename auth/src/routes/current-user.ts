import express from "express";

const router = express.Router();

router.get('/api/v1/users/current-user', (req, res) => {
    res.send('This is the current user!');
});

export { router as currentUserRouter };