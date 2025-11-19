import { Router } from "express";
import { Auth } from "@auth/core";
import Email from "@auth/core/providers/email";

const router = Router();

router.use("/auth/email", (req, res) => {
    return Auth(req, res, {
        providers: [
            Email({
                server: process.env.EMAIL_SERVER!,   // e.g. smtp://user:pass@smtp.server.com:587
                from: process.env.EMAIL_FROM!,       // e.g. "StudyBuddy <noreply@yourapp.com>"
            })
        ],
        secret: process.env.AUTH_SECRET!,
    });
});

export default router;