import express from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

app.post("/sign-changeset", (req, res) => {
    const { referenceId, changes } = req.body;

    const payload = {
        iss: process.env.SHOPIFY_API_KEY,
        jti: uuidv4(),
        iat: Date.now(),
        sub: referenceId,
        changes,
    };

    const token = jwt.sign(payload, process.env.SHOPIFY_API_SECRET);
    res.json({ token });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
