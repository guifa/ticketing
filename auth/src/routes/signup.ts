import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validationResult } from "express-validator/src/validation-result";

const router = express.Router();

router.post('/api/v1/users/sign-up', [
    body('email')
        .isEmail()
        .withMessage('Provide a valid email'),
    body('password')
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage('Provide a valid password between 4 and 20 characters')
], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }

    const { email, password } = req.body;

    console.log('Creating user...', email, password);

    res.send({});
});

export { router as signUpRouter };