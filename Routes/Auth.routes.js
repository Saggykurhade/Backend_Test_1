import { Router } from "express";
import { Register } from "../Controllers/Auth.controllers.js"

const router = Router ();

// router.post("/login", Login)
router.post("/register", Register)

export default router