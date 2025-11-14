// auth-server/index.js
import express from "express";
import { ExpressAuth } from "@auth/express";
import GitHub from "@auth/core/providers/github";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
    "/api/auth/*",
    ExpressAuth({
        providers: [
            GitHub({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET,
            }),
        ],
        secret: process.env.AUTH_SECRET,
    })
);

app.listen(3000, () => console.log("Auth server running at http://localhost:3000"));