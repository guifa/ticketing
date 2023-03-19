import express from "express";

const router = express.Router();

router.post('/api/v1/users/sign-up', (req, res) => {
    res.send('This is the current user!');
});

export { router as signUpRouter };