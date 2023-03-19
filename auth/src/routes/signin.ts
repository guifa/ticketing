import express from "express";

const router = express.Router();

router.post('/api/v1/users/sign-in', (req, res) => {
    res.send('This is the current user!');
});

export { router as signInRouter };