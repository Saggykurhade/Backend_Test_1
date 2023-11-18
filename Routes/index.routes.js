import { Router } from "express";
import authRoutes from './Auth.routes.js';
// import productRoutes from './Product.routes.js'

const router = Router()

router.use("/auth", authRoutes)
// router.use("/product", productRoutes)

export default router
