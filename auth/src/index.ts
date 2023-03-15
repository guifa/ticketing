import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get('/api/v1/users/current-user', (req, res) => {
    res.send('This is the current user!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});